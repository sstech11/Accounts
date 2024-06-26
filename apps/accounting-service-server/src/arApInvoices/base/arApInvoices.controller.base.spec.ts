import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ArApInvoicesController } from "../arApInvoices.controller";
import { ArApInvoicesService } from "../arApInvoices.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  description: "exampleDescription",
  discounts: 42.42,
  dueDate: new Date(),
  id: "exampleId",
  paymentTerms: "examplePaymentTerms",
  penalties: 42.42,
  price: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  description: "exampleDescription",
  discounts: 42.42,
  dueDate: new Date(),
  id: "exampleId",
  paymentTerms: "examplePaymentTerms",
  penalties: 42.42,
  price: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    description: "exampleDescription",
    discounts: 42.42,
    dueDate: new Date(),
    id: "exampleId",
    paymentTerms: "examplePaymentTerms",
    penalties: 42.42,
    price: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  description: "exampleDescription",
  discounts: 42.42,
  dueDate: new Date(),
  id: "exampleId",
  paymentTerms: "examplePaymentTerms",
  penalties: 42.42,
  price: 42.42,
  updatedAt: new Date(),
};

const service = {
  createArApInvoices() {
    return CREATE_RESULT;
  },
  arApInvoicesItems: () => FIND_MANY_RESULT,
  arApInvoices: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("ArApInvoices", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ArApInvoicesService,
          useValue: service,
        },
      ],
      controllers: [ArApInvoicesController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /arApInvoices", async () => {
    await request(app.getHttpServer())
      .post("/arApInvoices")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dueDate: CREATE_RESULT.dueDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /arApInvoices", async () => {
    await request(app.getHttpServer())
      .get("/arApInvoices")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dueDate: FIND_MANY_RESULT[0].dueDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /arApInvoices/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/arApInvoices"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /arApInvoices/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/arApInvoices"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dueDate: FIND_ONE_RESULT.dueDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /arApInvoices existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/arApInvoices")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dueDate: CREATE_RESULT.dueDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/arApInvoices")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
