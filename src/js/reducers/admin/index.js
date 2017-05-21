import { combineReducers } from 'redux' // 利用combineReducers 合并reducers
import { routerReducer } from 'react-router-redux' // 将routerReducer一起合并管理
import login from './login';
import dialog from './dialog';
import columnList from './column/list';
import columnAdd from './column/add';
import columnUpdate from './column/update';
import articleList from './article/list';
import linkList from './link/list';


const admin=combineReducers({
    login,
    dialog,
    columnList,
    columnAdd,
    columnUpdate,
    articleList,
    linkList,
    routing: routerReducer,
});

export default admin;