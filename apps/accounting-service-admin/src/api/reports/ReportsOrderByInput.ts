import { SortOrder } from "../../util/SortOrder";

export type ReportsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  reportContent?: SortOrder;
  reportType?: SortOrder;
  updatedAt?: SortOrder;
};
