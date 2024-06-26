import { LedgerWhereInput } from "./LedgerWhereInput";
import { LedgerOrderByInput } from "./LedgerOrderByInput";

export type LedgerFindManyArgs = {
  where?: LedgerWhereInput;
  orderBy?: Array<LedgerOrderByInput>;
  skip?: number;
  take?: number;
};
