import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ArApInvoicesService } from "./arApInvoices.service";
import { ArApInvoicesControllerBase } from "./base/arApInvoices.controller.base";

@swagger.ApiTags("arApInvoices")
@common.Controller("arApInvoices")
export class ArApInvoicesController extends ArApInvoicesControllerBase {
  constructor(
    protected readonly service: ArApInvoicesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
