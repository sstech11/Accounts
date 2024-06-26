import { Reports as TReports } from "../api/reports/Reports";

export const REPORTS_TITLE_FIELD = "reportType";

export const ReportsTitle = (record: TReports): string => {
  return record.reportType?.toString() || String(record.id);
};
