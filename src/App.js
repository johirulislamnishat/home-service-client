import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Authentication/Login/Login';
import Registration from './Authentication/Registration/Registration';
import Sneackbar from './Components/Sneackbar';
import NotFound from './Components/SinglePages/NotFound';
import Contact from './Components/SinglePages/ContactUs';
import Dashboard from './Components/DashboardArea/Dashboard';
import AuthProvider from './Authentication/Context/AuthProvider';
import PrivateRoute from './Authentication/PrivateRoute/PrivateRoute';
import ServicesPage from './Components/ServiceBooking/ServicesPage';
import Teams from './Components/Teams/Teams';
import DashboardHome from './Components/DashboardArea/DashboardHome';

function App() {

  useEffect(() => {
    document.title = 'Hello!! || Welcome To Home Service'
  }, []);

  return (
    <>

      <AuthProvider>
        <Router>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/teams">
              <Teams />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/snackbar">
              <Sneackbar />
            </Route>

            <PrivateRoute path="/services">
              <ServicesPage />
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <DashboardHome />
            </PrivateRoute>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/registration">
              <Registration />
            </Route>

            <Route exact path="/*">
              <NotFound />
            </Route>

          </Switch>
        </Router>
      </AuthProvider>

    </>
  );
}

export default App;
