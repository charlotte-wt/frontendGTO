import {
    ADD_EVENTS,
    GET_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT,
    DELETE_ALL_EVENTS
  } from "./type";
  import EventDataService from "../services/eventService";
  export const createEvent = (username, email, title, description) => async (dispatch) => {
    try {
      const res = await EventDataService.create({ username, email, title, description });
      dispatch({
        type: ADD_EVENTS,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const retrieveEvents = () => async (dispatch) => {
    try {
      const res = await EventDataService.getAll();
      dispatch({
        type: GET_EVENT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const updateEvent = (id, data) => async (dispatch) => {
    try {
      const res = await EventDataService.update(id, data);
      dispatch({
        type: UPDATE_EVENT,
        payload: data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const deleteEvent = (id) => async (dispatch) => {
    try {
      await EventDataService.remove(id);
      dispatch({
        type: DELETE_EVENT,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const deleteAllEvents = () => async (dispatch) => {
    try {
      const res = await EventDataService.removeAll();
  
      dispatch({
        type: DELETE_ALL_EVENTS,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
 
  export const findEventsByTitle = (title) => async (dispatch) => {
    try {
      const res = await EventDataService.findByTitle(title);
      dispatch({
        type: GET_EVENT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };