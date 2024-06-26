export type Reconciliation = {
  bankStatementBalance: number | null;
  createdAt: Date;
  difference: number | null;
  id: string;
  ledgerBalance: number | null;
  updatedAt: Date;
};
