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

const addClient = (client) => {
  return async (dispatch) => {
    dispatch({type: clientActionTypes.ADD_CLIENT})
    try {
      const res = await axios.post(api.addClient(), {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(client)
      })

      dispatch({type: clientActionTypes.ADD_CLIENT, payload: res.data})
    } catch (err) {
      dispatch({type: clientActionTypes.FETCH_ERROR, payload: err.message})
    }
  }
}

const updateClient = (client) => {
  return async (dispatch) => {
    dispatch({type: clientActionTypes.UPDATE_CLIENT, payload: client})
    try {
      const res = await axios.put(api.putClient(), {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(client)
      })

      dispatch({type: clientActionTypes.ADD_CLIENT, payload: res.data})
    } catch (err) {
      dispatch({type: clientActionTypes.FETCH_ERROR, payload: err.message})
    }
  }
}

const deleteClient = (client) => {
  return async (dispatch) => {
    dispatch({type: clientActionTypes.FETCH_CLIENTS})
    try {
      const res = await axios.delete(api.deleteClient(client.id))

      dispatch({type: clientActionTypes.ADD_CLIENT, payload: res.data})
    } catch (err) {
      dispatch({type: clientActionTypes.FETCH_ERROR, payload: err.message})
    }
  }
}

const clientOperationAccept = (action) => {
  return async (dispatch) => {
    try {
      action()
      dispatch({type: clientActionTypes.CLIENT_OK})
    } catch (err) {
      dispatch({type: clientActionTypes.CLIENT_ERROR, payload: err.message})
    }
  }
}

const clientOperationInterrupt = () => {
  return async (dispatch) => {
    dispatch({type: clientActionTypes.CLIENT_CANCEL})
  }
}

export {
  getClients,
  addClient,
  updateClient,
  deleteClient,
  clientOperationAccept,
  clientOperationInterrupt
}