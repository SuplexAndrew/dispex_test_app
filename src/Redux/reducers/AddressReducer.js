import {addressActionTypes} from '../actionTypes'

const InitialState = {
  streets: [{id: 0, name: ''}],
  buildings: [{id: 0, name: ''}],
  flats: [{id: 0, name: ''}],
  selectedStreet: '',
  selectedBuilding: '',
  selectedFlat: '',
  loading: false,
  error: null,
  needed: true
}

export const AddressReducer = (state = InitialState, action) => {
  switch (action.type) {
    case addressActionTypes.FETCH_STREETS:
      return {...state, loading: true, error: null, needed: false }

    case addressActionTypes.FETCH_STREETS_SUCCESS:
      return {...state, loading: false, error: null, streets: action.payload, needed: false }

    case addressActionTypes.FETCH_STREETS_ERROR:
      return {...state, loading: false, error: action.payload, streets: state.streets, needed: false }

    case addressActionTypes.SELECT_STREET:
      return {...state, selectedStreet: action.payload}

    case addressActionTypes.FETCH_BUILDINGS:
      return {...state, loading: true, error: null, needed: false }

    case addressActionTypes.FETCH_BUILDINGS_SUCCESS:
      console.log(action.payload)
      return {...state, loading: false, error: null, buildings: action.payload, needed: false }

    case addressActionTypes.FETCH_BUILDINGS_ERROR:
      return {...state, loading: false, error: action.payload, buildings: state.streets, needed: false }

    case addressActionTypes.SELECT_BUILDING:
      return {...state, selectedBuilding: action.payload}

    default:
      return state
  }
}