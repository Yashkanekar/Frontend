const createStore = (reducer) => {
  let state;
  let listeners = []; //the subscribe function can be called any number of times so we have to maintain an array of all the listener functions.

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener()); // changing all the listener functions in the listeners array to call each of them as they are subscribed to the store so whenever any action is dispatched, the listener is executed.
  };

  const subscribe = (listener) => {
    listeners.push(listener); //pushing all the listener functions in the listener array so when any action is dispatched, we are executing each func present in the listeners array as done in the "dispatch" function implementation.
    return () => {
      listeners.filter((l) => l !== listener); // a func to unsubcribe a listener
    };
  };

  dispatch({}); // here we are calling the dispatch func with an empty action object so as to return a initial / default state value

  return { getState, dispatch, subscribe };
};
