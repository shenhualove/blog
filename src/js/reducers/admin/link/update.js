/**
 * Created by shenhua on 2017/6/4.
 */
//初始化state
const initalize = {
    title:'',//名称
    url:'',//链接地址
    sort:0,//排序
    columnId:'',//选择栏目
    columnList:[{value:1,name:"友情链接"},{value:2,name:"学习文档"}],//栏目列表
    isSave:false//防重复提交
};

function linkUpdate (state = initalize,action) {
    switch (action.type) {
        case "LINK_UPDATE_HANDLE"  :
            return Object.assign({},state,action.data);
        default :
            return state;
    }
}

export default linkUpdate;