/**
 * Created by apple on 17/3/29.
 */
import {dialogHandle,ajaxErrorLog} from './dialog';
//登录模块事件处理
function loginHandle(options){
    return {
        type:"LOGIN_HANDLE",
        options
    }
}


//登录接口
function accountLogin(options){
    var _this = this;
    return dispatch=>{
        $.XlAjax({
            url:"accountLogin",
            data:{
                accountName:options.userName,
                password:options.passWord
            },
            success:function(data){
                if(data.status=="0000"){
                    //登录成功
                    dispatch(loginHandle({
                        loginHash:true
                    }));                    
                    dispatch(getPermissions(data));
                }else{
                    dispatch(loginHandle({
                        errorMsg:data.message,
                        errorShow:true,
                        loginHash:true
                    }));
                }
            },
            error:function(){
                dispatch(loginHandle({
                    loginHash:true
                }));
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}

//处理登录数据
function getPermissions(data){
    return dispatch=>{
        dispatch(loginHandle({
            Jurisdiction:data.data.pers,
            account:data.data.account,
            employ:data.data.employeeTitles?data.data.employeeTitles[0]:{},
            isLogin:true
        }));
    }
}

//发送短信
function sendMessage(options){
    return dispatch=>{
        $.XlAjax({
            url:"sendMessage",
            data:{
                mobilePhone:options.mobilePhone
            },
            success:function(data){
                if(data.status=="0000"){//校验手机号码成功
                    dispatch(dialogHandle({
                        show:true,
                        type:'tips',
                        tipsType:'success',
                        content:"发送短信验证码成功",
                        time:2000
                    }));
                }else{
                    dispatch(loginHandle({
                        errorMsg:data.message,
                        errorShow:true
                    }));
                }

            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        });
    }
}

//根据手机号去匹配数据库
function smsBiz(options){
    return dispatch=>{
        $.XlAjax({
            url:"smsBiz",
            data:{
                mobilePhone:options.phoneNumber
            },
            success:function(data){
                if(data.status=="0000"){//校验手机号码成功
                    options.callback();
                }else{
                    dispatch(loginHandle({
                        errorMsg:data.message,
                        errorShow:true
                    }));
                }
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        });
    }
}

//验证短信验证码
function validateSmsCode(options){
    return dispatch=>{
        $.XlAjax({
            url:"validateSmsCode",
            data:{
                smsNumber:options.verificationCode,
                mobilePhone:options.mobilePhone
            },
            success:function(data){
                if(data.status=="0000"){
                    options.callback();
                }else{
                    dispatch(loginHandle({
                        errorMsg:data.message,
                        errorShow:true
                    }));
                }
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}

//获取partyId
function getPartyId(options){
    return dispatch=>{
        $.XlAjax({
            url:"next",
            data:{
                mobilePhone:options.phoneNumber
            },
            success:function(data){
                if(data.status=="0000"){
                    dispatch(loginHandle({
                        partyId:data.data.partyId,
                        currentState:"passowrd",
                        nextHash:true
                    }));
                }else{
                    dispatch(loginHandle({
                        errorMsg:data.message,
                        errorShow:true,
                        nextHash:true
                    }));
                }
            },
            error:function(){
                dispatch(loginHandle({
                    nextHash:true
                }));
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}

//设置密码提交
function submitPassword(options){
    return dispatch=>{
        $.XlAjax({
            url:"restPassWord",
            data:{
                partyId:options.partyId,
                newpwd:options.newpwd
            },
            success:function(data){
                if(data.status=="0000"){
                    //登录成功
                    dispatch(loginHandle({
                        setPsdHash:true
                    }));
                    dispatch(getPermissions(data));
                }else{
                    dispatch(loginHandle({
                        errorMsg:data.message,
                        errorShow:true,
                        setPsdHash:true
                    }));
                }
            },
            error:function(){
                dispatch(loginHandle({
                    setPsdHash:true
                }));
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}






export {
    loginHandle,accountLogin,sendMessage,smsBiz,
    validateSmsCode,getPartyId,submitPassword
};
