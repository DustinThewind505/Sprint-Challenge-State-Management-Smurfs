1. What problem does the context API help solve?
    1. Context API allows developers to avoid 'prop drilling.' It allows to set up state as context, and then any component that's wrapped in that context's Provider will have access to that state, no matter how deeply nested, all without having to pass props.


2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    2. Store in redux is a repository of state. It's known as the single source of truth because all components that need access to state can just connect to the store.

    Actions are blocks of code that describe an event, and contain payload if needed. Actions are sent to the reducer so that the reducer would know what to do based on what just happened in the application.

    Reducers are functions that receive current state and an action, then determine what to do in light of that action type (via the switch case block) and return updated state.


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    3. Component state is state local to a component. Application state is state that is 'global' and can be accessed by other components. Use application state to track data that needs to be accessed by multiple components. On the other hand, use component state for data that other components don't care about (for example, it would not make sense to track one form's input changes in application state of a large scale application, but component state would be perfect here.)


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    4. redux-thunk is middleware that allows us to perform asynchronous operations inside action creators that are synchronous by default.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
    5. I liked using redux because I like the idea of the store being the single source of truth. Just wish the setup wasn't so complicated :P
