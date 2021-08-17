import {createStore} from 'redux';

export default createStore(function(state,action){
    if(state===undefined){
        return {temperature:20,stateOfLogin:'after',stateOfMyInfo:'update'}
    }
    if(action.type==='AI_SUBMIT'){
        return {...state,term:action.term, category:action.category, money:action.money}
    }
    if(action.type==='MY_STATE'){
        return {...state,stateOfMyInfo:action.stateOfMyInfo}
    }
    return state;
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())