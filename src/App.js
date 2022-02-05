import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "./common/PageNotFound";
import WrapperLayout from "./common/WrapperLayout";
import PageLoader from "./helpers/loaders/PageLoader";
import AvailableUserScreen from "./screens/AvailableUserScreen";
import CompanyWalletScreen from "./screens/CompanyWalletScreen";
import DashboardScreen from "./screens/DashboardScreen";
import OperatorCredentialScreen from "./screens/OperatorCredentialScreen";
import "./styles/App.css";

function App() {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 2000);
  }, []);
  return (
    <div className="app">
      {spinner ? (
        <PageLoader />
      ) : (
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
      )}
    </div>
  );
}

export default App;
