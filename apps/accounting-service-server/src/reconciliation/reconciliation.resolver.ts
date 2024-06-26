import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ReconciliationResolverBase } from "./base/reconciliation.resolver.base";
import { Reconciliation } from "./base/Reconciliation";
import { ReconciliationService } from "./reconciliation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Reconciliation)
export class ReconciliationResolver extends ReconciliationResolverBase {
  constructor(
    protected readonly service: ReconciliationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
