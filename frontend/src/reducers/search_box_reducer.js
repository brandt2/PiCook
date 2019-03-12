import {
    RECEIVE_IMAGE_URL,
    RECEIVE_LABEL
} from '../actions/seach_box_action';

let _nullState = {
    imageUrl: null,
    visonResponses: []
};

const SearchBoxReducer = (oldState = _nullState, action) => {
    Object.freeze(oldState);

    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_IMAGE_URL:
            nextState.imageUrl = action.payload.imageUrl;
            return nextState;
        case RECEIVE_LABEL:
            nextState.visonResponses = action.payload.responses;
            return nextState;
        default:
            return oldState;
    }
};


export default SearchBoxReducer;