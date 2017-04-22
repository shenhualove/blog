/**
 * Created by shenhua on 2017/4/22.
 *
 * 首页列表数据
 */
//初始化STATE
const initialize = {
    listData:[],//文章数据
    page:1,//当前页
    pageSize:8//每页加载条数
};

function home(state=initialize,action){
    switch(action.type){
        case "GET_NEW" :
            return Object.assign({},state,{listData:action.data});
        default :
            return state;
    }
}

export default home;