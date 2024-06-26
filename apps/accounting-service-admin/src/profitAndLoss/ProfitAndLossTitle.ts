import { ProfitAndLoss as TProfitAndLoss } from "../api/profitAndLoss/ProfitAndLoss";

export const PROFITANDLOSS_TITLE_FIELD = "id";

export const ProfitAndLossTitle = (record: TProfitAndLoss): string => {
  return record.id?.toString() || String(record.id);
};
