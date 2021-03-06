/**
 * Created by shenhua on 2017/5/21.
 */
//初始化state
const initalize = {
    title:'',//名称
    keyWord:'',//关键字
    caption:'',//说明
    sort :'',//排序
    isSave:false//防重复提交
};

function columnUpdate (state = initalize,action) {
    switch (action.type) {
        case "COLUMN_UPDATE_HANDLE"  :
            return Object.assign({},state,action.data);
        default :
            return state;
    }
}

export default columnUpdate;