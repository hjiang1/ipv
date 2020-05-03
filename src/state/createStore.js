import { createStore as reduxCreateStore, combineReducers } from "redux"

import appReducer from "./appReducer"
import datesReducer from "./datesReducer"

const reducer = combineReducers({
  app: appReducer,
  datesPage: datesReducer,
})

const createStore = () =>
  reduxCreateStore(
    reducer,
    process.env.ENVIRONMENT === "development"
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : undefined
  )

export default createStore
