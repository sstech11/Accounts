import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProfitAndLossServiceBase } from "./base/profitAndLoss.service.base";

@Injectable()
export class ProfitAndLossService extends ProfitAndLossServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
