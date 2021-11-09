import {api} from "../../config";
import axios from "axios";
import {streetActionTypes} from "../actionTypes";

const getStreets = () => {
  return async (dispatch) => {
    dispatch({type: streetActionTypes.FETCH_STREETS})
    try {
      const res = await axios.get(api.streets)
      dispatch({type: streetActionTypes.FETCH_STREETS_SUCCESS, payload: res.data})
    } catch (err) {
      dispatch({type: streetActionTypes.FETCH_STREETS_ERROR, payload: err.message})
    }
  }
}

const selectStreet = (street) => {
  return async (dispatch) => {
    dispatch({type: streetActionTypes.SELECT_STREET, payload: street})
  }
}

export {
  getStreets,
  selectStreet
}