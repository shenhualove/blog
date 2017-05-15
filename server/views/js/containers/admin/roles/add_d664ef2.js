define('src/js/containers/admin/roles/add', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = require('node_modules/react-redux/lib/index');
  
  var _reactRouter = require('node_modules/react-router/lib/index');
  
  var _componentsPublicCenterTopNav = require('../../components/public/centerTopNav');
  
  var _componentsPublicCenterTopNav2 = _interopRequireDefault(_componentsPublicCenterTopNav);
  
  var _componentsPublicTree = require('../../components/public/tree');
  
  var _componentsPublicTree2 = _interopRequireDefault(_componentsPublicTree);
  
  var _actionsRolesAdd = require('../../actions/roles/add');
  
  var _actionsDialog = require('../../actions/dialog');
  
  var AddRoleMain = (function (_React$Component) {
  	_inherits(AddRoleMain, _React$Component);
  
  	function AddRoleMain() {
  		_classCallCheck(this, AddRoleMain);
  
  		_get(Object.getPrototypeOf(AddRoleMain.prototype), 'constructor', this).apply(this, arguments);
  	}
  
  	_createClass(AddRoleMain, [{
  		key: 'componentDidMount',
  		value: function componentDidMount() {
  			this.props._rolesAddRoleHandle({
  				submitFlag: true
  			});
  			if (this.props.addRole.operationType != "add") {
  				//编辑
  				this.editLoadData();
  			} else {
  				this.loadAddTreeData();
  				this.loadLog([]);
  			}
  		}
  
  		//加载添加角色的树形数据
  	}, {
  		key: 'loadAddTreeData',
  		value: function loadAddTreeData() {
  			var _this = this;
  
  			this.props._rolesGetAddTreeData({
  				callback: function callback() {
  					_this.creatTree();
  				}
  			});
  		}
  	}, {
  		key: 'showLogList',
  		value: function showLogList(listData, showFlag) {
  			if (!showFlag) {
  				return "";
  			}
  			var logListShow = [];
  			if (listData.length == 0) {
  				logListShow = _react2['default'].createElement(
  					'tr',
  					null,
  					_react2['default'].createElement('td', { colSpan: '4' })
  				);
  			} else {
  				listData.map(function (item, i) {
  					var Time = moment(item.operateTime).format("YYYY-MM-DD");
  					logListShow.push(_react2['default'].createElement(
  						'tr',
  						{ key: i },
  						_react2['default'].createElement(
  							'td',
  							null,
  							Time
  						),
  						_react2['default'].createElement(
  							'td',
  							null,
  							item.accountName
  						),
  						_react2['default'].createElement(
  							'td',
  							null,
  							item.objectName
  						),
  						_react2['default'].createElement(
  							'td',
  							null,
  							item.rawLog
  						)
  					));
  				});
  			}
  			return logListShow;
  		}
  
  		//加载日志数据
  	}, {
  		key: 'loadLog',
  		value: function loadLog(listData) {
  
  			this.props._rolesAddRoleHandle({
  				logListShow: true
  			});
  		}
  
  		//创建权限树
  	}, {
  		key: 'creatTree',
  		value: function creatTree() {}
  
  		//编辑时加载数据
  	}, {
  		key: 'editLoadData',
  		value: function editLoadData() {
  			var _this2 = this;
  
  			//this.props.params.roleCode //浏览器参数
  			this.props._rolesEditLoadData({
  				roleCode: this.props.addRole.roleCode ? this.props.addRole.roleCode : this.props.params.roleCode,
  				callback: function callback() {
  					_this2.creatTree();
  				},
  				loadLog: function loadLog(data) {
  					_this2.loadLog(data);
  				}
  			});
  		}
  
  		//角色描述改变事件
  	}, {
  		key: 'roleDescribeOnchange',
  		value: function roleDescribeOnchange(event) {
  			this.props._rolesAddRoleHandle({
  				roleDescribe: event.target.value.substring(0, 200)
  			});
  		}
  
  		//角色名称改变事件
  	}, {
  		key: 'roleNameOnchange',
  		value: function roleNameOnchange(event) {
  			this.props._rolesAddRoleHandle({
  				roleName: event.target.value
  			});
  		}
  
  		//点击取消
  	}, {
  		key: 'signOutBack',
  		value: function signOutBack() {
  			this.props._dialogHandle({
  				show: true,
  				type: "tips",
  				tipsType: "confirm",
  				success: function success() {
  					_reactRouter.browserHistory.push('/System/RoleManager');
  					return true;
  				},
  				content: "是否放弃所填内容"
  			});
  		}
  
  		//
  	}, {
  		key: 'checkForm',
  		value: function checkForm() {
  
  			var roleName = this.props.addRole.roleName;
  			var roleDescribe = this.props.addRole.roleDescribe.replace(/\s+/g, "");
  
  			var roleNameCheck = $.XlCheck({
  				val: roleName,
  				len: "1,20",
  				rule: ["Empty", "specialCharacter", "Length"]
  			});
  			var roleDescribeCheck = $.XlCheck({
  				val: roleDescribe,
  				len: "1,200",
  				rule: ["Empty", "specialCharacter", "Length"]
  			});
  			//校验角色名称
  			if (!roleNameCheck.result) {
  				if (!roleNameCheck.Empty) {
  					this.props._dialogHandle({
  						show: true,
  						content: '角色名称不能为空',
  						type: "tips",
  						tipsType: "warning"
  					});
  					return false;
  				}
  				if (!roleNameCheck.specialCharacter) {
  					this.props._dialogHandle({
  						show: true,
  						content: '角色名称不可输入特殊字符或空格',
  						type: "tips",
  						tipsType: "warning"
  					});
  
  					return false;
  				}
  				if (!roleNameCheck.Length) {
  					this.props._dialogHandle({
  						show: true,
  						content: '角色名称只能输入1-20个汉字',
  						type: "tips",
  						tipsType: "warning"
  					});
  					return false;
  				}
  			}
  			//校验角色描述
  			if (!roleDescribeCheck.result) {
  				if (!roleDescribeCheck.Empty) {
  					this.props._dialogHandle({
  						show: true,
  						content: '角色描述不能为空',
  						type: "tips",
  						tipsType: "warning"
  					});
  					return false;
  				}
  				if (!roleDescribeCheck.specialCharacter) {
  					this.props._dialogHandle({
  						show: true,
  						content: '角色描述不可输入特殊字符，请重新输入',
  						type: "tips",
  						tipsType: "warning"
  					});
  					return false;
  				}
  				if (!roleDescribeCheck.Length) {
  					this.props._dialogHandle({
  						show: true,
  						content: '角色描述只能输入1-200个汉字',
  						type: "tips",
  						tipsType: "warning"
  					});
  					return false;
  				}
  			}
  
  			var checkedNodeList = this.getTreeCheckVal(this.props.addRole.treeData).idArray;
  
  			if (checkedNodeList.length == 0) {
  				this.props._dialogHandle({
  					show: true,
  					content: '请给角色分配权限',
  					type: "tips",
  					tipsType: "warning"
  				});
  				return false;
  			}
  			return true;
  		}
  
  		//编辑保存回调
  	}, {
  		key: 'saveCallBack',
  		value: function saveCallBack() {
  			this.props._dialogHandle({
  				show: true,
  				content: '编辑角色成功',
  				type: "tips",
  				tipsType: "success",
  				hide: (function () {
  					this.props._rolesAddRoleHandle({
  						submitFlag: true
  					});
  					_reactRouter.browserHistory.push('/System/RoleManager');
  				}).bind(this)
  			});
  		}
  
  		//新增保存回调
  	}, {
  		key: 'saveAddCallBack',
  		value: function saveAddCallBack() {
  			this.props._dialogHandle({
  				show: true,
  				content: '添加成功',
  				type: "tips",
  				tipsType: "success",
  				hide: (function () {
  					this.props._rolesAddRoleHandle({
  						submitFlag: true
  					});
  					_reactRouter.browserHistory.push('/System/RoleManager');
  				}).bind(this)
  			});
  		}
  
  		//编辑保存
  	}, {
  		key: 'saveEditForm',
  		value: function saveEditForm() {
  			if (!this.checkForm()) {
  				return false;
  			}
  
  			var checkedValue = this.getTreeCheckVal(this.props.addRole.treeData);
  			var checkedNodeList = checkedValue.idArray;
  			var checkedNodeNameList = checkedValue.nameArray;
  
  			this.props._dialogHandle({
  				show: true,
  				content: '是否保存提交所填内容',
  				type: "tips",
  				tipsType: "confirm",
  				success: (function () {
  					var _this3 = this;
  
  					this.props._rolesAddRoleHandle({
  						submitFlag: false
  					});
  					this.props._rolesEditRole({
  						roleCode: this.props.addRole.roleCode ? this.props.addRole.roleCode : this.props.params.roleCode,
  						id: this.props.addRole.roleId,
  						roleName: this.props.addRole.roleName,
  						roleDesc: this.props.addRole.roleDescribe,
  						pers: checkedNodeList.join(","),
  						perNames: checkedNodeNameList.join(","),
  						callback: function callback() {
  							_this3.saveCallBack();
  						}
  					});
  					return true;
  				}).bind(this),
  				fail: (function () {
  					this.props._rolesAddRoleHandle({
  						submitFlag: true
  					});
  				}).bind(this)
  			});
  		}
  
  		//添加保存
  	}, {
  		key: 'saveAddForm',
  		value: function saveAddForm() {
  			if (!this.checkForm()) {
  				return false;
  			}
  
  			var checkedValue = this.getTreeCheckVal(this.props.addRole.treeData);
  			var checkedNodeList = checkedValue.idArray;
  			var checkedNodeNameList = checkedValue.nameArray;
  
  			this.props._dialogHandle({
  				show: true,
  				content: '是否保存提交所填内容',
  				type: "tips",
  				tipsType: "confirm",
  				success: (function () {
  					var _this4 = this;
  
  					this.props._rolesAddRoleHandle({
  						submitFlag: false
  					});
  					this.props._rolesAddRole({
  						roleName: this.props.addRole.roleName,
  						roleDescribe: this.props.addRole.roleDescribe,
  						pers: checkedNodeList.join(","),
  						perNames: checkedNodeNameList.join(","),
  						callback: function callback() {
  							_this4.saveAddCallBack();
  						}
  					});
  					return true;
  				}).bind(this),
  				fail: (function () {
  					this.props._rolesAddRoleHandle({
  						submitFlag: true
  					});
  				}).bind(this)
  			});
  		}
  
  		//保存按钮
  	}, {
  		key: 'saveBtnFun',
  		value: function saveBtnFun() {
  
  			if (!this.props.addRole.submitFlag) {
  				this.props._dialogHandle({
  					show: true,
  					type: "loading",
  					content: "提交中"
  				});
  				return false;
  			}
  
  			if (this.props.addRole.operationType != "add") {
  				this.saveEditForm();
  			} else {
  				this.saveAddForm();
  			}
  		}
  
  		//树形菜单隐藏、显示回调事件 id栏目的ID， bool 是展示或隐藏 DATA是菜单数据结构源
  	}, {
  		key: 'showCall',
  		value: function showCall(id, bool, data) {
  			this.props._rolesAddRoleHandle({
  				treeData: this.selectTreeId(id, bool, data)
  			});
  		}
  
  		//递归菜单是否展开隐藏
  	}, {
  		key: 'selectTreeId',
  		value: function selectTreeId(id, bool, d) {
  			var data = d;
  			for (var i = 0; i < data.length; i++) {
  				if (data[i].id == id) {
  					data[i].open = !bool;
  					break;
  				} else {
  					if (data[i].children.length > 0) {
  						data[i].children = this.selectTreeId(id, bool, data[i].children);
  					}
  				}
  			}
  			return data;
  		}
  
  		//递归菜单 选项是否选中  id栏目的ID， bool 是有子菜单或没有子菜单 DATA是菜单数据结构源
  	}, {
  		key: 'checkShow',
  		value: function checkShow(id, bool, data) {
  			var tempData = this.checkTreeId(id, bool, data);
  			console.log(tempData);
  			this.props._rolesAddRoleHandle({
  				treeData: this.parentIsCheck(id, tempData, tempData)
  			});
  		}
  
  		//递归循环取消选择
  	}, {
  		key: 'checkTreeId',
  		value: function checkTreeId(id, bool, d) {
  			var data = d;
  			for (var i = 0; i < data.length; i++) {
  				if (data[i].id == id) {
  					data[i].checked = !data[i].checked;
  					data[i].middleCheck = false;
  					//含有子菜单，向下递归循环
  					if (bool) {
  						data[i].children = this.loopCheck(data[i].checked, data[i].children);
  					}
  					break;
  				} else {
  					if (data[i].children.length > 0) {
  						data[i].children = this.checkTreeId(id, bool, data[i].children);
  					}
  				}
  			}
  			return data;
  		}
  
  		//递归循环子菜单里的取消选择
  	}, {
  		key: 'loopCheck',
  		value: function loopCheck(bool, d) {
  			var data = d;
  			for (var i = 0; i < data.length; i++) {
  				data[i].checked = bool;
  				data[i].middleCheck = false;
  				if (data[i].children.length > 0) {
  					data[i].children = this.loopCheck(bool, data[i].children);
  				}
  			}
  			return data;
  		}
  
  		//循环递归父元素是否需要更改状态为全选，全不选，或者半选
  	}, {
  		key: 'parentIsCheck',
  		value: function parentIsCheck(id, d, d2) {
  
  			var data = d;
  			for (var i = 0; i < data.length; i++) {
  				if (data[i].id == id) {
  					if (data[i].pid != '0') {
  						d2 = this.digui(data[i].pid, d2);
  						d2 = this.parentIsCheck(data[i].pid, d2, d2);
  					}
  					break;
  				} else {
  					if (data[i].children.length > 0) {
  						d2 = this.parentIsCheck(id, data[i].children, d2);
  					}
  				}
  			}
  			return d2;
  		}
  	}, {
  		key: 'digui',
  		value: function digui(pid, d) {
  			var data = d;
  			for (var i = 0; i < data.length; i++) {
  				if (data[i].id == pid) {
  					var temp_arr1 = undefined,
  					    temp_arr2 = [],
  					    isMiddle = false;
  					for (var k = 0; k < data[i].children.length; k++) {
  						data[i].children[k].middleCheck && temp_arr2.push(true);
  						if (k == 0) {
  							temp_arr1 = data[i].children[k].checked;
  						} else {
  							if (temp_arr1 != data[i].children[k].checked) {
  								isMiddle = true;
  								break;
  							};
  						}
  					}
  					//如果有半选状态，直接设置为选中，并且状态为半选中
  					if (temp_arr2.length > 0 || isMiddle || temp_arr1 == false) {
  						data[i].checked = true;
  						data[i].middleCheck = true;
  					} else {
  						data[i].checked = temp_arr1;
  						data[i].middleCheck = false;
  					}
  
  					break;
  				} else {
  					if (data[i].children.length > 0) {
  						data[i].children = this.digui(pid, data[i].children);
  					}
  				}
  			}
  			return data;
  		}
  
  		//获取树形菜单选中的值，名称
  	}, {
  		key: 'getTreeCheckVal',
  		value: function getTreeCheckVal(data) {
  			var idArray = [],
  			    nameArray = [],
  			    valObj = {};
  			for (var i = 0; i < data.length; i++) {
  				if (data[i].checked) {
  					nameArray.push(data[i].name);
  					idArray.push(data[i].id);
  				}
  				if (data[i].children.length > 0) {
  					var oldObj = this.getTreeCheckVal(data[i].children);
  					nameArray = nameArray.concat(oldObj.nameArray);
  					idArray = idArray.concat(oldObj.idArray);
  				}
  			}
  			valObj.idArray = idArray;
  			valObj.nameArray = nameArray;
  			return valObj;
  		}
  	}, {
  		key: 'componentWillUnmount',
  		value: function componentWillUnmount() {
  			//组件销毁后，设置treeData为[]
  			this.props._rolesAddRoleHandle({
  				treeData: []
  			});
  		}
  	}, {
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				'div',
  				{ className: 'height100p' },
  				_react2['default'].createElement(_componentsPublicCenterTopNav2['default'], { title: this.props.addRole.operationType != "add" ? "编辑角色" : "新增角色", parentList: this.props.addRole.parentList, leaveCallBack: this.signOutBack.bind(this) }),
  				_react2['default'].createElement(
  					'div',
  					{ className: 'height100pY add-role-content clearfix' },
  					_react2['default'].createElement(
  						'div',
  						{ className: 'left-content' },
  						_react2['default'].createElement(_componentsPublicTree2['default'], { treeData: this.props.addRole.treeData, checkShow: this.checkShow.bind(this), showCall: this.showCall.bind(this) })
  					),
  					_react2['default'].createElement(
  						'div',
  						{ className: 'right-content' },
  						_react2['default'].createElement(
  							'p',
  							null,
  							_react2['default'].createElement(
  								'span',
  								{ className: 'lable' },
  								'角色名称:'
  							),
  							_react2['default'].createElement('input', { type: 'text', className: 'w500', maxLength: '20', value: this.props.addRole.roleName, onBlur: this.roleNameOnchange.bind(this), onChange: this.roleNameOnchange.bind(this) })
  						),
  						_react2['default'].createElement(
  							'p',
  							null,
  							_react2['default'].createElement(
  								'span',
  								{ className: 'lable ff' },
  								'角色描述:'
  							),
  							_react2['default'].createElement('textarea', { className: 'w500', maxLength: '200', value: this.props.addRole.roleDescribe, onBlur: this.roleDescribeOnchange.bind(this), onChange: this.roleDescribeOnchange.bind(this) })
  						),
  						_react2['default'].createElement(
  							'div',
  							{ className: 'table-content' },
  							_react2['default'].createElement(
  								'span',
  								{ className: 'lable ff' },
  								'日志:'
  							),
  							_react2['default'].createElement(
  								'div',
  								{ className: 'table' },
  								_react2['default'].createElement(
  									'table',
  									null,
  									_react2['default'].createElement(
  										'thead',
  										null,
  										_react2['default'].createElement(
  											'tr',
  											null,
  											_react2['default'].createElement(
  												'th',
  												{ width: '20%' },
  												'时间'
  											),
  											_react2['default'].createElement(
  												'th',
  												{ width: '25%' },
  												'操作人'
  											),
  											_react2['default'].createElement(
  												'th',
  												{ width: '25%' },
  												'操作功能'
  											),
  											_react2['default'].createElement(
  												'th',
  												{ width: '30%' },
  												'操作内容'
  											)
  										)
  									),
  									_react2['default'].createElement(
  										'tbody',
  										null,
  										this.showLogList(this.props.addRole.logListData, this.props.addRole.logListShow)
  									)
  								)
  							)
  						),
  						_react2['default'].createElement(
  							'p',
  							{ className: 'mr30 clearfix' },
  							_react2['default'].createElement(
  								'span',
  								{ className: 'btn', onClick: this.signOutBack.bind(this) },
  								'取消'
  							),
  							_react2['default'].createElement(
  								'span',
  								{ className: 'btn', onClick: this.saveBtnFun.bind(this) },
  								'保存'
  							)
  						)
  					)
  				)
  			);
  		}
  	}]);
  
  	return AddRoleMain;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
  	return state;
  }
  function mapDispatchToProps(dispatch) {
  	return {
  		_rolesAddRoleHandle: function _rolesAddRoleHandle(options) {
  			dispatch((0, _actionsRolesAdd.rolesAddRoleHandle)(options));
  		},
  
  		_rolesGetAddTreeData: function _rolesGetAddTreeData(options) {
  			dispatch((0, _actionsRolesAdd.rolesGetAddTreeData)(options));
  		},
  		_rolesEditLoadData: function _rolesEditLoadData(options) {
  			dispatch((0, _actionsRolesAdd.rolesEditLoadData)(options));
  		},
  		_rolesEditRole: function _rolesEditRole(options) {
  			dispatch((0, _actionsRolesAdd.rolesEditRole)(options));
  		},
  		_rolesAddRole: function _rolesAddRole(options) {
  			dispatch((0, _actionsRolesAdd.rolesAddRole)(options));
  		},
  		_dialogHandle: function _dialogHandle(options) {
  			dispatch((0, _actionsDialog.dialogHandle)(options));
  		}
  	};
  }
  
  var AddRoleIndex = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddRoleMain);
  
  exports['default'] = AddRoleIndex;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/containers/admin/roles/add.js.map
  

});
