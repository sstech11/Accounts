import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ArApInvoicesResolverBase } from "./base/arApInvoices.resolver.base";
import { ArApInvoices } from "./base/ArApInvoices";
import { ArApInvoicesService } from "./arApInvoices.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ArApInvoices)
export class ArApInvoicesResolver extends ArApInvoicesResolverBase {
  constructor(
    protected readonly service: ArApInvoicesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
