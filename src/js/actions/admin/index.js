/**
 * Created by shenhua
 */
import Fetch from '../../utils/common/fetch';
import {handle} from '../common';
import {dialogHandle,ajaxErrorLog} from './dialog';

const handleText="LOGIN_HANDLE";
//触发action
export function loginHandle(data){
    return dispatch=>{
        dispatch(handle(handleText,data));
    }
}
//登录接口
export function accountLogin(options){
    return dispatch=>{
        Fetch({
            url:"accountLogin",
            data:{
                accountName:options.userName,
                password:options.passWord
            },
            success:function(data){
                if(data.status=="1"){
                    //登录成功
                    dispatch(handle(handleText,{
                        loginHash:true
                    }));
                    dispatch(handle("LOGIN_SUCCESS",data.data.account));
                }else{
                    dispatch(handle(handleText,{
                        errorMsg:data.message,
                        errorShow:true,
                        loginHash:true
                    }));
                }
            },
            error:function(){
                dispatch(handle(handleText,{
                    loginHash:true
                }));
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}
