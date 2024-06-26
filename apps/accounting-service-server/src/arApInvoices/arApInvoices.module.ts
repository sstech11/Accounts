import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ArApInvoicesModuleBase } from "./base/arApInvoices.module.base";
import { ArApInvoicesService } from "./arApInvoices.service";
import { ArApInvoicesController } from "./arApInvoices.controller";
import { ArApInvoicesResolver } from "./arApInvoices.resolver";

@Module({
  imports: [ArApInvoicesModuleBase, forwardRef(() => AuthModule)],
  controllers: [ArApInvoicesController],
  providers: [ArApInvoicesService, ArApInvoicesResolver],
  exports: [ArApInvoicesService],
})
export class ArApInvoicesModule {}
