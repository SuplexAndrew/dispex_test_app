import {clientActionTypes} from '../actionTypes'

const InitialState = {
  clients: [],
  selectedClient: {},
  onEdit: false,
  loading: false,
  error: null,
  needed: true
}

export const ClientReducer = (state = InitialState, action) => {
  switch (action.type) {
    case clientActionTypes.FETCH_CLIENTS:
      return {...state, loading: true, error: null, needed: false}

    case clientActionTypes.FETCH_CLIENTS_SUCCESS:
      return {...state, onEdit: false, loading: false, error: null, clients: action.payload, needed: false}

    case clientActionTypes.FETCH_ERROR:
      return {...state, onEdit: false, loading: false, error: action.payload, needed: false}

    case clientActionTypes.ADD_CLIENT:
      return {...state, onEdit: true, selectedClient: {}}

    case clientActionTypes.UPDATE_CLIENT:
      return {...state, onEdit: true, selectedClient: action.payload}

    case clientActionTypes.DELETE_CLIENT:
      return {...state, onEdit: true, selectedClient: action.payload}

    case clientActionTypes.CLIENT_OK:
      return {...state, onEdit: false, selectedClient: {}, needed: true, error: null}

    case clientActionTypes.CLIENT_CANCEL:
      return {...state, onEdit: false, selectedClient: {}, needed: false}

    case clientActionTypes.CLIENT_ERROR:
      return {...state, onEdit: false, selectedClient: {}, error: action.payload}

    default:
      return state
  }
}