import React from 'react';
import Sidebarmenu from './Layout/Sidebar/Sidebar';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Interest from './pages/Interest';
import Award from './pages/Award';



function App() {

  // ARRAY OF OBJECT
  const routes = [
    {
      path: "/about",
      main: () => <About />
    },
    {
      path: "/experience",
      main: () => <Experience />
    },
    {
      path: "/education",
      main: () => <Education />
    },
    {
      path: "/skills",
      main: () => <Skills />
    },
    {
      path: "/interest",
      main: () => <Interest />
    },
    {
      path: "/award",
      main: () => <Award />,
    }
  ]

  return (
    <Router>
      
      <div style={{ display: "flex" }}>
          <Sidebarmenu/>

          <div style={{ flex: 1, padding: "10px" }}>
            <Switch>
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        </div>
    </Router>
  );
}

export default App;
