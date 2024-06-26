import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProfitAndLossWhereInput = {
  cogs?: FloatNullableFilter;
  grossProfit?: FloatNullableFilter;
  id?: StringFilter;
  incomeBeforeTax?: FloatNullableFilter;
  incomeTax?: FloatNullableFilter;
  netIncome?: FloatNullableFilter;
  nonOperatingExpenses?: FloatNullableFilter;
  nonOperatingIncome?: FloatNullableFilter;
  operatingExpenses?: FloatNullableFilter;
  operatingIncome?: FloatNullableFilter;
  revenue?: FloatNullableFilter;
};
