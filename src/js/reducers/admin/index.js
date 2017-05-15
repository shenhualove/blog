import { combineReducers } from 'redux' // 利用combineReducers 合并reducers
import { routerReducer } from 'react-router-redux' // 将routerReducer一起合并管理
import login from './login';
import addRole from './roles/add';
import roles from './roles/roles';
import home from './home';
import top from './top';
import user from './user';
import dialog from './dialog';

//报表模块
import reportFormCommon from './reportForm/public/common';//公用的报表模块STATE
import bankAllDataDay from './reportForm/bankAllDataDay';//全辖银行业务常规数据汇总报表-日



const admin=combineReducers({
    login,
    top,
    addRole,
    home,
    user,
    roles,
    dialog,
    bankAllDataDay,
    reportFormCommon,
    routing: routerReducer,
});

export default admin;