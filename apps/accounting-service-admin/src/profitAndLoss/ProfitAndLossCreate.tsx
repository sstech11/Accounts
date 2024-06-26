import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const ProfitAndLossCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="cogs" source="cogs" />
        <NumberInput label="grossProfit" source="grossProfit" />
        <NumberInput label="incomeBeforeTax" source="incomeBeforeTax" />
        <NumberInput label="incomeTax" source="incomeTax" />
        <NumberInput label="netIncome" source="netIncome" />
        <NumberInput
          label="nonOperatingExpenses"
          source="nonOperatingExpenses"
        />
        <NumberInput label="nonOperatingIncome" source="nonOperatingIncome" />
        <NumberInput label="operatingExpenses" source="operatingExpenses" />
        <NumberInput label="operatingIncome" source="operatingIncome" />
        <NumberInput label="revenue" source="revenue" />
      </SimpleForm>
    </Create>
  );
};
