/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Reports } from "./Reports";
import { ReportsCountArgs } from "./ReportsCountArgs";
import { ReportsFindManyArgs } from "./ReportsFindManyArgs";
import { ReportsFindUniqueArgs } from "./ReportsFindUniqueArgs";
import { CreateReportsArgs } from "./CreateReportsArgs";
import { UpdateReportsArgs } from "./UpdateReportsArgs";
import { DeleteReportsArgs } from "./DeleteReportsArgs";
import { ReportsService } from "../reports.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Reports)
export class ReportsResolverBase {
  constructor(
    protected readonly service: ReportsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Reports",
    action: "read",
    possession: "any",
  })
  async _reportsItemsMeta(
    @graphql.Args() args: ReportsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Reports])
  @nestAccessControl.UseRoles({
    resource: "Reports",
    action: "read",
    possession: "any",
  })
  async reportsItems(
    @graphql.Args() args: ReportsFindManyArgs
  ): Promise<Reports[]> {
    return this.service.reportsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Reports, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Reports",
    action: "read",
    possession: "own",
  })
  async reports(
    @graphql.Args() args: ReportsFindUniqueArgs
  ): Promise<Reports | null> {
    const result = await this.service.reports(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Reports)
  @nestAccessControl.UseRoles({
    resource: "Reports",
    action: "create",
    possession: "any",
  })
  async createReports(
    @graphql.Args() args: CreateReportsArgs
  ): Promise<Reports> {
    return await this.service.createReports({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Reports)
  @nestAccessControl.UseRoles({
    resource: "Reports",
    action: "update",
    possession: "any",
  })
  async updateReports(
    @graphql.Args() args: UpdateReportsArgs
  ): Promise<Reports | null> {
    try {
      return await this.service.updateReports({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Reports)
  @nestAccessControl.UseRoles({
    resource: "Reports",
    action: "delete",
    possession: "any",
  })
  async deleteReports(
    @graphql.Args() args: DeleteReportsArgs
  ): Promise<Reports | null> {
    try {
      return await this.service.deleteReports(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
