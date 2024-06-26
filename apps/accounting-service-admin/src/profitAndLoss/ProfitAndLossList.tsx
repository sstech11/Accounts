import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProfitAndLossList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Profit and Losses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="cogs" source="cogs" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="grossProfit" source="grossProfit" />
        <TextField label="ID" source="id" />
        <TextField label="incomeBeforeTax" source="incomeBeforeTax" />
        <TextField label="incomeTax" source="incomeTax" />
        <TextField label="netIncome" source="netIncome" />
        <TextField label="nonOperatingExpenses" source="nonOperatingExpenses" />
        <TextField label="nonOperatingIncome" source="nonOperatingIncome" />
        <TextField label="operatingExpenses" source="operatingExpenses" />
        <TextField label="operatingIncome" source="operatingIncome" />
        <TextField label="revenue" source="revenue" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
