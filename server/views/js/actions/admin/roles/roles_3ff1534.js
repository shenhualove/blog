define('src/js/actions/admin/roles/roles', function(require, exports, module) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
  	value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  //用户角色权限
  function setRolesState(options) {
  	return {
  		type: "ROLES_HANDLE",
  		options: options
  	};
  }
  
  //用户角色列表
  
  function rolesUserList(options) {
  	return function (dispatch) {
  		$.XlAjax({
  			url: "roleList",
  			data: {
  				curPage: options.curPage,
  				pageSize: options.pageSize,
  				roleName: options.searchText
  			},
  			success: function success(data) {
  
  				if (data.status == "0000") {
  					var tbodyList = "";
  					if (data.data.data.length > 0) {
  						tbodyList = "success";
  					} else {
  						tbodyList = "nothing";
  					}
  					dispatch(setRolesState({
  						list: data.data.data,
  						totalSize: data.data.count,
  						curPage: options.curPage,
  						tbodyList: tbodyList
  					}));
  					//options.callback(data.data.data);
  				} else {
  						dispatch(setRolesState({
  							tbodyList: "fail"
  						}));
  						dispatch((0, _dialog.dialogHandle)({
  							show: true,
  							content: data.message,
  							type: "tips",
  							tipsType: "warning"
  						}));
  					}
  			},
  			error: options.errorCallback,
  			errorDialog: function errorDialog(xhr, errorType, error) {
  				(0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
  			}
  		});
  	};
  }
  //删除角色
  
  function deleteRolesUser(options) {
  	return function (dispatch) {
  		$.XlAjax({
  			url: "deleteRole",
  			data: {
  				id: options.id,
  				roleName: options.roleName
  			},
  			success: function success(data) {
  				if (data.status == "0000") {
  					dispatch((0, _dialog.dialogHandle)({
  						show: true,
  						content: "删除成功",
  						type: "tips",
  						tipsType: "success"
  					}));
  					dispatch(setRolesState({
  						submitFlag: true
  					}));
  					options.callBack();
  					return false;
  				} else {
  					dispatch((0, _dialog.dialogHandle)({
  						show: true,
  						content: data.message,
  						type: "tips",
  						tipsType: "fail"
  					}));
  					dispatch(setRolesState({
  						submitFlag: true
  					}));
  				}
  			},
  			error: function error() {
  				dispatch(setRolesState({
  					submitFlag: true
  				}));
  			},
  			errorDialog: function errorDialog(xhr, errorType, error) {
  				(0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
  			}
  		});
  	};
  }
  exports.setRolesState = setRolesState;
  exports.rolesUserList = rolesUserList;
  exports.deleteRolesUser = deleteRolesUser;
  //# sourceMappingURL=/js/actions/admin/roles/roles.js.map
  

});
