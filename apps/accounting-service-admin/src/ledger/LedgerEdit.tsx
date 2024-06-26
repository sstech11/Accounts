import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const LedgerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="accountName" source="accountName" />
        <NumberInput label="credit" source="credit" />
        <NumberInput label="debit" source="debit" />
        <DateTimeInput label="transactionDate" source="transactionDate" />
      </SimpleForm>
    </Edit>
  );
};
