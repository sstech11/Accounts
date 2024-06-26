import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ProfitAndLossShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
