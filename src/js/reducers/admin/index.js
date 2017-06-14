import { combineReducers } from 'redux' // 利用combineReducers 合并reducers
import { routerReducer } from 'react-router-redux' // 将routerReducer一起合并管理
import login from './login';
import dialog from './dialog';
import columnList from './column/list';
import columnAdd from './column/add';
import columnUpdate from './column/update';
import articleList from './article/list';
import articleAdd from './article/add';
import articleUpdate from './article/update';
import linkList from './link/list';
import linkAdd from './link/add';
import linkUpdate from './link/update';
import upload from './upload';

const admin=combineReducers({
    login,
    dialog,
    columnList,
    columnAdd,
    columnUpdate,
    articleList,
    articleAdd,
    articleUpdate,
    linkList,
    linkAdd,
    linkUpdate,
    upload,
    routing: routerReducer,
});

export default admin;