import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type LedgerWhereInput = {
  accountName?: StringNullableFilter;
  credit?: FloatNullableFilter;
  debit?: FloatNullableFilter;
  id?: StringFilter;
  transactionDate?: DateTimeNullableFilter;
};
