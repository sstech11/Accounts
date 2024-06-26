import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type JournalsWhereInput = {
  creditAmount?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  debitAmount?: FloatNullableFilter;
  id?: StringFilter;
  transactionType?: StringNullableFilter;
};
