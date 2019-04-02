export function chatReducer(state = [], action) {
    switch(action.type) {
        case 'SEND_MESSAGE': {
            return state.concat(action.payload);
        }
        case 'RECEIVE_MESSAGE': {
            return state.concat(action.payload);
        }
        default : return state;
    }
}
