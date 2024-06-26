import { ArApInvoices as TArApInvoices } from "../api/arApInvoices/ArApInvoices";

export const ARAPINVOICES_TITLE_FIELD = "description";

export const ArApInvoicesTitle = (record: TArApInvoices): string => {
  return record.description?.toString() || String(record.id);
};
