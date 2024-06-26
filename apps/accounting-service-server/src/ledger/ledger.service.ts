import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LedgerServiceBase } from "./base/ledger.service.base";

@Injectable()
export class LedgerService extends LedgerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
