import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReportsService } from "./reports.service";
import { ReportsControllerBase } from "./base/reports.controller.base";

@swagger.ApiTags("reports")
@common.Controller("reports")
export class ReportsController extends ReportsControllerBase {
  constructor(
    protected readonly service: ReportsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
