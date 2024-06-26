import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const JournalsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creditAmount" source="creditAmount" />
        <TextField label="date" source="date" />
        <TextField label="debitAmount" source="debitAmount" />
        <TextField label="ID" source="id" />
        <TextField label="transactionType" source="transactionType" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
