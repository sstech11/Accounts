/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ProfitAndLoss as PrismaProfitAndLoss } from "@prisma/client";

export class ProfitAndLossServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProfitAndLossCountArgs, "select">
  ): Promise<number> {
    return this.prisma.profitAndLoss.count(args);
  }

  async profitAndLosses(
    args: Prisma.ProfitAndLossFindManyArgs
  ): Promise<PrismaProfitAndLoss[]> {
    return this.prisma.profitAndLoss.findMany(args);
  }
  async profitAndLoss(
    args: Prisma.ProfitAndLossFindUniqueArgs
  ): Promise<PrismaProfitAndLoss | null> {
    return this.prisma.profitAndLoss.findUnique(args);
  }
  async createProfitAndLoss(
    args: Prisma.ProfitAndLossCreateArgs
  ): Promise<PrismaProfitAndLoss> {
    return this.prisma.profitAndLoss.create(args);
  }
  async updateProfitAndLoss(
    args: Prisma.ProfitAndLossUpdateArgs
  ): Promise<PrismaProfitAndLoss> {
    return this.prisma.profitAndLoss.update(args);
  }
  async deleteProfitAndLoss(
    args: Prisma.ProfitAndLossDeleteArgs
  ): Promise<PrismaProfitAndLoss> {
    return this.prisma.profitAndLoss.delete(args);
  }
}
