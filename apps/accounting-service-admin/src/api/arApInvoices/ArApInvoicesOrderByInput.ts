import { SortOrder } from "../../util/SortOrder";

export type ArApInvoicesOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  discounts?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  paymentTerms?: SortOrder;
  penalties?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
