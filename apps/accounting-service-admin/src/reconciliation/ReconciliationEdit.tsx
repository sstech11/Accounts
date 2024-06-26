import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const ReconciliationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          label="bankStatementBalance"
          source="bankStatementBalance"
        />
        <NumberInput label="difference" source="difference" />
        <NumberInput label="ledgerBalance" source="ledgerBalance" />
      </SimpleForm>
    </Edit>
  );
};
