import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ReconciliationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bankStatementBalance" source="bankStatementBalance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="difference" source="difference" />
        <TextField label="ID" source="id" />
        <TextField label="ledgerBalance" source="ledgerBalance" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
