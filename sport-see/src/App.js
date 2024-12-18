import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

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
