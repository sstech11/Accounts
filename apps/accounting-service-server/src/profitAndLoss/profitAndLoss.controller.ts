import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProfitAndLossService } from "./profitAndLoss.service";
import { ProfitAndLossControllerBase } from "./base/profitAndLoss.controller.base";

@swagger.ApiTags("profitAndLosses")
@common.Controller("profitAndLosses")
export class ProfitAndLossController extends ProfitAndLossControllerBase {
  constructor(
    protected readonly service: ProfitAndLossService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
