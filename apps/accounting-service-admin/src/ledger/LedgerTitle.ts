import { Ledger as TLedger } from "../api/ledger/Ledger";

export const LEDGER_TITLE_FIELD = "accountName";

export const LedgerTitle = (record: TLedger): string => {
  return record.accountName?.toString() || String(record.id);
};
