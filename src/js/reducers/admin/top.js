/**
 * Created by gaolei on 2017/4/1.
 *
 * 顶部模块
 */
import objectAssign from 'object-assign';
//初始化state
const initalize = sessionStorage.getItem('topState')?JSON.parse(sessionStorage.getItem('topState')):{

};

function top (state = initalize,action) {
    switch (action.type) {
        case "TOP_HANDLE"  :
            sessionStorage.setItem("topState",JSON.stringify(objectAssign({},state,action.options)));
            return objectAssign({},state,action.options);
        default :
            return state;
    }
}

export default top;