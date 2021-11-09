import {clientActionTypes} from '../actionTypes'

const InitialState = {
  clients: [],
  selectedClient: '',
  loading: false,
  error: null,
  needed: true
}

export const ClientReducer = (state = InitialState, action) => {
  switch (action.type) {
    case clientActionTypes.FETCH_CLIENTS:
      return {...state, loading: true, error: null, needed: false }

    case clientActionTypes.FETCH_CLIENTS_SUCCESS:
      return {...state, loading: false, error: null, clients: action.payload, needed: false }

    case clientActionTypes.FETCH_ERROR:
      return {...state, loading: false, error: action.payload, needed: false }

    case clientActionTypes.ADD_CLIENT:
      return {...state, selectedStreet: action.payload}

    default:
      return state
  }
}