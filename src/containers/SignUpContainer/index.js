import React, { useState ,useContext} from 'react';
import SignUp from '../../components/SignUp'
import * as ROUTES from '../../constants/routes'; 
import * as ROLES from '../../constants/roles'; 
import {
    useLocation
  } from "react-router-dom";
  import  { APIContext } from '../../services/index';

const SignUpContainer = () => {
    const [signUp, setSignUp] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        isProcessing: false,
        error: null
      });

      const context = useContext(APIContext);
     const { pathname } = useLocation();
     const { signUpUser } = context;
     const handleChange = e => {
        setSignUp({ ...signUp,[e.target.name]: e.target.value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        setSignUp({ ...signUp, isProcessing: true });
        
          const { firstName, lastName, email, password } = signUp;
          console.log(signUp);
          let role = null;
          
          switch (pathname) {
            case ROUTES.SIGN_UP_HR:
              role = ROLES.HR;
              break;
            case ROUTES.SIGN_UP_EMP:
              role = ROLES.EMPLOYEE;
              break;
            case ROUTES.SIGN_UP_INTERVIEWER:
              role = ROLES.INTERVIEWER;
              break;
            default:
              break;
          }
      
          signUpUser(role, { firstName, lastName, email, password })
            .then(response => {
                console.log(response);
            //   const { user, token } = response.data;
      
            //   localStorage.setItem('token', token);
            //   setUser({ user });
            })
            .catch(error =>{

                console.log(error)
            }

            );
      }

  
    const dismissAlert = () =>  setSignUp({ ...signUp, error: null });;
  
      return (
        <SignUp
          firstName={signUp.firstName}
          lastName={signUp.lastName}
          email={signUp.email}
          password={signUp.password}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          error={signUp.error}
          dismissAlert={dismissAlert}
        />
      );
    }
  

export default SignUpContainer;
  