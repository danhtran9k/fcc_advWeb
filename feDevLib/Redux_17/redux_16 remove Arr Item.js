/*

==================================================================
LINK

https://www.freecodecamp.org/learn/front-end-development-libraries/redux/remove-an-item-from-an-array

==================================================================
DESCRIPTION

Remove an Item from an Array
Time to practice removing items from an array. The spread operator can be used here as well. Other useful JavaScript methods include slice() and concat().

The reducer and action creator were modified to remove an item from an array based on the index of the item. Finish writing the reducer so a new state array is returned with the item at the specific index removed.



==================================================================
TESTCASE

The Redux store should exist and initialize with a state equal to [0,1,2,3,4,5]

removeItem and immutableReducer both should be functions.

Dispatching the removeItem action creator should remove items from the state and should NOT mutate state.

==================================================================
SETUP

const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);

==================================================================

*/

const immutableReducer = (state = [0,1,2,3,4,5], action) => {
    switch(action.type) {
      case 'REMOVE_ITEM':
        // Don't mutate state here or the tests will fail
        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1, state.length)
        ];
      default:
        return state;
    }
  };
  
  const removeItem = (index) => {
    return {
      type: 'REMOVE_ITEM',
      index
    }
  }
  
  const store = Redux.createStore(immutableReducer);
