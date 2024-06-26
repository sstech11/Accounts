import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ReportsWhereInput = {
  id?: StringFilter;
  reportContent?: JsonFilter;
  reportType?: StringNullableFilter;
};
