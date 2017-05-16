import { combineReducers } from 'redux' // 利用combineReducers 合并reducers
import { routerReducer } from 'react-router-redux' // 将routerReducer一起合并管理
import login from './login';
import addRole from './roles/add';
import roles from './roles/roles';
import top from './top';
import user from './user';
import dialog from './dialog';
import columnList from './column/list';


const admin=combineReducers({
    login,
    top,
    addRole,
    user,
    roles,
    dialog,
    columnList,
    routing: routerReducer,
});

export default admin;