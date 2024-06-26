export type Ledger = {
  accountName: string | null;
  createdAt: Date;
  credit: number | null;
  debit: number | null;
  id: string;
  transactionDate: Date | null;
  updatedAt: Date;
};
