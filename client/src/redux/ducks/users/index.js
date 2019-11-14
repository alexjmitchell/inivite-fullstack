import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const GET_USERS = "users/GET_USERS"
const ADD_GOING = "going/ADD_GOING"
const GET_GOING = "going/GET_GOING"

// initial state
const initialState = {
  users: [],
  going: [],
  notGoing: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload }
    case ADD_GOING:
      return { ...state, going: [...state.going, action.payload] }
    case GET_GOING:
      return { ...state, notGoing: action.payload }
    default:
      return state
  }
}

// action creators
const getUsers = () => {
  return dispatch => {
    axios.get("https://randomuser.me/api/?results=1").then(resp => {
      dispatch({
        type: GET_USERS,
        payload: resp.data.results
      })
    })
  }
}

const getGoing = () => {
  return action => {
    axios.get("/going").then(response => {
      action({
        type: GET_GOING,
        payload: response.data
      })
    })
  }
}

const addToGoing = payload => {
  return action => {
    axios
      .post("/going", {
        name: `${payload.name.first} ${payload.name.last}`,
        email: payload.email,
        phone: payload.phone,
        picture: payload.picture.large
      })
      .then(response => {
        action({
          type: ADD_GOING,
          payload
        })
      })
  }
}

// custom hooks
export function useUsers() {
  const users = useSelector(appState => appState.userState.users)
  const going = useSelector(appState => appState.userState.going)
  const dispatch = useDispatch()
  const addGoing = payload => dispatch(addToGoing(payload))

  useEffect(() => {
    dispatch(getUsers())
    dispatch(getGoing())
  }, [dispatch])

  return { users, going, addGoing }
}
