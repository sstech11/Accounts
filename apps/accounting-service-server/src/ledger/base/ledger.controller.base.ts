/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { LedgerService } from "../ledger.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { LedgerCreateInput } from "./LedgerCreateInput";
import { Ledger } from "./Ledger";
import { LedgerFindManyArgs } from "./LedgerFindManyArgs";
import { LedgerWhereUniqueInput } from "./LedgerWhereUniqueInput";
import { LedgerUpdateInput } from "./LedgerUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class LedgerControllerBase {
  constructor(
    protected readonly service: LedgerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Ledger })
  @nestAccessControl.UseRoles({
    resource: "Ledger",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: LedgerCreateInput,
  })
  async createLedger(@common.Body() data: LedgerCreateInput): Promise<Ledger> {
    return await this.service.createLedger({
      data: data,
      select: {
        accountName: true,
        createdAt: true,
        credit: true,
        debit: true,
        id: true,
        transactionDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Ledger] })
  @ApiNestedQuery(LedgerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Ledger",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ledgers(@common.Req() request: Request): Promise<Ledger[]> {
    const args = plainToClass(LedgerFindManyArgs, request.query);
    return this.service.ledgers({
      ...args,
      select: {
        accountName: true,
        createdAt: true,
        credit: true,
        debit: true,
        id: true,
        transactionDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Ledger })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Ledger",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ledger(
    @common.Param() params: LedgerWhereUniqueInput
  ): Promise<Ledger | null> {
    const result = await this.service.ledger({
      where: params,
      select: {
        accountName: true,
        createdAt: true,
        credit: true,
        debit: true,
        id: true,
        transactionDate: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Ledger })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Ledger",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: LedgerUpdateInput,
  })
  async updateLedger(
    @common.Param() params: LedgerWhereUniqueInput,
    @common.Body() data: LedgerUpdateInput
  ): Promise<Ledger | null> {
    try {
      return await this.service.updateLedger({
        where: params,
        data: data,
        select: {
          accountName: true,
          createdAt: true,
          credit: true,
          debit: true,
          id: true,
          transactionDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Ledger })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Ledger",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteLedger(
    @common.Param() params: LedgerWhereUniqueInput
  ): Promise<Ledger | null> {
    try {
      return await this.service.deleteLedger({
        where: params,
        select: {
          accountName: true,
          createdAt: true,
          credit: true,
          debit: true,
          id: true,
          transactionDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}