/**
 * Created by ex-wangxin on 2017/3/31.
 */
import {dialogHandle,ajaxErrorLog} from './dialog';
/*user 回调函数*/
function userHandle(options){
    return {
        type:"USER_HANDLE",
        options
    }
}
/*user 发送ajax 获取表格数据*/
function userLoadData(options){
    return dispatch=>{
        $.XlAjax({
            url: "userList",
            data: {
                curPage: options.curPage,//当前页
                pageSize: options.pageSize,//每页多少行
                trueName: options.trueName,//姓名
                accountName: options.accountName,//账号
                mobilePhone: options.mobilePhone,//手机号码
                tcode: options.tcode,//部门编号
                roleCode: options.roleCode,//角色编号
                status:options.workingState,//在职状态
            },
            success: options.callBack,
            error: options.errorCallBack,
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        });
    }
}
/*user 发送ajax 获取树形结构数据*/
function userLoadTree(options){
    return dispatch=>{
        $.XlAjax({
            url: "companyTreeAndRoles",
            data: {},
            success: options,
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        });
    }
}
/*user 发送ajax 保存修改角色*/
function userChangeRole(options){
    return dispatch=>{
        $.XlAjax({
            url: "distributionRole",
            data: {
                partyId: options.partyId,
                roleCode: options.roleCode,
                roleNames:options.roleNames.join(','),
				trueName:options.trueName,

            },
            success: options.callBack,
            error: options.errorCallBack,
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        });
    }
}

export   {userHandle,userLoadData,userLoadTree,userChangeRole};
