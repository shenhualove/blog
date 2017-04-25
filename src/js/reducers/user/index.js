/**
 * Created by apple on 17/4/19.
 *
 * 首页
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import home from './home';
import list from './list';
import page from './page';
//初始化STATE
const initialize = {
    selectNav:'',//当前在哪个栏目下，给导航对应的样式，默认为空在首页
    nav:[],//导航数据
    study:[],//文档数据
    link:[],//友情链接数据
    showView:false//是否显示页面，true移除加载动画
};

function index(state=initialize,action){
    switch(action.type){
        case "SHOW_VIEW" :
            return Object.assign({},state,{showView:action.data});
        case "GET_NAV" :
            return Object.assign({},state,{nav:action.data});
        case "GET_NAV_ID" :
            return Object.assign({},state,{selectNav:action.data});
        case "GET_STUDY_LINKS" :
            return Object.assign({},state,{study:action.data});
        case "GET_FRIEND_LINKS" :
            return Object.assign({},state,{link:action.data});
        default :
            return state;
    }
}

const blog = combineReducers({
    index,
    home,
    list,
    page,
    routing: routerReducer
});

export default blog;