/**
 * Created by gaolei on 2017/4/1.
 *
 * 顶部模块
 */
//初始化state
const initalize = {

};

function top (state = initalize,action) {
    switch (action.type) {
        case "TOP_HANDLE"  :
            return Object.assign({},state,action.options);
        default :
            return state;
    }
}

export default top;