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
import { Ledger } from "./Ledger";
import { LedgerCountArgs } from "./LedgerCountArgs";
import { LedgerFindManyArgs } from "./LedgerFindManyArgs";
import { LedgerFindUniqueArgs } from "./LedgerFindUniqueArgs";
import { CreateLedgerArgs } from "./CreateLedgerArgs";
import { UpdateLedgerArgs } from "./UpdateLedgerArgs";
import { DeleteLedgerArgs } from "./DeleteLedgerArgs";
import { LedgerService } from "../ledger.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Ledger)
export class LedgerResolverBase {
  constructor(
    protected readonly service: LedgerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Ledger",
    action: "read",
    possession: "any",
  })
  async _ledgersMeta(
    @graphql.Args() args: LedgerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Ledger])
  @nestAccessControl.UseRoles({
    resource: "Ledger",
    action: "read",
    possession: "any",
  })
  async ledgers(@graphql.Args() args: LedgerFindManyArgs): Promise<Ledger[]> {
    return this.service.ledgers(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Ledger, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Ledger",
    action: "read",
    possession: "own",
  })
  async ledger(
    @graphql.Args() args: LedgerFindUniqueArgs
  ): Promise<Ledger | null> {
    const result = await this.service.ledger(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Ledger)
  @nestAccessControl.UseRoles({
    resource: "Ledger",
    action: "create",
    possession: "any",
  })
  async createLedger(@graphql.Args() args: CreateLedgerArgs): Promise<Ledger> {
    return await this.service.createLedger({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Ledger)
  @nestAccessControl.UseRoles({
    resource: "Ledger",
    action: "update",
    possession: "any",
  })
  async updateLedger(
    @graphql.Args() args: UpdateLedgerArgs
  ): Promise<Ledger | null> {
    try {
      return await this.service.updateLedger({
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

  @graphql.Mutation(() => Ledger)
  @nestAccessControl.UseRoles({
    resource: "Ledger",
    action: "delete",
    possession: "any",
  })
  async deleteLedger(
    @graphql.Args() args: DeleteLedgerArgs
  ): Promise<Ledger | null> {
    try {
      return await this.service.deleteLedger(args);
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
