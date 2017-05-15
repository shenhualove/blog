define('src/js/containers/admin/roles/index', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/3/8.
   */
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
  
  var _componentsPublicCenterTopNav = require('../../components/public/centerTopNav');
  
  var _componentsPublicCenterTopNav2 = _interopRequireDefault(_componentsPublicCenterTopNav);
  
  var _reactRouter = require('node_modules/react-router/lib/index');
  
  var _untilsPublicFun = require('../../untils/publicFun');
  
  var _actionsRolesRoles = require("../../actions/roles/roles");
  
  var _actionsRolesAdd = require("../../actions/roles/add");
  
  var _componentsPublicPagination = require('../../components/public/pagination');
  
  var _componentsPublicPagination2 = _interopRequireDefault(_componentsPublicPagination);
  
  var _componentsPublicPlugTableLoading = require('../../components/public/plugTableLoading');
  
  var _componentsPublicPlugTableLoading2 = _interopRequireDefault(_componentsPublicPlugTableLoading);
  
  var _actionsDialog = require('../../actions/dialog');
  
  var RoleManagerMain = (function (_React$Component) {
      _inherits(RoleManagerMain, _React$Component);
  
      function RoleManagerMain() {
          _classCallCheck(this, RoleManagerMain);
  
          _get(Object.getPrototypeOf(RoleManagerMain.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(RoleManagerMain, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
              this.props._setRolesState({
                  submitFlag: true
              });
              //let currentTopMenu = this.props.login.Jurisdiction.System;
              //let currentTopMenu = 'System';
              //let pathName = this.props.location.pathname.replace("/", "");
              //let pathName = 'RoleManager';
              /*this.props._setRolesState({
                  loadPageFlag: true            
              });*/
              var btnsList = new _untilsPublicFun.publicFun(this.props);
              //获得用户角色权限
              this.props._setRolesState({
                  btnList: btnsList.getJurisdiction()
              });
              this.loadBtn(btnsList.getJurisdiction());
          }
      }, {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
              this.props._setRolesState({
                  loadPageFlag: true, //加载分页标识  true:加载  false:不加载
                  curPage: 1, //当前页
                  totalSize: 0, //总数据条数
                  list: [],
                  tableList: true,
                  selectList: [],
                  tableHead: true,
                  searchBtnShow: true, //查询按钮权限
                  addBtnShow: false, //添加按钮权限
                  editBtnShow: false, //编辑按钮权限
                  deleteBtnShow: false, //删除按钮权限
                  btnList: "", //按钮权限字符串
                  nullData: "",
                  tbodyList: 'loading' //表格加载控件
              });
          }
  
          //文本框改变事件
      }, {
          key: 'roleNameChange',
          value: function roleNameChange(event) {
              this.props._setRolesState({
                  roleName: event.target.value
              });
          }
  
          //加载按钮
      }, {
          key: 'loadBtn',
          value: function loadBtn(btnList) {
              var _this = this;
  
              //let btnList=this.props.roles.btnList.split(",");
  
              btnList = btnList == "" || btnList == undefined ? [] : btnList.split(',');
              var searchFlag = false,
                  addFlag = false,
                  editFlag = false,
                  deleteFlag = false;
              btnList.map(function (item, index) {
                  var type = item.split(":")[1];
                  if (type == "add") {
                      addFlag = true;
                  } else if (type == "edit") {
                      editFlag = true;
                  } else if (type == "search") {
                      searchFlag = true;
                  } else if (type == "del") {
                      deleteFlag = true;
                  }
              });
              //初始化用户角色权限
              this.props._setRolesState({
                  addBtnShow: addFlag, //添加按钮权限
                  editBtnShow: editFlag, //编辑按钮权限
                  deleteBtnShow: deleteFlag //删除按钮权限
              });
  
              var options = {
                  searchText: this.props.roles.searchText,
                  curPage: this.props.roles.curPage,
                  pageSize: this.props.roles.pageLimit,
                  errorCallback: function errorCallback() {
                      _this.errorCallback();
                  }
              };
  
              this.loadData(options);
          }
      }, {
          key: 'showThead',
          value: function showThead() {
              var tableHead = "";
              if (!this.props.roles.editBtnShow && !this.props.roles.deleteBtnShow) {
                  tableHead = _react2['default'].createElement(
                      'tr',
                      null,
                      _react2['default'].createElement(
                          'th',
                          { width: '50%' },
                          '角色名称'
                      ),
                      _react2['default'].createElement(
                          'th',
                          { width: '50%' },
                          '角色描述'
                      )
                  );
              } else {
                  tableHead = _react2['default'].createElement(
                      'tr',
                      null,
                      _react2['default'].createElement(
                          'th',
                          { width: '30%' },
                          '角色名称'
                      ),
                      _react2['default'].createElement(
                          'th',
                          { width: '50%' },
                          '角色描述'
                      ),
                      _react2['default'].createElement(
                          'th',
                          { width: '20%' },
                          '操作'
                      )
                  );
              }
              return tableHead;
          }
  
          //加载数据
      }, {
          key: 'loadData',
          value: function loadData(options) {
              this.props._setRolesState({
                  tbodyList: "loading"
              });
              this.props._rolesUserList(options);
          }
      }, {
          key: 'errorCallback',
          value: function errorCallback() {
              this.props._setRolesState({
                  list: [],
                  totalSize: 0,
                  tbodyList: "fail"
              });
          }
  
          //添加角色
      }, {
          key: 'addRole',
          value: function addRole() {
              this.props._rolesAddRoleHandle({
                  operationType: "add",
                  roleCode: "",
                  roleId: "",
                  logListShow: [],
                  logListData: [],
                  treeData: [],
                  roleName: "", //角色名称
                  roleDescribe: "" });
  
              //角色描述
              _reactRouter.browserHistory.push('/System/addRole/' + "add");
          }
  
          //调用分页加载
      }, {
          key: 'pageNavClick',
          value: function pageNavClick(n, pageSize) {
              var _this2 = this;
  
              this.props._setRolesState({
                  curPage: n,
                  pageLimit: pageSize
  
              });
              var options = {
                  searchText: this.props.roles.searchText,
                  curPage: n,
                  pageSize: pageSize,
                  errorCallback: function errorCallback() {
                      _this2.errorCallback();
                  }
              };
              this.loadData(options);
          }
  
          //查询按钮
      }, {
          key: 'searchBtn',
          value: function searchBtn() {
              var _this3 = this;
  
              this.props._setRolesState({
                  searchText: this.props.roles.roleName,
                  curPage: 1,
                  totalSize: 0
              });
              var options = {
                  searchText: this.props.roles.roleName,
                  curPage: 1,
                  pageSize: this.props.roles.pageLimit,
                  errorCallback: function errorCallback() {
                      _this3.errorCallback();
                  }
              };
              this.loadData(options);
          }
  
          //编辑
      }, {
          key: 'editFun',
          value: function editFun(roleCode, id) {
              this.props._rolesAddRoleHandle({
                  operationType: "edit",
                  roleCode: roleCode,
                  roleId: id
              });
              _reactRouter.browserHistory.push('/System/addRole/' + roleCode);
              //this.props.history.pushState(null, "addRole", {type: "edit", roleCode: roleCode, roleId: id});
          }
  
          //删除
      }, {
          key: 'deleteFun',
          value: function deleteFun(id, roleName) {
              var _this4 = this;
  
              console.log(this.props.roles.submitFlag);
              if (!this.props.roles.submitFlag) {
                  this.props._dialogHandle({
                      show: true,
                      type: "loading",
                      content: "提交中"
                  });
                  return false;
              }
  
              var options = {
                  searchText: this.props.roles.searchText,
                  curPage: this.props.roles.curPage,
                  pageSize: this.props.roles.pageLimit,
                  errorCallback: function errorCallback() {
                      _this4.errorCallback();
                  }
              };
  
              var _that = this;
              this.props._dialogHandle({
                  show: true,
                  content: '你确定要删除该角色吗？',
                  type: "tips",
                  tipsType: "confirm",
                  success: function success() {
                      _that.props._setRolesState({
                          submitFlag: false
                      });
                      _that.props._deleteRolesUser({
                          id: id,
                          roleName: roleName,
                          callBack: function callBack() {
                              _that.props._setRolesState({
                                  submitFlag: true
                              });
                              _that.loadData(options);
                          }
                      });
                      return true;
                  }, fail: (function () {
                      _that.props._setRolesState({
                          submitFlag: true
                      });
                  }).bind(_that)
              });
          }
      }, {
          key: 'showTbody',
          value: function showTbody(list, type) {
              var _this5 = this;
  
              var resultTable = [];
              var _that = this;
              if (type == "success") {
                  list.map(function (item, i) {
                      if (!_this5.props.roles.editBtnShow && !_this5.props.roles.deleteBtnShow) {
                          resultTable.push(_react2['default'].createElement(
                              'tr',
                              { key: i },
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  item.roleName
                              ),
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  item.roleDesc
                              )
                          ));
                      } else {
                          if (item.roleName == "超级管理员" || item.roleName == "普通用户") {
                              resultTable.push(_react2['default'].createElement(
                                  'tr',
                                  { key: i },
                                  _react2['default'].createElement(
                                      'td',
                                      null,
                                      item.roleName
                                  ),
                                  _react2['default'].createElement(
                                      'td',
                                      null,
                                      item.roleDesc
                                  ),
                                  _react2['default'].createElement('td', null)
                              ));
                          } else {
                              resultTable.push(_react2['default'].createElement(
                                  'tr',
                                  { key: i },
                                  _react2['default'].createElement(
                                      'td',
                                      null,
                                      item.roleName
                                  ),
                                  _react2['default'].createElement(
                                      'td',
                                      null,
                                      item.roleDesc
                                  ),
                                  _react2['default'].createElement(
                                      'td',
                                      null,
                                      _react2['default'].createElement(
                                          'span',
                                          { className: 'btn',
                                              style: { display: _this5.props.roles.editBtnShow ? "inline-block" : "none" },
                                              onClick: _this5.editFun.bind(_this5, item.roleCode, item.id) },
                                          '编辑'
                                      ),
                                      _react2['default'].createElement(
                                          'span',
                                          { className: 'btn',
                                              style: { display: _this5.props.roles.deleteBtnShow ? "inline-block" : "none" },
                                              onClick: _this5.deleteFun.bind(_this5, item.id, item.roleName) },
                                          '删除'
                                      )
                                  )
                              ));
                          }
                      }
                  });
              } else {
                  if (!this.props.roles.editBtnShow && !this.props.roles.deleteBtnShow) {
                      resultTable = _react2['default'].createElement(_componentsPublicPlugTableLoading2['default'], { status: type, colSpanCount: '2', classNameEnter: '' });
                  } else {
                      resultTable = _react2['default'].createElement(_componentsPublicPlugTableLoading2['default'], { status: type, colSpanCount: '3', classNameEnter: '' });
                  }
              }
  
              /*if(this.props.roles.list=="数据请求中"){
              	resultTable.push(
              <tr key="0"><td colSpan="3"></td></tr>
              )
              }else{
              	if(this.props.roles.list.length>0){
              this.props.roles.list.map((item, i)=> {
                    if (!this.props.roles.editBtnShow && !this.props.roles.deleteBtnShow) {//编辑按钮和删除按钮都没有权限 直接删除按钮列
                        resultTable.push(
                            <tr key={i}>
                                <td>{item.roleName}</td>
                                <td>{item.roleDesc}</td>
                            </tr>
                        )
                    } else {
                        if (item.roleName == "超级管理员" || item.roleName == "普通用户") {
                            resultTable.push(
                                <tr key={i}>
                                    <td>{item.roleName}</td>
                                    <td>{item.roleDesc}</td>
                                    <td>
              		                            </td>
                                </tr>
                            )
                        } else {
                            resultTable.push(
                                <tr key={i}>
                                    <td>{item.roleName}</td>
                                    <td>{item.roleDesc}</td>
                                    <td>
                                        <span className="btn"
                                              style={{display: this.props.roles.editBtnShow ? "inline-block" : "none"}}
                                              onClick={this.editFun.bind(this, item.roleCode, item.id)}>编辑</span>
                                        <span className="btn"
                                              style={{display: this.props.roles.deleteBtnShow ? "inline-block" : "none"}}
                                              onClick={this.deleteFun.bind(this, item.id,item.roleName)}>删除</span>
                                        </td>
                                </tr>
                            )
                        }
                        }
                    });
              }else{
              if (!this.props.roles.editBtnShow && !this.props.roles.deleteBtnShow) {//编辑按钮和删除按钮都没有权限 直接删除按钮列
                       resultTable.push(
                           <tr key="0">
                              <td colSpan="2">暂无数据</td> 
                           </tr>
                           
                       )
                   }else{
                   	resultTable.push(
              <tr key="0"><td colSpan="3">暂无数据</td></tr>
              )
                   }
              	}
              }*/
              return resultTable;
          }
  
          //处理数据
      }, {
          key: 'dealData',
          value: function dealData(data) {
  
              this.props._setRolesState({
                  tableHead: true,
                  tableList: true
              });
  
              /*if (this.props.roles.loadPageFlag) {
                  this.loadPage();
              }*/
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'height100p' },
                  _react2['default'].createElement(_componentsPublicCenterTopNav2['default'], { title: '角色管理', parentList: [{ name: "系统管理" }] }),
                  _react2['default'].createElement(
                      'div',
                      { className: 'height100pY role-manager-content' },
                      _react2['default'].createElement(
                          'div',
                          { className: 'form-content' },
                          _react2['default'].createElement(
                              'span',
                              null,
                              '角色名称:'
                          ),
                          _react2['default'].createElement('input', { type: 'text', value: this.props.roles.roleName, className: 'role-name',
                              onChange: this.roleNameChange.bind(this), onBlur: this.roleNameChange.bind(this), placeholder: '请输入' })
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'btn-content' },
                          _react2['default'].createElement(
                              'span',
                              { className: 'btn',
                                  style: { display: this.props.roles.searchBtnShow ? "inline-block" : "none" },
                                  onClick: this.searchBtn.bind(this) },
                              '查询'
                          ),
                          _react2['default'].createElement(
                              'span',
                              { className: 'btn', style: { display: this.props.roles.addBtnShow ? "inline-block" : "none" },
                                  onClick: this.addRole.bind(this) },
                              '新增'
                          )
                      ),
                      _react2['default'].createElement(
                          'table',
                          { className: 'table' },
                          _react2['default'].createElement(
                              'thead',
                              null,
                              this.showThead()
                          ),
                          _react2['default'].createElement(
                              'tbody',
                              null,
                              this.showTbody(this.props.roles.list, this.props.roles.tbodyList)
                          )
                      ),
                      _react2['default'].createElement(_componentsPublicPagination2['default'], {
                          curPage: this.props.roles.curPage,
                          totalNumber: this.props.roles.totalSize,
                          pageLimt: this.props.roles.pageLimit,
                          pageClick: this.pageNavClick.bind(this)
                      })
                  )
              );
          }
      }]);
  
      return RoleManagerMain;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
      return state;
  }
  function mapDispatchToProps(dispatch) {
      return {
          _setRolesState: function _setRolesState(options) {
              dispatch((0, _actionsRolesRoles.setRolesState)(options));
          },
          _rolesUserList: function _rolesUserList(options) {
              dispatch((0, _actionsRolesRoles.rolesUserList)(options));
          },
          _rolesAddRoleHandle: function _rolesAddRoleHandle(options) {
              dispatch((0, _actionsRolesAdd.rolesAddRoleHandle)(options));
          },
          _deleteRolesUser: function _deleteRolesUser(options) {
              dispatch((0, _actionsRolesRoles.deleteRolesUser)(options));
          },
          _dialogHandle: function _dialogHandle(options) {
              dispatch((0, _actionsDialog.dialogHandle)(options));
          }
      };
  }
  var RoleManager = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RoleManagerMain);
  
  exports['default'] = RoleManager;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/containers/admin/roles/index.js.map
  

});
