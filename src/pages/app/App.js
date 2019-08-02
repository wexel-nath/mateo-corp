import React from "react";
import { Router } from "react-router-dom";
import { Layout } from "antd";

import Header from "../../components/header/Header";
import Content from "./Content";
import history from "../../history";
import { AuthProvider } from "../../context/AuthContext";

import "./App.css";

const App = () => {
  return (
    <Router history={history}>
      <AuthProvider>
        <Layout>
          <Header />
          <Content />
        </Layout>
      </AuthProvider>
    </Router>
  );
};

export default App;
