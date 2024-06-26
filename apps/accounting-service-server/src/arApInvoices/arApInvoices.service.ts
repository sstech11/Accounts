import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ArApInvoicesServiceBase } from "./base/arApInvoices.service.base";

@Injectable()
export class ArApInvoicesService extends ArApInvoicesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
