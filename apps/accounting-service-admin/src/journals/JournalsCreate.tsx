import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const JournalsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="creditAmount" source="creditAmount" />
        <DateTimeInput label="date" source="date" />
        <NumberInput label="debitAmount" source="debitAmount" />
        <TextInput label="transactionType" source="transactionType" />
      </SimpleForm>
    </Create>
  );
};
