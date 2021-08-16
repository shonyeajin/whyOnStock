import Top from '../whyOnStock/Top';
import {connect} from 'react-redux';

function mapStateToProps(state){
    return {
        temperature:state.temperature,
        stateOfLogin:state.stateOfLogin,
    }
}

export default connect(mapStateToProps)(Top);