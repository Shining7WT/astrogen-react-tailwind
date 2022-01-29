import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as history from 'history';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import Mint from './pages/Mint';
import Layout from './common/Layout';
import Home from './pages/Home';
import Launchpad from './pages/Launchpad';
import ProjectSummary from './pages/ProjectSummary';

function App() {
  const Loader = () => {
    return <>loading...</>;
  };
  return (
    <Router history={history}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path='/'
            element={
              <Layout walletConnected={true}>
                <Home />
              </Layout>
            }
          />
          <Route
            path='/project-detail'
            element={
              <Layout>
                <Project />
              </Layout>
            }
          />
          <Route
            path='/project-summary'
            element={
              <Layout>
                <ProjectSummary />
              </Layout>
            }
          />
          <Route
            path='/create-project'
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path='/mint'
            element={
              <Layout>
                <Mint />
              </Layout>
            }
          />
          <Route
            path='/launchpad'
            element={
              <Layout>
                <Launchpad />
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
