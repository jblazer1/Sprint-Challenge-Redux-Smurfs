1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map .filter .reduce / Object.assign

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions - an object with two properties. a TYPE property and an optional PAYLOAD property. Actions are used for user interaction like when a user clicks a button. An action is dispatched to a reducer.

reducers - calculate the new version of state based on the current state and a given action.

store - the store contains the state of the application. The store is known as the single source of truth because that is the only place that state exists.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global. Any component anywhere in the app can access it as long as it is connected to it. Component state is local. It can only be updated in that component and passed down as props. An example of when to use component state would be a products component. An example of when it is good to use application state would be a shopping cart which would need to store information about many products from many product components.

1.  What is middleware?

Middleware is a way to intercept the flow of data so we can do something with it.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is a seperate node package. It allows us to make asynchronous API calls.

1.  Which `react-redux` method links up our `components` with our `redux store`?

<Provider />
