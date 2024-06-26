import { SortOrder } from "../../util/SortOrder";

export type JournalsOrderByInput = {
  createdAt?: SortOrder;
  creditAmount?: SortOrder;
  date?: SortOrder;
  debitAmount?: SortOrder;
  id?: SortOrder;
  transactionType?: SortOrder;
  updatedAt?: SortOrder;
};
