import { createStore } from 'redux';
/*
    to use Redux we have to have an access to createStore, we call this function to create a store
    store is the thing that tracks the changing data over time.
    we have to pass a function in, and that function gets called once right away
 */


 // Action Generators - are the functions that return 

 const incrementCount = ({ incrementBy = 1 } = {}) => ({
     type:'INCREMENT',
     incrementBy: incrementBy
    });

 const decrementCount = ({ decrementBy = 1} = {}) => ({
     type:'DECREMENT',
     decrementBy: decrementBy
 })

 const resetCount = () => ({
     type: 'RESET',
 });

 const setCount = ({count}) => ({
     type: 'SET',
     count
 })


 // Reducers
 /*     Key attributes
    1. Reducers are pure functions. Pure functions has certain qualities: the output is only determined by the input
    2. Never change state or action
 */

 const countReducer = (state={ count: 0 }, action )=>{ // default state object
    // switch 

    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default: 
            return state;
    }
}


 // This function is called a reducer
const store = createStore(countReducer);
// this.setState((prevState)=> {   it is very similar to setState
//     return prevState;
// })

// we can remove individual subscription. We just make a variable(function) and then down below, 
// call it, calling that function stops watching for the changes in state. 
const unsubscribe = store.subscribe(()=> { // this functions gets called every single time the store changes
    console.log(store.getState());
})


/*
    Action - an object that gets sent to the store, and this object describes the type of action
    we would like to take.
    Actions - are our way of communicating with the store
    key - "type" has to be provided in dispatch call
*/

// Increment the count, upperCase naming convention
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ 
    incrementBy: 5 
}));

// unsubscribe(); // subscription will stop

// Decrement the count 
store.dispatch(incrementCount());

// Reset - set the count = 0
store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({
    decrementBy: 10
}));

store.dispatch(setCount({count: 101}));
