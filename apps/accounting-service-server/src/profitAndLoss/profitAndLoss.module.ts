import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProfitAndLossModuleBase } from "./base/profitAndLoss.module.base";
import { ProfitAndLossService } from "./profitAndLoss.service";
import { ProfitAndLossController } from "./profitAndLoss.controller";
import { ProfitAndLossResolver } from "./profitAndLoss.resolver";

@Module({
  imports: [ProfitAndLossModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProfitAndLossController],
  providers: [ProfitAndLossService, ProfitAndLossResolver],
  exports: [ProfitAndLossService],
})
export class ProfitAndLossModule {}
