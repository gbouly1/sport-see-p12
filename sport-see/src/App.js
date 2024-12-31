import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" />
      </Routes>
    </Layout>
  );
};

export default App;
