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
import { JournalsService } from "../journals.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { JournalsCreateInput } from "./JournalsCreateInput";
import { Journals } from "./Journals";
import { JournalsFindManyArgs } from "./JournalsFindManyArgs";
import { JournalsWhereUniqueInput } from "./JournalsWhereUniqueInput";
import { JournalsUpdateInput } from "./JournalsUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class JournalsControllerBase {
  constructor(
    protected readonly service: JournalsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Journals })
  @nestAccessControl.UseRoles({
    resource: "Journals",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: JournalsCreateInput,
  })
  async createJournals(
    @common.Body() data: JournalsCreateInput
  ): Promise<Journals> {
    return await this.service.createJournals({
      data: data,
      select: {
        createdAt: true,
        creditAmount: true,
        date: true,
        debitAmount: true,
        id: true,
        transactionType: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Journals] })
  @ApiNestedQuery(JournalsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Journals",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async journalsItems(@common.Req() request: Request): Promise<Journals[]> {
    const args = plainToClass(JournalsFindManyArgs, request.query);
    return this.service.journalsItems({
      ...args,
      select: {
        createdAt: true,
        creditAmount: true,
        date: true,
        debitAmount: true,
        id: true,
        transactionType: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Journals })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Journals",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async journals(
    @common.Param() params: JournalsWhereUniqueInput
  ): Promise<Journals | null> {
    const result = await this.service.journals({
      where: params,
      select: {
        createdAt: true,
        creditAmount: true,
        date: true,
        debitAmount: true,
        id: true,
        transactionType: true,
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
  @swagger.ApiOkResponse({ type: Journals })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Journals",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: JournalsUpdateInput,
  })
  async updateJournals(
    @common.Param() params: JournalsWhereUniqueInput,
    @common.Body() data: JournalsUpdateInput
  ): Promise<Journals | null> {
    try {
      return await this.service.updateJournals({
        where: params,
        data: data,
        select: {
          createdAt: true,
          creditAmount: true,
          date: true,
          debitAmount: true,
          id: true,
          transactionType: true,
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
  @swagger.ApiOkResponse({ type: Journals })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Journals",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteJournals(
    @common.Param() params: JournalsWhereUniqueInput
  ): Promise<Journals | null> {
    try {
      return await this.service.deleteJournals({
        where: params,
        select: {
          createdAt: true,
          creditAmount: true,
          date: true,
          debitAmount: true,
          id: true,
          transactionType: true,
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
