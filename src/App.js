import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "./common/PageNotFound";
import WrapperLayout from "./common/WrapperLayout";
import AvailableUserScreen from "./screens/AvailableUserScreen";
import CompanyWalletScreen from "./screens/CompanyWalletScreen";
import DashboardScreen from "./screens/DashboardScreen";
import OperatorCredentialScreen from "./screens/OperatorCredentialScreen";

function App() {
  return (
    <Router>
      <WrapperLayout>
        <Switch>
          <Route path="/" exact component={DashboardScreen} />
          <Route path="/dashboard" exact component={DashboardScreen} />
          <Route path="/company-wallet" exact component={CompanyWalletScreen} />
          <Route path="/operator-credential" exact component={OperatorCredentialScreen} />
          <Route path="/available-user" exact component={AvailableUserScreen} />
          <Route path="*" exact component={PageNotFound} />
        </Switch>
      </WrapperLayout>
    </Router>
  );
}

export default App;
