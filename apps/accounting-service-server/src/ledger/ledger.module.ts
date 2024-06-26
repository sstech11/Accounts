import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LedgerModuleBase } from "./base/ledger.module.base";
import { LedgerService } from "./ledger.service";
import { LedgerController } from "./ledger.controller";
import { LedgerResolver } from "./ledger.resolver";

@Module({
  imports: [LedgerModuleBase, forwardRef(() => AuthModule)],
  controllers: [LedgerController],
  providers: [LedgerService, LedgerResolver],
  exports: [LedgerService],
})
export class LedgerModule {}
