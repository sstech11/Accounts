import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { JournalsService } from "./journals.service";
import { JournalsControllerBase } from "./base/journals.controller.base";

@swagger.ApiTags("journals")
@common.Controller("journals")
export class JournalsController extends JournalsControllerBase {
  constructor(
    protected readonly service: JournalsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
