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
import { Reconciliation } from "./Reconciliation";
import { ReconciliationCountArgs } from "./ReconciliationCountArgs";
import { ReconciliationFindManyArgs } from "./ReconciliationFindManyArgs";
import { ReconciliationFindUniqueArgs } from "./ReconciliationFindUniqueArgs";
import { CreateReconciliationArgs } from "./CreateReconciliationArgs";
import { UpdateReconciliationArgs } from "./UpdateReconciliationArgs";
import { DeleteReconciliationArgs } from "./DeleteReconciliationArgs";
import { ReconciliationService } from "../reconciliation.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Reconciliation)
export class ReconciliationResolverBase {
  constructor(
    protected readonly service: ReconciliationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Reconciliation",
    action: "read",
    possession: "any",
  })
  async _reconciliationsMeta(
    @graphql.Args() args: ReconciliationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Reconciliation])
  @nestAccessControl.UseRoles({
    resource: "Reconciliation",
    action: "read",
    possession: "any",
  })
  async reconciliations(
    @graphql.Args() args: ReconciliationFindManyArgs
  ): Promise<Reconciliation[]> {
    return this.service.reconciliations(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Reconciliation, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Reconciliation",
    action: "read",
    possession: "own",
  })
  async reconciliation(
    @graphql.Args() args: ReconciliationFindUniqueArgs
  ): Promise<Reconciliation | null> {
    const result = await this.service.reconciliation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Reconciliation)
  @nestAccessControl.UseRoles({
    resource: "Reconciliation",
    action: "create",
    possession: "any",
  })
  async createReconciliation(
    @graphql.Args() args: CreateReconciliationArgs
  ): Promise<Reconciliation> {
    return await this.service.createReconciliation({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Reconciliation)
  @nestAccessControl.UseRoles({
    resource: "Reconciliation",
    action: "update",
    possession: "any",
  })
  async updateReconciliation(
    @graphql.Args() args: UpdateReconciliationArgs
  ): Promise<Reconciliation | null> {
    try {
      return await this.service.updateReconciliation({
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

  @graphql.Mutation(() => Reconciliation)
  @nestAccessControl.UseRoles({
    resource: "Reconciliation",
    action: "delete",
    possession: "any",
  })
  async deleteReconciliation(
    @graphql.Args() args: DeleteReconciliationArgs
  ): Promise<Reconciliation | null> {
    try {
      return await this.service.deleteReconciliation(args);
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
