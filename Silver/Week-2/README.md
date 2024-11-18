### Redux
A state management package for JS/TS applications
It's used with React, but also applies applies to other libraries

## Principles
1. Centralized source of truth - Object/JSON that is used as a store
2. Read only
3. Reducers - Functions that change the state in response to an action

## Concepts
1. Store
2. Actions - These describe what happens in the app.  E.g { type: 'INCREMENT' }
3. Reducers - E.g (state, action) => newState
4. Dispatch - Send the action specified to the store
5. Selector - Gets specific parts of state

### Disclaimer
Functionality displayed in week-1-react-app, Counter component