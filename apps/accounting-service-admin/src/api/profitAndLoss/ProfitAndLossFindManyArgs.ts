import { ProfitAndLossWhereInput } from "./ProfitAndLossWhereInput";
import { ProfitAndLossOrderByInput } from "./ProfitAndLossOrderByInput";

export type ProfitAndLossFindManyArgs = {
  where?: ProfitAndLossWhereInput;
  orderBy?: Array<ProfitAndLossOrderByInput>;
  skip?: number;
  take?: number;
};
