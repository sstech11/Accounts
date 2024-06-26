import { SortOrder } from "../../util/SortOrder";

export type LedgerOrderByInput = {
  accountName?: SortOrder;
  createdAt?: SortOrder;
  credit?: SortOrder;
  debit?: SortOrder;
  id?: SortOrder;
  transactionDate?: SortOrder;
  updatedAt?: SortOrder;
};
