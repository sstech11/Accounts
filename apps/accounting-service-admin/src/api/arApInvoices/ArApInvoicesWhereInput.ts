import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ArApInvoicesWhereInput = {
  description?: StringNullableFilter;
  discounts?: FloatNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  paymentTerms?: StringNullableFilter;
  penalties?: FloatNullableFilter;
  price?: FloatNullableFilter;
};
