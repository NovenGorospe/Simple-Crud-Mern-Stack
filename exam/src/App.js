import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
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
