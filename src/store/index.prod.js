import { createStore } from 'redux'

import appReducer from '../reducers'
import middleware from "./middleware";

const enhancer = compose(
  middleware
)
export default function configureStore () {
  return createStore(appReducer, {},middleware);
}

