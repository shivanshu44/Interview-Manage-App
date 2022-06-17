import React,{ useState ,useContext} from 'react';
import LogIn from '../../components/Login';
import * as ROUTES from '../../constants/routes'; 
import * as ROLES from '../../constants/roles'; 
import {
    useLocation
  } from "react-router-dom";
  import  { APIContext } from '../../services/index';
const LogInContainer = () => {

    const [login, setLogin] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        isProcessing: false,
        error: null
      });
  
    const context = useContext(APIContext);
    const { pathname } = useLocation();
    const { logInUser } = context;

    const handleChange = e => {
        setLogin({ ...login,[e.target.name]: e.target.value });
     };
  
    const handleSubmit = e => {
      e.preventDefault();
      setLogin({...login, isProcessing: true });
  
      const { firstName, lastName, email, password } = login;
  
      let role = null;
  
      switch (pathname) {
          case ROUTES.LOG_IN_HR:
              role = ROLES.HR;
              break;
          case ROUTES.LOG_IN_EMP:
              role = ROLES.EMPLOYEE;
              break;
          case ROUTES.LOG_IN_INT:
              role = ROLES.INTERVIEWER;
              break;
          case ROUTES.LOG_IN_ADMIN:
              role = ROLES.ADMIN;
              break;
        default:
          break;
      }
  
      logInUser(role, { firstName, lastName, email, password })
        .then(response => {
            console.log(response);
        //   const { user, token } = response.data;
  
        //   localStorage.setItem('token', token);
        //   setUser({ user });
        })
        .catch(error =>
            console.log(error)
        //   this.setState({
        //     isProcessing: false,
        //     error: error.response.data.message
        //   })
        );
    };

     const dismissAlert = () =>  setLogin({ ...login, error: null });;
     
      return (
          <LogIn
          email={login.email}
          password={login.password}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        //   isProcessing={isProcessing}
          error={login.error}
          dismissAlert={dismissAlert}
          />     
      );
    
  }

export default LogInContainer;