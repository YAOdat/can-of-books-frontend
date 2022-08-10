import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login'
import { withAuth0 } from '@auth0/auth0-react';
import Welcome from './components/Welcome'
import Logout from './components/Logout'
import Profile from './components/Profile'
import About from './About.js'

class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;

    return (
      <>
        <Router>
          
          <Header />

          <Welcome />
          <Profile/>

         
          <Routes>
            {isAuthenticated && (
           <Route 
              exact path="/"
              element={<BestBooks />}
            >
            </Route>

            
            )}


            <Route 
              exact path="/About"
              element={<About />}
              
            >

            </Route>
           
          </Routes>
          
              
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
