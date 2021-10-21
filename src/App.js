 import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Home/Header/Header';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import Feature from './components/Home/Feature/Feature';

function App() {
  return (
    <div className="App">  
       <BrowserRouter>
       <Header></Header>
          <Switch>
            <Route exact path='/'>
                <Header></Header>
            </Route>
            <Route exact path='/home'>
              <Header></Header>
            </Route>
            <Route exact path='/signin'>
               <SignIn></SignIn>
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
