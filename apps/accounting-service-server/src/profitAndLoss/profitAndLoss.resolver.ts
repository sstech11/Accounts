import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProfitAndLossResolverBase } from "./base/profitAndLoss.resolver.base";
import { ProfitAndLoss } from "./base/ProfitAndLoss";
import { ProfitAndLossService } from "./profitAndLoss.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProfitAndLoss)
export class ProfitAndLossResolver extends ProfitAndLossResolverBase {
  constructor(
    protected readonly service: ProfitAndLossService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
