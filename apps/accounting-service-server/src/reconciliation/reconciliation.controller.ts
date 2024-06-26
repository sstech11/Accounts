import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReconciliationService } from "./reconciliation.service";
import { ReconciliationControllerBase } from "./base/reconciliation.controller.base";

@swagger.ApiTags("reconciliations")
@common.Controller("reconciliations")
export class ReconciliationController extends ReconciliationControllerBase {
  constructor(
    protected readonly service: ReconciliationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
