import {ajaxErrorLog,dialogHandle} from '../dialog';
//用户角色权限
function setRolesState(options){
    return {
        type:"ROLES_HANDLE",
        options
    }
}

//用户角色列表

function rolesUserList(options){
	return dispatch=>{
		$.XlAjax({
			url:"roleList",
			data:{
				curPage:options.curPage,
				pageSize:options.pageSize,
				roleName:options.searchText
			},
			success:function(data){
				
				if(data.status=="0000"){
					let tbodyList="";
					if(data.data.data.length>0){
						tbodyList="success";
					}else{
						tbodyList="nothing";
					}
					dispatch(setRolesState({
                        list:data.data.data,
						totalSize:data.data.count,
						curPage:options.curPage,
						tbodyList:tbodyList
                    }));
                    //options.callback(data.data.data);
				}else{
					dispatch(setRolesState({                        
						tbodyList:"fail"
                    }));
                    dispatch(dialogHandle({
						show:true,
						content:data.message,
						type:"tips",
						tipsType:"warning"
					}));
				}
			},
			error:options.errorCallback,
			errorDialog:function(xhr, errorType, error){
				ajaxErrorLog(xhr, errorType, error,dispatch);
			}
		})
	}
}
//删除角色

function deleteRolesUser(options){
	return dispatch=>{
		$.XlAjax({
			url:"deleteRole",
			data:{
				id:options.id,
				roleName:options.roleName
			},
			success:function(data){
				if (data.status == "0000") {
					dispatch(dialogHandle({
						show:true,
						content:"删除成功",
						type:"tips",
						tipsType:"success"
					}));
					dispatch(setRolesState({
						submitFlag:true
					}));
					options.callBack();
					return false;
				} else {
					dispatch(dialogHandle({
						show:true,
						content:data.message,
						type:"tips",
						tipsType:"fail"
					}));
					dispatch(setRolesState({
						submitFlag:true
					}));
					
				}
			},
			error:function(){
				dispatch(setRolesState({
						submitFlag:true
					}));
			},
			errorDialog:function(xhr, errorType, error){
				ajaxErrorLog(xhr, errorType, error,dispatch);
			}
		})
	}
}
export {
	setRolesState,rolesUserList,deleteRolesUser
};



