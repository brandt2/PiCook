import { connect } from 'react-redux';

import SearchBox from './search_box';
import { getImageURLByAWS, getLabelsByVision } from '../../actions/seach_box_action';


const mapStateToProps = (state, ownProps) => {
    return {
        vision: state.vision
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getImageURLByAWS: (file) => dispatch(getImageURLByAWS(file)),
        getLabelsByVision: (request) => dispatch(getLabelsByVision(request))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);

