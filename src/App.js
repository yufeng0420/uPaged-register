import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Register from "./components/Register";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Register} />
      </Router>
    </Provider>
  );
};

export default App;
