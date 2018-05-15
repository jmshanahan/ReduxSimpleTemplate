import { createStore, compose } from "redux";

import appReducer from "../reducers";
import { createUser, createPost, fetchPosts } from "../actions";
import middleware from "./middleware";

const enhancer = compose(
  middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default function configureStore() {
  //import DevTools from '../containers/DevTools.jsx'
  let store = createStore(
    appReducer,
    {},
    enhancer
  );

  // create users
  store.dispatch(createUser("dan", "Daniel Bugl 1"));
  store.dispatch(createUser("des", "Destiny"));

  
  store.dispatch(fetchPosts());
  // create posts
  // store.dispatch(
  //   createPost("dan", {
  //     title: "First post",
  //     text: "Hello world! This is the first blog post.",
  //     category: "welcome"
  //   })
  // );
  // store.dispatch(
  //   createPost("des", {
  //     title: "Another test",
  //     text: "This is another test blog post.",
  //     category: "test"
  //   })
  // );
  // store.dispatch(
  //   createPost("des", {
  //     title: "Another what",
  //     text: "This is joes blog.",
  //     category: "test"
  //   })
  // );
  return store;
}
