import { SortOrder } from "../../util/SortOrder";

export type ProfitAndLossOrderByInput = {
  cogs?: SortOrder;
  createdAt?: SortOrder;
  grossProfit?: SortOrder;
  id?: SortOrder;
  incomeBeforeTax?: SortOrder;
  incomeTax?: SortOrder;
  netIncome?: SortOrder;
  nonOperatingExpenses?: SortOrder;
  nonOperatingIncome?: SortOrder;
  operatingExpenses?: SortOrder;
  operatingIncome?: SortOrder;
  revenue?: SortOrder;
  updatedAt?: SortOrder;
};
