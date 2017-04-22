/**
 * Created by shenhua on 2017/4/22.
 *
 * 文章详情页面
 */
//初始化STATE
const initialize = {
    data:{},//文章数据
};

function page(state=initialize,action){
    switch(action.type){
        case "GET_PAGE" :
            return Object.assign({},state,{data:action.data});
        default :
            return state;
    }
}

export default page;