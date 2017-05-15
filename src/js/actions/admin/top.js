/**
 * Created by gaolei on 2017/4/1.
 *
 * 顶部菜单模块
 */
import {dialogHandle,ajaxErrorLog} from './dialog';
//顶部TOP模块事件处理
function topHandle(options){
    return {
        type:"TOP_HANDLE",
        options
    }
}

//退出登录
function logOut(options){
    return dispatch=>{
        $.XlAjax({
            url:"loginout",
            success:function(data){
                if(data.status=="0000"){
                    sessionStorage.clear();
                    window.location.href = "/";
                }
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}

//重设密码
function setPassWord(options){
    var _this = this;
    return dispatch=>{
        $.XlAjax({
            url:"resetPwd",
            data:{
                oldPwd:$("#oldPsd").val(),
                newPwd:$("#confirmPsd").val()
            },
            success:function(data){
                if(data.status=="0000"){//校验手机号码成功
                    dispatch(dialogHandle({
                        show:true,
                        type:'tips',
                        content:"密码修改成功，2秒后自动跳转到登录页面",
                        time:2000,
                        success:function(){
                            return true;
                        },
                        hide:function(){
                            sessionStorage.clear();
                            options.callBack();
                            window.location.href='/';
                        }
                    }));
                }else if(data.status=="9999"){
                    options.errMesg();
                }else{
                    dispatch(dialogHandle({
                        show:true,
                        type:'tips',
                        tipsType:"warning",
                        content:data.message
                    }));
                }
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        });
    }
}

export   {topHandle,logOut,setPassWord};