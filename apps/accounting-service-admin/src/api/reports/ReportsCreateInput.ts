import { InputJsonValue } from "../../types";

export type ReportsCreateInput = {
  reportContent?: InputJsonValue;
  reportType?: string | null;
};
