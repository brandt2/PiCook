import { connect } from 'react-redux';
import SearchBox from './search_box';
import {getResultFromVision} from '../../actions/search_box_action';



const mapStateToProps = (state, ownProps) => {
    return {
        vision: state.vision
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getResultFromVision: (file) => dispatch(getResultFromVision(file)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);

