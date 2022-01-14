/*

==================================================================
LINK

https://www.freecodecamp.org/learn/front-end-development-libraries/redux/use-const-for-action-types

==================================================================
DESCRIPTION

Use const for Action Types
A common practice when working with Redux is to assign action types as read-only constants, then reference these constants wherever they are used. You can refactor the code you're working with to write the action types as const declarations.

Declare LOGIN and LOGOUT as const values and assign them to the strings 'LOGIN' and 'LOGOUT', respectively. Then, edit the authReducer() and the action creators to reference these constants instead of string values.

Note: It's generally a convention to write constants in all uppercase, and this is standard practice in Redux as well.

==================================================================
TESTCASE

Calling the function loginUser should return an object with type property set to the string LOGIN.

Calling the function logoutUser should return an object with type property set to the string LOGOUT.

The store should be initialized with an object with property login set to false.

Dispatching loginUser should update the login property in the store state to true.

Dispatching logoutUser should update the login property in the store state to false.

The authReducer function should handle multiple action types with a switch statement.

LOGIN and LOGOUT should be declared as const values and should be assigned strings of LOGINand LOGOUT.

The action creators and the reducer should reference the LOGIN and LOGOUT constants.

==================================================================
SETUP



const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case 'LOGIN': 
      return {
        authenticated: true
      }
    case 'LOGOUT': 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};

==================================================================

*/

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
  
    switch (action.type) {
      case LOGIN: 
        return {
          authenticated: true
        }
      case LOGOUT: 
        return {
          authenticated: false
        }
  
      default:
        return state;
  
    }
  
  };
  
  const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: LOGIN
    }
  };
  
  const logoutUser = () => {
    return {
      type: LOGOUT
    }
  };
