import React from 'react';
import './App.css';
import Layout from "./components/Layout";

const App = () => {
  return (
      <Layout className="layout">
        <h1>헤더</h1>
        <p>내용</p>
      </Layout>
  );
}

export default App;