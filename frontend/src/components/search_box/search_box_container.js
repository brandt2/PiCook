import { connect } from 'react-redux';
import SearchBox from './search_box';
import {getResultFromVision} from '../../actions/search_box_action';



const mapStateToProps = (state, ownProps) => {
    return {
        visionResponses: state.searchBox.visionResponses.map(el => {
            return el.description;
        })
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getResultFromVision: (file) => dispatch(getResultFromVision(file)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);

