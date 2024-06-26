import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ArApInvoicesList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AR/AP InvoicesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="discounts" source="discounts" />
        <TextField label="dueDate" source="dueDate" />
        <TextField label="ID" source="id" />
        <TextField label="paymentTerms" source="paymentTerms" />
        <TextField label="penalties" source="penalties" />
        <TextField label="price" source="price" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
