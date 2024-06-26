import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JournalsServiceBase } from "./base/journals.service.base";

@Injectable()
export class JournalsService extends JournalsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
