import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const JournalsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="creditAmount" source="creditAmount" />
        <DateTimeInput label="date" source="date" />
        <NumberInput label="debitAmount" source="debitAmount" />
        <TextInput label="transactionType" source="transactionType" />
      </SimpleForm>
    </Edit>
  );
};
