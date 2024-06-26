import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const ReconciliationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          label="bankStatementBalance"
          source="bankStatementBalance"
        />
        <NumberInput label="difference" source="difference" />
        <NumberInput label="ledgerBalance" source="ledgerBalance" />
      </SimpleForm>
    </Create>
  );
};
