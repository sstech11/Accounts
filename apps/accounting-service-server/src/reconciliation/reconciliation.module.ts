import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReconciliationModuleBase } from "./base/reconciliation.module.base";
import { ReconciliationService } from "./reconciliation.service";
import { ReconciliationController } from "./reconciliation.controller";
import { ReconciliationResolver } from "./reconciliation.resolver";

@Module({
  imports: [ReconciliationModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReconciliationController],
  providers: [ReconciliationService, ReconciliationResolver],
  exports: [ReconciliationService],
})
export class ReconciliationModule {}
