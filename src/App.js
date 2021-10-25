 import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Home/Header/Header';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import Feature from './components/Home/Feature/Feature';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import CourseDetails from './components/Dashboard/CourseDetails/CourseDetails';
import AssignmentContent from './components/Dashboard/AssignmentContent/AssignmentContent';
import UserPanel from './components/Dashboard/UserPanel/UserPanel';
import UserContent from './components/Dashboard/UserContent/UserContent';

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
            <Route exact path='/coursedetails'> 
              <div className='row mt-3'>
                   <UserPanel></UserPanel> 
                   <CourseDetails></CourseDetails>
              </div>
            </Route>
            <Route exact path='/mycourses'> 
              <div className='row mt-3'>
                   <UserPanel></UserPanel> 
                   <UserContent></UserContent> 
              </div>
            </Route>
            <Route exact path='/feature'>
                <Feature></Feature>
            </Route>
            <Route exact path='/assignmentcontent'> 
            <div className='row mt-3'>
                   <UserPanel></UserPanel> 
                   <AssignmentContent></AssignmentContent> 
            </div>
                 
            </Route>
          </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
