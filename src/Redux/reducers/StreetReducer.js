import {streetActionTypes} from '../actionTypes'

const InitialState = {
  items: [{id: 0, name:''}],
  selected: '',
  loading: false,
  error: null,
  needed: true
}

export const StreetReducer = (state = InitialState, action) => {
  switch (action.type) {
    case streetActionTypes.FETCH_STREETS:
      return {...state, loading: true, error: null, needed: false }

    case streetActionTypes.FETCH_STREETS_SUCCESS:
      return {...state, loading: false, error: null, items: action.payload, needed: false }

    case streetActionTypes.FETCH_STREETS_ERROR:
      return {...state, loading: false, error: action.payload, items: state.items, needed: false }

    case streetActionTypes.SELECT_STREET:
      return {...state, selected: action.payload}

    default:
      return state
  }
}