
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route,useLocation} from  'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SignupType from './components/signupType';
import SignUpContainer from './containers/SignUpContainer'
import LogInContainer from './containers/LoginContainer'
import LoginType from './components/LoginType';
import * as ROUTES from '../src/constants/routes'; 
function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
       <Route path={ROUTES.HOME} exact element={<Home />} />
       <Route path={ROUTES.ABOUT}  element={<About /> }/>
       <Route path={ROUTES.SIGN_UP_HR}  element={<SignUpContainer /> }/>
       <Route path={ROUTES.SIGN_UP_INTERVIEWER}  element={<SignUpContainer /> }/>
       <Route path={ROUTES.SIGN_UP_EMP}  element={<SignUpContainer /> }/>
       <Route path={ROUTES.LOG_IN_HR}  element={<LogInContainer /> }/>
       <Route path={ROUTES.LOG_IN_ADMIN} element={<LogInContainer /> }/>
       <Route path={ROUTES.LOG_IN_INT} element={<LogInContainer /> }/>
       <Route path={ROUTES.LOG_IN_EMP} element={<LogInContainer /> }/>
       <Route path={ROUTES.SIGN_UP}  element={<SignupType /> }/>
       <Route path={ROUTES.LOG_IN}  element={<LoginType /> }/>
      </Routes>
    </Router>
    );
}

export default App;
