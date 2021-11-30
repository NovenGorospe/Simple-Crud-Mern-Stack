import { Container, } from 'react-bootstrap';
import { Fragment } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Row, Col, Button, Form, tr, td, th, thead,Table, tbody} from 'react-bootstrap';
import {Route, Switch} from 'react-router-dom';
import { UserProvider } from './UserContext';
import {useState, useEffect } from 'react';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';

import Home from './pages/Home';


import './App.css';

function App() {
  return (
    
      
           <Router>
              <Switch>
               <Route exact path="/adduser" component ={AddUser}/>
                <Route exact path="/edituser/:userId" component ={EditUser}/>
                <Route exact path="/" component ={Home}/>
              </Switch>
           </Router>
      
 

  );
}

export default App;
