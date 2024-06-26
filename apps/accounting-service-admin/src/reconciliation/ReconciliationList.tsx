import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ReconciliationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Reconciliations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="bankStatementBalance" source="bankStatementBalance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="difference" source="difference" />
        <TextField label="ID" source="id" />
        <TextField label="ledgerBalance" source="ledgerBalance" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
