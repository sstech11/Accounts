import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReportsModuleBase } from "./base/reports.module.base";
import { ReportsService } from "./reports.service";
import { ReportsController } from "./reports.controller";
import { ReportsResolver } from "./reports.resolver";

@Module({
  imports: [ReportsModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReportsController],
  providers: [ReportsService, ReportsResolver],
  exports: [ReportsService],
})
export class ReportsModule {}
