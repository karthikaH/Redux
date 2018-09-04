// will allow us to create a createStore
const {createStore} = require("redux");

// need to define the initial state
const initialState = {
  age:21
}

//reducer - part of store
// ES6 has the ability to take default value for parameter

// we cant mutate the state directly hence need to create a copy of the state
const myReducer = (state = initialState, action) => {
   const newState = {...state};

   if (action.type === 'ADD'){
     newState.age += action.val;
   }else if(action.type === 'SUBSTRACT'){
     newState.age -= 1;
   }
   return newState; //similar to setState in react
}


// store has two things
// reducer as well as state
const store = createStore(myReducer);


// we can subscribe to store
// whenever there is a change in state this method will be called
store.subscribe(() =>{
  console.log(`initial state: ${store.getState().age}`);
})

//actions are like commands whose meaning will be known by reducers
//if action is add, reducer will know what to do
//this displatches an action which is type ADD
// we need to implement in reducer what does type ADD means
//we can pass payload - val:10

//console.log(`initial state: ${store.getState().age}`);
store.dispatch({type:'ADD', val:10});
//console.log(`state after add: ${store.getState().age}`);
store.dispatch({type:'SUBSTRACT'});
//console.log(`state after subtract: ${store.getState().age}`);

//console.log(store.getState());
