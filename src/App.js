 import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Home/Header/Header';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import Feature from './components/Home/Feature/Feature';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">  
       <BrowserRouter> 
          <Home></Home>
          <Switch>
            <Route exact path='/'>
                
            </Route>
            <Route exact path='/home'> 
            
            </Route>
            <Route exact path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <Route exact path='/signin'>
               <SignIn></SignIn>
            </Route>
            <Route exact path='/signup'>
               <SignUp></SignUp>
            </Route>
            <Route exact path='/feature'>
                <Feature></Feature>
            </Route>
          </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
