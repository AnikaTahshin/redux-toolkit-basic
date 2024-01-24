// defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const ADD_USER = "ADD_USER";


// state
const initialCounterState = {
  count: 0,
};

const initialUserState = {
  users: [{ name: "anika" }],
};

// action is an object. it has two properties. type and payload

const incrementCounterAction = () => {
  return {
    type: INCREMENT,
    // payload is used to pass data
  };
};

// DECREMENT COUNTER

const decrementCounterAction = () => {
    return {
      type: DECREMENT,
      // payload is used to pass data
    };
  };


  const addUser = () => {
    return {
      type: ADD_USER,
      payload: {name:'shuvo'}
      // payload is used to pass data
    };
  };
  
