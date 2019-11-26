import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const GET_USER = "user/GET_USER"
const ADD_USER = "user/ADD_USER"
const REMOVE_USER = "user/REMOVE_USER"

// initial state
const initialState = {
  user: [],
  going: [],
  notgoing: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload }
    case ADD_USER:
      return {
        ...state,
        going: [...state.going, action.payload]
      }
    case REMOVE_USER:
      return {
        ...state,
        notgoing: [...state.notgoing, action.payload]
      }
    default:
      return state
  }
}

// action creators
const getUsers = () => {
  return dispatch => {
    axios.get("/users").then(resp => {
      dispatch({
        type: GET_USER,
        payload: resp.data.results
      })
    })
  }
}

const addUser = user => {
  return dispatch => {
    axios.post("/going", { user }).then(response => {
      dispatch({
        type: ADD_USER,
        payload: response.data
      })
    })
  }
}

const removeUser = user => {
  return dispatch => {
    axios.post("/notgoing", { user }).then(response => {
      dispatch({
        type: REMOVE_USER,
        payload: response.data
      })
    })
  }
}

// custom hooks
export function useUsers() {
  const user = useSelector(appState => appState.userState.user)
  const going = useSelector(appState => appState.userState.going)

  const notgoing = useSelector(appState => appState.userState.notgoing)
  const dispatch = useDispatch()
  const addAttendie = user => dispatch(addUser(user), dispatch(getUsers()))
  const removeAttendie = user =>
    dispatch(removeUser(user), dispatch(getUsers()))

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return {
    user,
    going,
    addAttendie,
    removeAttendie,
    notgoing
  }
}
