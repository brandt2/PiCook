import {
    RECEIVE_LABELS
} from '../actions/search_box_action';

let _nullState = {
    imageUrl: null,
    visionResponses: []
};

const SearchBoxReducer = (oldState = _nullState, action) => {
    Object.freeze(oldState);
    debugger

    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_LABELS:
            nextState.visionResponses = action.payload.data;
            return nextState;
        default:
            return oldState;
    }
};


export default SearchBoxReducer;