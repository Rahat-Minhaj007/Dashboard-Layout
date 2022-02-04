import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WrapperLayout from "./common/WrapperLayout";
import CompanyWalletScreen from "./screens/CompanyWalletScreen";
import DashboardScreen from "./screens/DashboardScreen";

function App() {
  return (
    <Router>
      <WrapperLayout>
        <Switch>
          <Route path="/" exact component={DashboardScreen} />
          <Route path="/dashboard" exact component={DashboardScreen} />
          <Route path="/company-wallet" exact component={CompanyWalletScreen} />
        </Switch>
      </WrapperLayout>
    </Router>
  );
}

export default App;
