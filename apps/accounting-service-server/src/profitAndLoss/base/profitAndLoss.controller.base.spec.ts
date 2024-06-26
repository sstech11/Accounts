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
import { ProfitAndLossController } from "../profitAndLoss.controller";
import { ProfitAndLossService } from "../profitAndLoss.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  cogs: 42.42,
  createdAt: new Date(),
  grossProfit: 42.42,
  id: "exampleId",
  incomeBeforeTax: 42.42,
  incomeTax: 42.42,
  netIncome: 42.42,
  nonOperatingExpenses: 42.42,
  nonOperatingIncome: 42.42,
  operatingExpenses: 42.42,
  operatingIncome: 42.42,
  revenue: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  cogs: 42.42,
  createdAt: new Date(),
  grossProfit: 42.42,
  id: "exampleId",
  incomeBeforeTax: 42.42,
  incomeTax: 42.42,
  netIncome: 42.42,
  nonOperatingExpenses: 42.42,
  nonOperatingIncome: 42.42,
  operatingExpenses: 42.42,
  operatingIncome: 42.42,
  revenue: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    cogs: 42.42,
    createdAt: new Date(),
    grossProfit: 42.42,
    id: "exampleId",
    incomeBeforeTax: 42.42,
    incomeTax: 42.42,
    netIncome: 42.42,
    nonOperatingExpenses: 42.42,
    nonOperatingIncome: 42.42,
    operatingExpenses: 42.42,
    operatingIncome: 42.42,
    revenue: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  cogs: 42.42,
  createdAt: new Date(),
  grossProfit: 42.42,
  id: "exampleId",
  incomeBeforeTax: 42.42,
  incomeTax: 42.42,
  netIncome: 42.42,
  nonOperatingExpenses: 42.42,
  nonOperatingIncome: 42.42,
  operatingExpenses: 42.42,
  operatingIncome: 42.42,
  revenue: 42.42,
  updatedAt: new Date(),
};

const service = {
  createProfitAndLoss() {
    return CREATE_RESULT;
  },
  profitAndLosses: () => FIND_MANY_RESULT,
  profitAndLoss: ({ where }: { where: { id: string } }) => {
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

describe("ProfitAndLoss", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ProfitAndLossService,
          useValue: service,
        },
      ],
      controllers: [ProfitAndLossController],
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

  test("POST /profitAndLosses", async () => {
    await request(app.getHttpServer())
      .post("/profitAndLosses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /profitAndLosses", async () => {
    await request(app.getHttpServer())
      .get("/profitAndLosses")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /profitAndLosses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/profitAndLosses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /profitAndLosses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/profitAndLosses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /profitAndLosses existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/profitAndLosses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/profitAndLosses")
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
