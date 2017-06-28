/**
 * Created by gaolei on 2017/4/1.
 *
 * 顶部菜单模块
 */
import {dialogHandle,ajaxErrorLog} from './dialog';
import {loginHandle} from './index';
import Fetch from '../../utils/common/fetch';
import {browserHistory} from 'react-router';
//顶部TOP模块事件处理
export function topHandle(options){
    return {
        type:"TOP_HANDLE",
        options
    }
}

//退出登录
export function logOut(options){
    return dispatch=>{
        Fetch({
            url:"loginOut",
            success:function(data){
                if(data.status=="1"){
                    dispatch(loginHandle({
                       account:{},
                       isLogin:false
                    }));
                    sessionStorage.clear();
                    browserHistory.push("/admin");
                }
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}
