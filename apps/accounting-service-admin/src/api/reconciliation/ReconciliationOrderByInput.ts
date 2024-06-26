import { SortOrder } from "../../util/SortOrder";

export type ReconciliationOrderByInput = {
  bankStatementBalance?: SortOrder;
  createdAt?: SortOrder;
  difference?: SortOrder;
  id?: SortOrder;
  ledgerBalance?: SortOrder;
  updatedAt?: SortOrder;
};
