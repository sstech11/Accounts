import { JournalsWhereInput } from "./JournalsWhereInput";
import { JournalsOrderByInput } from "./JournalsOrderByInput";

export type JournalsFindManyArgs = {
  where?: JournalsWhereInput;
  orderBy?: Array<JournalsOrderByInput>;
  skip?: number;
  take?: number;
};
