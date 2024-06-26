import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReconciliationServiceBase } from "./base/reconciliation.service.base";

@Injectable()
export class ReconciliationService extends ReconciliationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
