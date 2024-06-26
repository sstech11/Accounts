import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ReconciliationWhereInput = {
  bankStatementBalance?: FloatNullableFilter;
  difference?: FloatNullableFilter;
  id?: StringFilter;
  ledgerBalance?: FloatNullableFilter;
};
