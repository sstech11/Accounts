import { ArApInvoicesWhereInput } from "./ArApInvoicesWhereInput";
import { ArApInvoicesOrderByInput } from "./ArApInvoicesOrderByInput";

export type ArApInvoicesFindManyArgs = {
  where?: ArApInvoicesWhereInput;
  orderBy?: Array<ArApInvoicesOrderByInput>;
  skip?: number;
  take?: number;
};
