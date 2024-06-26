import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const ProfitAndLossEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
