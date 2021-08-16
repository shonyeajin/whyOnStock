import MyPage from "../whyOnStock/MyPage";
import {connect} from 'react-redux';

function mapStateToProps(state){
    return{
        stateOfMyInfo:state.stateOfMyInfo,
    }
}

function mapDispatchToProps(dispatch){
    return{
        onStateOfMyInfo:(stateOfMyInfo)=>{
            dispatch({type:'MY_STATE',stateOfMyInfo});
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyPage);