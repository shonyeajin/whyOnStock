import Top from '../whyOnStock/Top';
import {connect} from 'react-redux';

function mapStateToProps(state){
    return {temperature:state.temperature}
}

export default connect(mapStateToProps)(Top);