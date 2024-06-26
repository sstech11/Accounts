import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProfitAndLossList } from "./profitAndLoss/ProfitAndLossList";
import { ProfitAndLossCreate } from "./profitAndLoss/ProfitAndLossCreate";
import { ProfitAndLossEdit } from "./profitAndLoss/ProfitAndLossEdit";
import { ProfitAndLossShow } from "./profitAndLoss/ProfitAndLossShow";
import { JournalsList } from "./journals/JournalsList";
import { JournalsCreate } from "./journals/JournalsCreate";
import { JournalsEdit } from "./journals/JournalsEdit";
import { JournalsShow } from "./journals/JournalsShow";
import { ReconciliationList } from "./reconciliation/ReconciliationList";
import { ReconciliationCreate } from "./reconciliation/ReconciliationCreate";
import { ReconciliationEdit } from "./reconciliation/ReconciliationEdit";
import { ReconciliationShow } from "./reconciliation/ReconciliationShow";
import { LedgerList } from "./ledger/LedgerList";
import { LedgerCreate } from "./ledger/LedgerCreate";
import { LedgerEdit } from "./ledger/LedgerEdit";
import { LedgerShow } from "./ledger/LedgerShow";
import { ReportsList } from "./reports/ReportsList";
import { ReportsCreate } from "./reports/ReportsCreate";
import { ReportsEdit } from "./reports/ReportsEdit";
import { ReportsShow } from "./reports/ReportsShow";
import { ArApInvoicesList } from "./arApInvoices/ArApInvoicesList";
import { ArApInvoicesCreate } from "./arApInvoices/ArApInvoicesCreate";
import { ArApInvoicesEdit } from "./arApInvoices/ArApInvoicesEdit";
import { ArApInvoicesShow } from "./arApInvoices/ArApInvoicesShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Accounting Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ProfitAndLoss"
          list={ProfitAndLossList}
          edit={ProfitAndLossEdit}
          create={ProfitAndLossCreate}
          show={ProfitAndLossShow}
        />
        <Resource
          name="Journals"
          list={JournalsList}
          edit={JournalsEdit}
          create={JournalsCreate}
          show={JournalsShow}
        />
        <Resource
          name="Reconciliation"
          list={ReconciliationList}
          edit={ReconciliationEdit}
          create={ReconciliationCreate}
          show={ReconciliationShow}
        />
        <Resource
          name="Ledger"
          list={LedgerList}
          edit={LedgerEdit}
          create={LedgerCreate}
          show={LedgerShow}
        />
        <Resource
          name="Reports"
          list={ReportsList}
          edit={ReportsEdit}
          create={ReportsCreate}
          show={ReportsShow}
        />
        <Resource
          name="ArApInvoices"
          list={ArApInvoicesList}
          edit={ArApInvoicesEdit}
          create={ArApInvoicesCreate}
          show={ArApInvoicesShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
