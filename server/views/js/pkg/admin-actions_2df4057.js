;/*!/src/js/actions/admin/dialog.js*/
define('src/js/actions/admin/dialog', function(require, exports, module) {

  /**
   * Created by shenhua
   *
   * 弹窗组件
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.dialogHandle = dialogHandle;
  exports.ajaxErrorLog = ajaxErrorLog;
  
  function dialogHandle(options) {
      return {
          type: "DIALOG_HANDLE",
          options: options
      };
  }
  
  function ajaxErrorLog(xhr, errorType, error, dispatch) {
      var options = null;
      if (errorType == "abort") {
          //无网络
          options = {
              type: "tips",
              tipsType: "warning",
              show: true,
              content: "网络已断开,请重新登录试试"
          };
      } else if (errorType == "timeout") {
          //超时
          options = {
              type: "tips",
              tipsType: "warning",
              show: true,
              content: "系统连接超时,请重新登录试试"
          };
      } else if (errorType == "error") {
          //服务器或者客户端错误
          switch (xhr.status) {
              case 401:
                  options = {
                      type: "tips",
                      tipsType: "warning",
                      show: true,
                      content: "登录超时，请重新登录",
                      success: function success() {
                          sessionStorage.clear();
                          window.location.href = "/";
                      }
                  };
                  break;
              case 403:
                  options = {
                      type: "tips",
                      tipsType: "warning",
                      show: true,
                      content: "没有权限，禁止访问"
                  };
                  break;
              case 404:
                  options = {
                      type: "tips",
                      tipsType: "warning",
                      show: true,
                      content: "未找到服务器,请重新登录试试"
                  };
                  break;
              case 500:
                  options = {
                      type: "tips",
                      tipsType: "warning",
                      show: true,
                      content: "服务器未响应,请重新登录试试"
                  };
                  break;
              case 503:
                  options = {
                      type: "tips",
                      tipsType: "warning",
                      show: true,
                      content: "服务器不可用,请重新登录试试"
                  };
                  break;
              case 504:
                  options = {
                      type: "tips",
                      tipsType: "warning",
                      show: true,
                      content: "网关超时,请重新登录试试"
                  };
                  break;
          }
      }
      if (options) {
          dispatch(dialogHandle(options));
      }
  }
  //# sourceMappingURL=/js/actions/admin/dialog.js.map
  

});

;/*!/src/js/actions/admin/index.js*/
define('src/js/actions/admin/index', function(require, exports, module) {

  /**
   * Created by shenhua
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  exports.loginHandle = loginHandle;
  exports.accountLogin = accountLogin;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _utilsCommonFetch = require('src/js/utils/common/fetch');
  
  var _utilsCommonFetch2 = _interopRequireDefault(_utilsCommonFetch);
  
  var _common = require('src/js/actions/common/index');
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  var handleText = "LOGIN_HANDLE";
  //触发action
  
  function loginHandle(data) {
      return function (dispatch) {
          dispatch((0, _common.handle)(handleText, data));
      };
  }
  
  //登录接口
  
  function accountLogin(options) {
      return function (dispatch) {
          (0, _utilsCommonFetch2['default'])({
              url: "accountLogin",
              data: {
                  accountName: options.userName,
                  password: options.passWord
              },
              success: function success(data) {
                  if (data.status == "1") {
                      //登录成功
                      dispatch((0, _common.handle)(handleText, {
                          loginHash: true
                      }));
                      dispatch((0, _common.handle)("LOGIN_SUCCESS", data.data));
                  } else {
                      dispatch((0, _common.handle)(handleText, {
                          errorMsg: data.message,
                          errorShow: true,
                          loginHash: true
                      }));
                  }
              },
              error: function error() {
                  dispatch((0, _common.handle)(handleText, {
                      loginHash: true
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  //# sourceMappingURL=/js/actions/admin/index.js.map
  

});

;/*!/src/js/actions/admin/top.js*/
define('src/js/actions/admin/top', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/1.
   *
   * 顶部菜单模块
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  //顶部TOP模块事件处理
  function topHandle(options) {
      return {
          type: "TOP_HANDLE",
          options: options
      };
  }
  
  //退出登录
  function logOut(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "loginout",
              success: function success(data) {
                  if (data.status == "0000") {
                      sessionStorage.clear();
                      window.location.href = "/";
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  //重设密码
  function setPassWord(options) {
      var _this = this;
      return function (dispatch) {
          $.XlAjax({
              url: "resetPwd",
              data: {
                  oldPwd: $("#oldPsd").val(),
                  newPwd: $("#confirmPsd").val()
              },
              success: function success(data) {
                  if (data.status == "0000") {
                      //校验手机号码成功
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          content: "密码修改成功，2秒后自动跳转到登录页面",
                          time: 2000,
                          success: function success() {
                              return true;
                          },
                          hide: function hide() {
                              sessionStorage.clear();
                              options.callBack();
                              window.location.href = '/';
                          }
                      }));
                  } else if (data.status == "9999") {
                      options.errMesg();
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: "warning",
                          content: data.message
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  exports.topHandle = topHandle;
  exports.logOut = logOut;
  exports.setPassWord = setPassWord;
  //# sourceMappingURL=/js/actions/admin/top.js.map
  

});

;/*!/src/js/actions/admin/column/list.js*/
define('src/js/actions/admin/column/list', function(require, exports, module) {

  /**
   * Created by apple on 17/5/16.
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  exports.columnListHandle = columnListHandle;
  exports.getColumnList = getColumnList;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _utilsCommonFetch = require('src/js/utils/common/fetch');
  
  var _utilsCommonFetch2 = _interopRequireDefault(_utilsCommonFetch);
  
  var _common = require('src/js/actions/common/index');
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  var handleText = "COLUMN_LIST_HANDLE";
  
  //触发action
  
  function columnListHandle(data) {
      return function (dispatch) {
          dispatch((0, _common.handle)(handleText, data));
      };
  }
  
  //获取栏目列表
  
  function getColumnList(options) {
      return function (dispatch) {
          (0, _utilsCommonFetch2['default'])({
              url: "getColumnList",
              data: {
                  pageSize: options.pageSize,
                  curPage: options.curPage
              },
              success: function success(data) {
                  if (data.status == "1") {
                      dispatch((0, _common.handle)("GET_COLUMN_LIST", data.data));
                  } else {
                      dispatch((0, _common.handle)(handleText, {
                          errorMsg: data.message,
                          errorShow: true,
                          loginHash: true
                      }));
                  }
              },
              error: function error() {
                  dispatch((0, _common.handle)(handleText, {
                      loginHash: true
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  //# sourceMappingURL=/js/actions/admin/column/list.js.map
  

});

;/*!/src/js/actions/admin/reportForm/bankAllDataDay.js*/
define('src/js/actions/admin/reportForm/bankAllDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/24.
   *
   * 全辖银行业务全量银行数据汇总报表-日
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function bankAllDataDayHandle(options) {
      return {
          type: "BANKALLDATADAY_HANDLE",
          options: options
      };
  }
  
  function bankAllDataDayLoad(options) {
      return function (dispatch) {
          dispatch(bankAllDataDayHandle({
              status: "loading"
          }));
          $.XlAjax({
              url: "bankbizRoutineReport",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      if (data.data.data.bankbizRoutineList.length > 0) {
                          var isShow = false;
                          if (options.curPage == Math.ceil(data.data.count / options.pageSize)) {
                              //当前是最后一页
                              isShow = true;
                          }
                          dispatch(bankAllDataDayHandle({
                              listData: data.data.data.bankbizRoutineList,
                              totalData: data.data.data.bankbizRoutineExt,
                              totalSize: data.data.count,
                              showTotal: isShow,
                              status: "success"
                          }));
                      } else {
                          dispatch(bankAllDataDayHandle({
                              listData: data.data.data.bankbizRoutineList,
                              totalData: data.data.data.bankbizRoutineExt,
                              totalSize: data.data.count,
                              status: "nothing"
                          }));
                      }
                  } else {
                      dispatch(bankAllDataDayHandle({
                          status: "fail"
                      }));
                  }
              },
              error: function error() {
                  dispatch(bankAllDataDayHandle({
                      status: "fail"
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function bankAllDataDayExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "bankbizRoutineExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
                          content: data.message
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  exports.bankAllDataDayHandle = bankAllDataDayHandle;
  exports.bankAllDataDayLoad = bankAllDataDayLoad;
  exports.bankAllDataDayExport = bankAllDataDayExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/bankAllDataDay.js.map
  

});

;/*!/src/js/actions/admin/reportForm/public/common.js*/
define('src/js/actions/admin/reportForm/public/common', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/25.
   *
   * 报表通用的action
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function reportFormCommonHandle(options) {
      return {
          type: "REPORT_FORM_COMMON_HANDLE",
          options: options
      };
  }
  
  //查省
  function queryProvince(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "queryProvince",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      dispatch(reportFormCommonHandle({
                          provinceList: data.data
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  //查市
  function queryCity(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "queryCity",
              type: "GET",
              data: options ? options : {},
              success: function success(data) {
                  if (data.status == "0000") {
                      dispatch(reportFormCommonHandle({
                          cityList: data.data
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  //查县、区
  function queryCounty(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "queryCounty",
              type: "GET",
              data: options ? options : {},
              success: function success(data) {
                  if (data.status == "0000") {
                      dispatch(reportFormCommonHandle({
                          countyList: data.data
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  //指定查询某类别的部门
  function getCompanyByCompanyType(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "getCompanyByCompanyType",
              type: "GET",
              data: options ? options : {},
              success: function success(data) {
                  if (data.status == "0000") {
                      dispatch(reportFormCommonHandle({
                          companyList: data.data
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  //获取银行
  function getBankTypeCodes(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "getBankTypeCodes",
              type: "GET",
              data: options ? options : {},
              success: function success(data) {
                  if (data.status == "0000") {
                      dispatch(reportFormCommonHandle({
                          bankList: data.data
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  //获取站点标签列表
  function getNodeLabel(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "getNodeLabelList",
              type: "GET",
              data: options ? options : {},
              success: function success(data) {
                  if (data.status == "0000") {
                      dispatch(reportFormCommonHandle({
                          nodeLableList: data.data
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  exports.reportFormCommonHandle = reportFormCommonHandle;
  exports.queryProvince = queryProvince;
  exports.queryCity = queryCity;
  exports.queryCounty = queryCounty;
  exports.getCompanyByCompanyType = getCompanyByCompanyType;
  exports.getBankTypeCodes = getBankTypeCodes;
  exports.getNodeLabel = getNodeLabel;
  //# sourceMappingURL=/js/actions/admin/reportForm/public/common.js.map
  

});

;/*!/src/js/actions/admin/roles/add.js*/
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

;/*!/src/js/actions/admin/roles/roles.js*/
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

;/*!/src/js/actions/admin/user.js*/
define('src/js/actions/admin/user', function(require, exports, module) {

  /**
   * Created by ex-wangxin on 2017/3/31.
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  /*user 回调函数*/
  function userHandle(options) {
      return {
          type: "USER_HANDLE",
          options: options
      };
  }
  /*user 发送ajax 获取表格数据*/
  function userLoadData(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "userList",
              data: {
                  curPage: options.curPage, //当前页
                  pageSize: options.pageSize, //每页多少行
                  trueName: options.trueName, //姓名
                  accountName: options.accountName, //账号
                  mobilePhone: options.mobilePhone, //手机号码
                  tcode: options.tcode, //部门编号
                  roleCode: options.roleCode, //角色编号
                  status: options.workingState },
              //在职状态
              success: options.callBack,
              error: options.errorCallBack,
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  /*user 发送ajax 获取树形结构数据*/
  function userLoadTree(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "companyTreeAndRoles",
              data: {},
              success: options,
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  /*user 发送ajax 保存修改角色*/
  function userChangeRole(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "distributionRole",
              data: {
                  partyId: options.partyId,
                  roleCode: options.roleCode,
                  roleNames: options.roleNames.join(','),
                  trueName: options.trueName
  
              },
              success: options.callBack,
              error: options.errorCallBack,
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  exports.userHandle = userHandle;
  exports.userLoadData = userLoadData;
  exports.userLoadTree = userLoadTree;
  exports.userChangeRole = userChangeRole;
  //# sourceMappingURL=/js/actions/admin/user.js.map
  

});
