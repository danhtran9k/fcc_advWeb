/*

==================================================================
LINK

https://www.freecodecamp.org/learn/front-end-development-libraries/redux/get-state-from-the-redux-store

==================================================================
DESCRIPTION

Get State from the Redux Store
The Redux store object provides several methods that allow you to interact with it. For example, you can retrieve the current state held in the Redux store object with the getState() method.

The code from the previous challenge is re-written more concisely in the code editor. Use store.getState() to retrieve the state from the store, and assign this to a new variable currentState.



==================================================================
TESTCASE

The Redux store should have a value of 5 for the initial state.

A variable currentState should exist and should be assigned the current state of the Redux store.

==================================================================
SETUP

const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line

==================================================================

*/

const store = Redux.createStore(
    (state = 5) => state
  );
  
  // Change code below this line
  
const currentState = store.getState()
  