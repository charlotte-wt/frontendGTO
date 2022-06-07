const initialState = [
    { id: 0, name: "Career Talk", email: "email@email.com", description: "This career talk is one where professionals will speak about their careers." },
    { id: 1, name: "Networking Session", email: "test@test.com", description: "This networking session is for fellow members of GIRLSTIMEONLINE to get to know each other" },
];
  
export const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_EVENT":
        state = [...state, action.payload];
        return state;
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
        state = [{ name: null, email: null, description: null }];
        return state;
        default:
        return state;
    }
};