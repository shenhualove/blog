/**
 * Created by shenhua on 2017/4/22.
 *
 * 列表页面
 */
//初始化STATE
const initialize = {
    title:"",//标题
    listData:[],//文章数据
    page:1,//当前页
    pageSize:8//每页加载条数
};

function list(state=initialize,action){
    switch(action.type){
        case "GET_TITLE":
            return Object.assign({},state,{title:action.data});
        case "GET_LIST" :
            return Object.assign({},state,{listData:action.data});
        default :
            return state;
    }
}

export default list;