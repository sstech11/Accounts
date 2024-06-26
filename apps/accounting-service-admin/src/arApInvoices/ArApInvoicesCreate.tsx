import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ArApInvoicesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" source="description" />
        <NumberInput label="discounts" source="discounts" />
        <DateTimeInput label="dueDate" source="dueDate" />
        <TextInput label="paymentTerms" source="paymentTerms" />
        <NumberInput label="penalties" source="penalties" />
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Create>
  );
};
