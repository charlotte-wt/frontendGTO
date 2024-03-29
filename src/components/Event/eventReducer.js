import {
  ADD_EVENTS,
  GET_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  DELETE_ALL_EVENTS,
} from "../../actions/type";

const initialState = [];

const eventReducer = (events = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_EVENTS:
      return [...events, payload];

    case GET_EVENT:
      return payload;

    case UPDATE_EVENT:
      return events.map((event) => {
        if (event.id === payload.id) {
          return {
            ...event,
            ...payload,
          };
        } else {
          return event;
        }
      });

    case DELETE_EVENT:
      return events.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_EVENTS:
      return [];

    default:
      return events;
  }
};

export default eventReducer;