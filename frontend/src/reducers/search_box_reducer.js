import {
    RECEIVE_LABELS
} from '../actions/search_box_action';

let _nullState = {
    imageUrl: null,
    visonResponses: []
};

const SearchBoxReducer = (oldState = _nullState, action) => {
    Object.freeze(oldState);

    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_LABELS:
            nextState.visonResponses = action.payload.responses;
            return nextState;
        default:
            return oldState;
    }
};


export default SearchBoxReducer;