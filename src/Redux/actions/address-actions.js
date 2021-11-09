import {api} from "../../config";
import axios from "axios";
import {addressActionTypes} from "../actionTypes";

const getStreets = () => {
  return async (dispatch) => {
    dispatch({type: addressActionTypes.FETCH_STREETS})
    try {
      const res = await axios.get(api.streets())
      dispatch({type: addressActionTypes.FETCH_STREETS_SUCCESS, payload: res.data})
    } catch (err) {
      dispatch({type: addressActionTypes.FETCH_ERROR, payload: err.message})
    }
  }
}

const selectStreet = (street) => {
  return async (dispatch) => {
    dispatch({type: addressActionTypes.SELECT_STREET, payload: street})
  }
}

const getBuildings = (id) => {
  return async (dispatch) => {
    dispatch({type: addressActionTypes.FETCH_BUILDINGS})
    try {
      const res = await axios.get(api.building(id))
      dispatch({type: addressActionTypes.FETCH_BUILDINGS_SUCCESS, payload: res.data})
    } catch (err) {
      dispatch({type: addressActionTypes.FETCH_ERROR, payload: err.message})
    }
  }
}

const selectBuilding = (building) => {
  return async (dispatch) => {
    dispatch({type: addressActionTypes.SELECT_BUILDING, payload: building})
  }
}

export {
  getStreets,
  selectStreet,
  getBuildings,
  selectBuilding
}