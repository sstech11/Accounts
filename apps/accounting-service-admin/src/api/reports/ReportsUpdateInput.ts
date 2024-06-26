import { InputJsonValue } from "../../types";

export type ReportsUpdateInput = {
  reportContent?: InputJsonValue;
  reportType?: string | null;
};
