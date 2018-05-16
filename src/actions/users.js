import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE,CREATE_USER } from '../actionTypes'
import { thunkCreator } from './utils'
export const createUser = (username, realname) => {
    return {
      type: CREATE_USER,
      username,
      realname,
    }
  }

  export const fetchUser = (username) => thunkCreator({
    types: [ FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE ],
    promise: fetch(`http://localhost:3003/users?username=${username}`)
             .then(response => response.json())
})

export const fetchUsersByUsernames = (usernames) => (dispatch) =>
Promise.all(usernames.map(username => fetchUser(username)(dispatch)  ) )
