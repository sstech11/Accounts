import { ReconciliationWhereInput } from "./ReconciliationWhereInput";
import { ReconciliationOrderByInput } from "./ReconciliationOrderByInput";

export type ReconciliationFindManyArgs = {
  where?: ReconciliationWhereInput;
  orderBy?: Array<ReconciliationOrderByInput>;
  skip?: number;
  take?: number;
};
