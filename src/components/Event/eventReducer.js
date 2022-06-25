// import axios from "axios";
import eventService from "../../services/eventService";
const initialState = [
    { username: "abc", email: "email@email.com",title: "Career Talk" ,description: "This career talk is one where professionals will speak about their careers." },
    { username: "def", email: "test@test.com", title:"Networking Session",description: "This networking session is for fellow members of GIRLSTIMEONLINE to get to know each other" },
    eventService.getAll()
];


export const eventReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_EVENT":
        state = [...state, action.payload];
        return state;
      case "GET_EVENT":
        return action.payload;
      case "DELETE_EVENT":
        const eventFilter = state.filter((event) =>
          event.id === action.payload ? null : event
        );
        state = eventFilter;
        return state;
      case "UPDATE_EVENT":
        const eventUpdate = state.filter((event) =>
          event.id === action.payload.id
            ? Object.assign(event, action.payload)
            : event
        );
        state = eventUpdate;
        return state;
      case "RESET_EVENT":
        state = [{ username: null, email: null, title:null,description:null}];
        return state;
      default:
        return state;
    }
  };

  export default eventReducer;