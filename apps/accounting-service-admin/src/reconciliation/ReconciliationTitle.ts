import { Reconciliation as TReconciliation } from "../api/reconciliation/Reconciliation";

export const RECONCILIATION_TITLE_FIELD = "id";

export const ReconciliationTitle = (record: TReconciliation): string => {
  return record.id?.toString() || String(record.id);
};
