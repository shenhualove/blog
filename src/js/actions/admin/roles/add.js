import {ajaxErrorLog,dialogHandle} from '../dialog';
//新增编辑角色模块事件处理
function rolesAddRoleHandle(options){
    return {
        type:"ADDROLE_HANDLE",
        options
    }
}


function rolesGetAddTreeData(options){
    return dispatch=>{
        $.XlAjax({
			url:"getPermissionsTreeAndLog",
			data:{
				
			},
			success:function(data){				
				if(data.status=="0000"){
					dispatch(rolesAddRoleHandle({
                        treeData:data.data.trees
                    }));
					options.callback();
				}
			},
			errorDialog:function(xhr, errorType, error){
				ajaxErrorLog(xhr, errorType, error,dispatch);
			}
		})
    }
}
//编辑角色获取角色信息 （树形，和角色信息）
function rolesEditLoadData(options){
	return dispatch=>{
        $.XlAjax({
			url:"getPermissionsTreeAndLog",
			data:{
				roleCode:options.roleCode
			},
			success:function(data){				
				if(data.status=="0000"){
					dispatch(rolesAddRoleHandle({
                        treeData:data.data.trees,
                        roleName:data.data.role.roleName,
						roleDescribe:data.data.role.roleDesc,
						logListData:data.data.operationLogs,
                    }));
                    
					options.callback();
					options.loadLog(data.data.operationLogs)
				}
			},
			errorDialog:function(xhr, errorType, error){
				ajaxErrorLog(xhr, errorType, error,dispatch);
			}
		})
    }
}


//编辑角色保存
function rolesEditRole(options){
	return dispatch=>{
        $.XlAjax({
			url:"editRole",
			data:{
				roleCode:options.roleCode,
				id:options.id,
				roleName:options.roleName,
				roleDesc:options.roleDesc,
				pers:options.pers,
				perNames:options.perNames
			},
			success:function(data){
				if(data.status=="0000"){
					options.callback();									
				}else{
					dispatch(dialogHandle({
						show:true,
						content:data.message,
						type:"tips",
						tipsType:"warning"
					}));	
					dispatch(rolesAddRoleHandle({
						submitFlag:true
					}));
				}				
			},
			error:function(){
				dispatch(rolesAddRoleHandle({
						submitFlag:true
					}));
			},
			errorDialog:function(xhr, errorType, error){
				ajaxErrorLog(xhr, errorType, error,dispatch);
			}
		});
    }
}


//新增角色保存
function rolesAddRole(options){
	return dispatch=>{
        $.XlAjax({
			url:"addRole",
			data:{
				roleName:options.roleName,
				roleDesc:options.roleDescribe,
				pers:options.pers,
				perNames:options.perNames
			},
			success:function(data){
				if(data.status=="0000"){
					options.callback();												
				}else{
					dispatch(dialogHandle({
						show:true,
						content:data.message,
						type:"tips",
						tipsType:"warning"
					}));
					dispatch(rolesAddRoleHandle({
						submitFlag:true
					}));							
				}				
			},
			error:function(){
				dispatch(rolesAddRoleHandle({
					submitFlag:true
				}));
			},
			errorDialog:function(xhr, errorType, error){
				ajaxErrorLog(xhr, errorType, error,dispatch);
			}
		});
    }
}

export {
    rolesAddRoleHandle,rolesGetAddTreeData,rolesEditLoadData,rolesEditRole,rolesAddRole
};
