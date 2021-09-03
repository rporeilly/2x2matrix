import { Provider } from "react-redux"
import { createStore } from "redux"
import optionsReducer from "./reducers/optionsReducer"
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { loadState, saveState } from './localStorage'
import store from "./app/store"

const persistedState = loadState()

const options = createStore(
  optionsReducer,
  persistedState
)

options.subscribe(() => {
  saveState(options.getState())
})

// const options = createStore(optionsReducer)

ReactDOM.render(
  <Provider store={options}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
