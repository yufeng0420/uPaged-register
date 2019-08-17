import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Register from "./components/Register";
import Alert from "./components/Alert";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <section className="container">
          <Alert />
          <Route exact path="/" component={Register} />
        </section>
      </Router>
    </Provider>
  );
};

export default App;
