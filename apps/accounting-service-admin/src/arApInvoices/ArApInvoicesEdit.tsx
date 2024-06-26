import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ArApInvoicesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" source="description" />
        <NumberInput label="discounts" source="discounts" />
        <DateTimeInput label="dueDate" source="dueDate" />
        <TextInput label="paymentTerms" source="paymentTerms" />
        <NumberInput label="penalties" source="penalties" />
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Edit>
  );
};
