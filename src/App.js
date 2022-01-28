import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as history from 'history';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import Navbar from './common/Navbar';
import Home from './pages/Home';
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
              <Navbar>
                <Home />
              </Navbar>
            }
          />
          <Route
            path='/project-detail'
            element={
              <Navbar>
                <Project />
              </Navbar>
            }
          />
          <Route
            path='/project-summary'
            element={
              <Navbar>
                <ProjectSummary />
              </Navbar>
            }
          />
          <Route
            path='/create-project'
            element={
              <Navbar>
                <Dashboard />
              </Navbar>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
