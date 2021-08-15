import AiRecommend from "../whyOnStock/AiRecommend";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    return {
        onAISubmit:function(term,category,money){
            dispatch({type:'AI_SUBMIT', term, category, money});
        }
    }
}

export default connect(null, mapDispatchToProps)(AiRecommend);