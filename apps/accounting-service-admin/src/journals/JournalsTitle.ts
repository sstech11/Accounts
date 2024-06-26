import { Journals as TJournals } from "../api/journals/Journals";

export const JOURNALS_TITLE_FIELD = "transactionType";

export const JournalsTitle = (record: TJournals): string => {
  return record.transactionType?.toString() || String(record.id);
};
