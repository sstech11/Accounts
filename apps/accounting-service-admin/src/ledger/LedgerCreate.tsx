import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const LedgerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="accountName" source="accountName" />
        <NumberInput label="credit" source="credit" />
        <NumberInput label="debit" source="debit" />
        <DateTimeInput label="transactionDate" source="transactionDate" />
      </SimpleForm>
    </Create>
  );
};
