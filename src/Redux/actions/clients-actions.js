import {clientActionTypes} from "../actionTypes";
import axios from "axios";
import {api} from "../../config";

const getClients = (id) => {
  return async (dispatch) => {
    dispatch({type: clientActionTypes.FETCH_CLIENTS})
    try {
      const res = await axios.get(api.getClients(id))
      dispatch({type: clientActionTypes.FETCH_CLIENTS_SUCCESS, payload: res.data})
    } catch (err) {
      dispatch({type: clientActionTypes.FETCH_ERROR, payload: err.message})
    }
  }
}

const addClient = (flat) => {
  return async (dispatch) => {
    dispatch({type: clientActionTypes.ADD_CLIENT, payload: flat})
  }
}

export {
  getClients,
  addClient
}