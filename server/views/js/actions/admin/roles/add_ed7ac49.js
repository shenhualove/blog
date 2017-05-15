define('src/js/actions/admin/roles/add', function(require, exports, module) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
  	value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  //新增编辑角色模块事件处理
  function rolesAddRoleHandle(options) {
  	return {
  		type: "ADDROLE_HANDLE",
  		options: options
  	};
  }
  
  function rolesGetAddTreeData(options) {
  	return function (dispatch) {
  		$.XlAjax({
  			url: "getPermissionsTreeAndLog",
  			data: {},
  			success: function success(data) {
  				if (data.status == "0000") {
  					dispatch(rolesAddRoleHandle({
  						treeData: data.data.trees
  					}));
  					options.callback();
  				}
  			},
  			errorDialog: function errorDialog(xhr, errorType, error) {
  				(0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
  			}
  		});
  	};
  }
  //编辑角色获取角色信息 （树形，和角色信息）
  function rolesEditLoadData(options) {
  	return function (dispatch) {
  		$.XlAjax({
  			url: "getPermissionsTreeAndLog",
  			data: {
  				roleCode: options.roleCode
  			},
  			success: function success(data) {
  				if (data.status == "0000") {
  					dispatch(rolesAddRoleHandle({
  						treeData: data.data.trees,
  						roleName: data.data.role.roleName,
  						roleDescribe: data.data.role.roleDesc,
  						logListData: data.data.operationLogs
  					}));
  
  					options.callback();
  					options.loadLog(data.data.operationLogs);
  				}
  			},
  			errorDialog: function errorDialog(xhr, errorType, error) {
  				(0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
  			}
  		});
  	};
  }
  
  //编辑角色保存
  function rolesEditRole(options) {
  	return function (dispatch) {
  		$.XlAjax({
  			url: "editRole",
  			data: {
  				roleCode: options.roleCode,
  				id: options.id,
  				roleName: options.roleName,
  				roleDesc: options.roleDesc,
  				pers: options.pers,
  				perNames: options.perNames
  			},
  			success: function success(data) {
  				if (data.status == "0000") {
  					options.callback();
  				} else {
  					dispatch((0, _dialog.dialogHandle)({
  						show: true,
  						content: data.message,
  						type: "tips",
  						tipsType: "warning"
  					}));
  					dispatch(rolesAddRoleHandle({
  						submitFlag: true
  					}));
  				}
  			},
  			error: function error() {
  				dispatch(rolesAddRoleHandle({
  					submitFlag: true
  				}));
  			},
  			errorDialog: function errorDialog(xhr, errorType, error) {
  				(0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
  			}
  		});
  	};
  }
  
  //新增角色保存
  function rolesAddRole(options) {
  	return function (dispatch) {
  		$.XlAjax({
  			url: "addRole",
  			data: {
  				roleName: options.roleName,
  				roleDesc: options.roleDescribe,
  				pers: options.pers,
  				perNames: options.perNames
  			},
  			success: function success(data) {
  				if (data.status == "0000") {
  					options.callback();
  				} else {
  					dispatch((0, _dialog.dialogHandle)({
  						show: true,
  						content: data.message,
  						type: "tips",
  						tipsType: "warning"
  					}));
  					dispatch(rolesAddRoleHandle({
  						submitFlag: true
  					}));
  				}
  			},
  			error: function error() {
  				dispatch(rolesAddRoleHandle({
  					submitFlag: true
  				}));
  			},
  			errorDialog: function errorDialog(xhr, errorType, error) {
  				(0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
  			}
  		});
  	};
  }
  
  exports.rolesAddRoleHandle = rolesAddRoleHandle;
  exports.rolesGetAddTreeData = rolesGetAddTreeData;
  exports.rolesEditLoadData = rolesEditLoadData;
  exports.rolesEditRole = rolesEditRole;
  exports.rolesAddRole = rolesAddRole;
  //# sourceMappingURL=/js/actions/admin/roles/add.js.map
  

});
