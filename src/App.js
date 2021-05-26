import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Pages/dashboard";
import Login from "./Pages/login";
import Register from "./Pages/register";
import Index from "./Pages/index";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
