import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ArApInvoicesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="discounts" source="discounts" />
        <TextField label="dueDate" source="dueDate" />
        <TextField label="ID" source="id" />
        <TextField label="paymentTerms" source="paymentTerms" />
        <TextField label="penalties" source="penalties" />
        <TextField label="price" source="price" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
