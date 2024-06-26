import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { JournalsModuleBase } from "./base/journals.module.base";
import { JournalsService } from "./journals.service";
import { JournalsController } from "./journals.controller";
import { JournalsResolver } from "./journals.resolver";

@Module({
  imports: [JournalsModuleBase, forwardRef(() => AuthModule)],
  controllers: [JournalsController],
  providers: [JournalsService, JournalsResolver],
  exports: [JournalsService],
})
export class JournalsModule {}
