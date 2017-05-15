define('src/js/containers/admin/user/index', function(require, exports, module) {

  /**
   * Created by ex-wangxin on 2017/3/31.
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
  
  var _actionsUser = require('../../actions/user');
  
  var _componentsPublicCenterTopNav = require('../../components/public/centerTopNav');
  
  var _componentsPublicCenterTopNav2 = _interopRequireDefault(_componentsPublicCenterTopNav);
  
  var _untilsPublicFun = require('../../untils/publicFun');
  
  var _componentsPublicPagination = require('../../components/public/pagination');
  
  var _componentsPublicPagination2 = _interopRequireDefault(_componentsPublicPagination);
  
  var _actionsDialog = require('../../actions/dialog');
  
  var _componentsUserSelectPeople = require('../../components/user/selectPeople');
  
  var _componentsUserSelectPeople2 = _interopRequireDefault(_componentsUserSelectPeople);
  
  var _componentsPublicDepartment = require('../../components/public/department');
  
  var _componentsPublicDepartment2 = _interopRequireDefault(_componentsPublicDepartment);
  
  var _componentsPublicSelectBox = require('../../components/public/selectBox');
  
  var _componentsPublicSelectBox2 = _interopRequireDefault(_componentsPublicSelectBox);
  
  var _componentsPublicPlugTableLoading = require('../../components/public/plugTableLoading');
  
  var _componentsPublicPlugTableLoading2 = _interopRequireDefault(_componentsPublicPlugTableLoading);
  
  var UserManagerMain = (function (_React$Component) {
      _inherits(UserManagerMain, _React$Component);
  
      function UserManagerMain() {
          _classCallCheck(this, UserManagerMain);
  
          _get(Object.getPrototypeOf(UserManagerMain.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(UserManagerMain, [{
          key: 'pageNavClick',
  
          //加载分页插件
          /*loadPage() {
              this.props._userManager({
                  loadPageFlag: false
              });
              this.pageNavClick(1,this.props.user.pageSize);
          }*/
  
          //调用分页加载
          value: function pageNavClick(n, pageSize) {
              console.log(pageSize);
              var ajaxData = {
                  curPage: n, //当前页
                  pageSize: pageSize, //每页多少行
                  trueName: this.props.user.searchUserName, //姓名
                  accountName: this.props.user.searchAccountNumber, //账号
                  mobilePhone: this.props.user.searchPhoneNumber, //手机号码
                  tcode: this.props.user.searchEmployeeNumber, //部门编号
                  roleCode: this.props.user.searchRoleCode, //角色编号
                  workingState: this.props.user.searchWorkingState };
  
              //在职状态
              this.props._userManager({
                  curPage: n,
                  pageSize: pageSize
              });
              this.loadData(ajaxData);
          }
  
          //加载数据
      }, {
          key: 'loadData',
          value: function loadData(ajaxData) {
              var _that = this;
              var options = {
                  curPage: ajaxData.curPage, //当前页
                  pageSize: ajaxData.pageSize, //每页多少行
                  trueName: ajaxData.trueName, //姓名
                  accountName: ajaxData.accountName, //账号
                  mobilePhone: ajaxData.mobilePhone, //手机号码
                  tcode: ajaxData.tcode, //部门编号
                  roleCode: ajaxData.roleCode, //角色编号
                  workingState: ajaxData.workingState,
  
                  callBack: function callBack(data) {
                      if (data.status == "0000") {
                          if (data.data.data.length > 0) {
                              _that.props._userManager({
                                  totalSize: data.data.count,
                                  status: 'success',
                                  list: data.data.data
                              });
                          } else {
                              _that.props._userManager({
                                  totalSize: data.data.count,
                                  status: 'nothing',
                                  list: data.data.data
                              });
                          }
                      } else {
                          _that.props._userManager({
                              totalSize: 0,
                              status: 'fail'
                          });
                      }
                      _that.props._userManager({
                          queryCheck: 0,
                          tableList: true
                      });
                  },
                  errorCallBack: function errorCallBack() {
                      _that.props._userManager({
                          queryCheck: 0,
                          totalSize: 0,
                          status: 'fail'
                      });
                  }
              };
              _that.props._userManager({
                  status: 'loading'
              });
              this.props._userManagerLoadData(options);
          }
  
          //获取部门树形结构数据和角色下拉框
      }, {
          key: 'getTreeData',
          value: function getTreeData() {
              var _that = this;
              this.props._userManagerLoadTree(function (data) {
                  if (data.status == "0000") {
                      var companys = data.data.companys; //部门
                      for (var i = 0; i < companys.length; i++) {
                          companys.isChildOpen = false;
                      }
                      _that.props._userManager({
                          departmentData: companys
                      });
  
                      var roles = data.data.roles; //角色
                      var rolesList = [{ value: "", name: "请选择" }]; //角色列表
                      for (var j = 0; j < roles.length; j++) {
                          var item = new Object();
                          item.value = roles[j].roleCode;
                          item.name = roles[j].roleName;
                          rolesList.push(item);
                      }
                      _that.props._userManager({
                          roleOldList: rolesList,
                          roleCodeList: true
                      });
                  }
              });
          }
  
          //分配资源按钮
      }, {
          key: 'allocateResources',
          value: function allocateResources(i) {
              var _that = this;
              var oldList = this.props.user.list;
              this.props._userManager({
                  userRoleList: oldList[i].roles
              });
              this.props._dialogHandle({
                  show: true,
                  type: "confirm",
                  title: oldList[i].trueName + ":分配角色",
                  width: '600px',
                  height: '500px',
                  content: _react2['default'].createElement(_componentsUserSelectPeople2['default'], { selectCallBack: this.selectCallBack.bind(this), oldList: oldList[i].roles,
                      roleOldList: this.props.user.roleOldList }),
                  success: (function () {
                      var _this = this;
  
                      var list = [],
                          allotCheck = this.props.user.allotCheck;
                      if (allotCheck == 0) {
                          (function () {
                              _this.props._userManager({
                                  allotCheck: 1
                              });
                              var roleCode = '';
                              var roleNames = [];
                              _this.props.user.userRoleList.map(function (item, i) {
                                  roleNames.push(item.roleName);
                                  if (roleCode == "") {
                                      roleCode += item.roleCode;
                                  } else {
                                      roleCode += ',' + item.roleCode;
                                  }
                              });
  
                              //发送ajax提交修改的角色类型数据
                              _this.props._userManagerChangeRole({
                                  partyId: oldList[i].partyId,
                                  roleCode: roleCode,
                                  roleNames: roleNames,
                                  trueName: oldList[i].trueName,
                                  callBack: (function (data) {
                                      if (data.status == "0000") {
                                          this.props._userManager({
                                              allotCheck: 0
                                          });
  
                                          this.props._dialogHandle({
                                              type: "tips",
                                              show: true,
                                              content: '保存成功！',
                                              height: '300px',
                                              hide: function hide() {
                                                  var ajaxData = {
                                                      curPage: _that.props.user.curPage, //当前页
                                                      pageSize: _that.props.user.pageSize, //每页多少行
                                                      trueName: _that.props.user.searchUserName, //姓名
                                                      accountName: _that.props.user.searchAccountNumber, //账号
                                                      mobilePhone: _that.props.user.searchPhoneNumber, //手机号码
                                                      tcode: _that.props.user.searchEmployeeNumber, //部门编号
                                                      roleCode: _that.props.user.searchRoleCode, //角色编号
                                                      workingState: _that.props.user.searchWorkingState };
                                                  //在职状态
                                                  _that.loadData(ajaxData);
                                              },
                                              success: function success() {
                                                  return true;
                                              }
                                          });
                                      } else {
                                          this.props._userManager({
                                              allotCheck: 0
                                          });
                                          this.props._dialogHandle({
                                              children: true,
                                              childrenContent: data.message
                                          });
                                          return false;
                                      }
                                  }).bind(_this),
                                  errorCallBack: (function (data) {
                                      this.props._userManager({
                                          allotCheck: 0
                                      });
                                  }).bind(_this)
                              });
                          })();
                      } else {
                          this.props._dialogHandle({
                              children: true,
                              childrenContent: '提交中'
                          });
                          return false;
                      }
                  }).bind(this)
              });
          }
  
          //选择人员回调函数
      }, {
          key: 'selectCallBack',
          value: function selectCallBack(list) {
              this.props._userManager({
                  userRoleList: list
              });
          }
  
          //处理数据
      }, {
          key: 'dealData',
          value: function dealData(oldList, status) {
              var _this2 = this;
  
              var resultTable = [];
              var partyId = this.props.login.account.partyId; //缓存中获取当前登陆人员的的partyId
              if (status == 'success') {
                  oldList.map(function (item, i) {
                      if (item.partyId == partyId || _this2.props.user.allocateResourcesBtnShow == false) {
                          resultTable.push(_react2['default'].createElement(
                              'tr',
                              { key: i },
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  item.trueName
                              ),
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  item.accountName
                              ),
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  item.mobilePhone
                              ),
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  item.companys
                              ),
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  item.roleNames
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
                                  item.trueName
                              ),
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  item.accountName
                              ),
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  item.mobilePhone
                              ),
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  item.companys
                              ),
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  item.roleNames
                              ),
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  _react2['default'].createElement(
                                      'span',
                                      { className: 'btn', onClick: _this2.allocateResources.bind(_this2, i) },
                                      '分配角色'
                                  )
                              )
                          ));
                      }
                  });
                  return resultTable;
              } else {
                  return _react2['default'].createElement(_componentsPublicPlugTableLoading2['default'], { status: this.props.user.status, colSpanCount: '6',
                      classNameEnter: '' });
              }
          }
  
          //加载按钮
      }, {
          key: 'loadBtn',
          value: function loadBtn(btnList) {
              btnList = btnList == "" || btnList == undefined ? [] : btnList.split(',');
              var allocateResourcesBtnShow = false;
              btnList.map(function (item, index) {
                  var type = item.split(":")[1];
                  if (type == "assignRoles") {
                      //分配权限
                      allocateResourcesBtnShow = true;
                  }
              });
              this.props._userManager({
                  allocateResourcesBtnShow: allocateResourcesBtnShow });
              //添加按钮权限
              var ajaxData = {
                  curPage: 1, //当前页
                  pageSize: this.props.user.pageSize, //每页多少行
                  trueName: '', //姓名
                  accountName: '', //账号
                  mobilePhone: '', //手机号码
                  tcode: '', //部门编号
                  roleCode: '', //角色编号
                  workingState: '', //在职状态
                  loadPageFlag: true
              };
              this.loadData(ajaxData);
              this.getTreeData();
          }
      }, {
          key: 'componentDidMount',
          value: function componentDidMount() {
              var btnsList = new _untilsPublicFun.publicFun(this.props);
              this.props._userManager({
                  userName: "", //用户名
                  searchUserName: '', //搜索的用户名
                  accountNumber: "", //账号
                  searchAccountNumber: "", //搜索的账号
                  phoneNumber: "", //手机号
                  searchPhoneNumber: "", //搜索的手机号
                  employeeNumber: "", //部门编号
                  employeeText: "请选择", //部门编号对应的文案
                  searchEmployeeNumber: "", //搜索的部门编号
                  roleCode: "", //角色编码
                  searchRoleCode: "", //搜索的角色编号
                  workingState: '', //在职状态
                  searchWorkingState: '', //用于搜索的在职状态
                  checkAll: false,
                  status: 'loading', //加载状态
  
                  //btnList: this.props.login.Jurisdiction[currentTopMenu].btns[pathName],
                  btnList: btnsList.getJurisdiction(),
                  loadPageFlag: true,
                  curPage: 1,
                  totalSize: 0
              });
              var btnList = btnsList.getJurisdiction();
              this.loadBtn(btnList);
          }
  
          //账号文本框改变事件
      }, {
          key: 'accountNumberChange',
          value: function accountNumberChange(event) {
              this.props._userManager({
                  accountNumber: event.target.value
              });
          }
  
          //姓名文本框改变事件
      }, {
          key: 'userNameChange',
          value: function userNameChange(event) {
              this.props._userManager({
                  userName: event.target.value
              });
          }
  
          //手机号文本框改变事件
      }, {
          key: 'phoneNumberChange',
          value: function phoneNumberChange(event) {
              this.props._userManager({
                  phoneNumber: event.target.value
              });
          }
  
          //角色 改变事件
      }, {
          key: 'roleCodeChange',
          value: function roleCodeChange(roleCode) {
              this.props._userManager({
                  roleCode: roleCode
              });
          }
  
          //点击查询 触发事件
      }, {
          key: 'userManagerQuery',
          value: function userManagerQuery(event) {
              var _that = this;
              var queryCheck = this.props.user.queryCheck;
              if (queryCheck == 0) {
                  var ajaxData = {
                      queryCheck: 1,
                      curPage: 1, //当前页
                      pageSize: _that.props.user.pageSize, //每页多少行
                      trueName: $('#userManagerName').val(), //姓名
                      accountName: $('#userManagerAccountNumber').val(), //账号
                      mobilePhone: $('#userManagerPhoneNumber').val(), //手机号码
                      tcode: _that.props.user.employeeNumber, //部门编号
                      roleCode: _that.props.user.roleCode, //角色编号
                      workingState: this.props.user.workingState, //在职状态
                      loadPageFlag: true
                  };
                  this.props._userManager({
                      queryCheck: 1,
                      curPage: 1, //当前页
                      pageSize: _that.props.user.pageSize, //每页多少行
                      searchUserName: $('#userManagerName').val(), //姓名
                      searchAccountNumber: $('#userManagerAccountNumber').val(), //账号
                      searchPhoneNumber: $('#userManagerPhoneNumber').val(), //手机号码
                      searchEmployeeNumber: _that.props.user.employeeNumber, //部门编号
                      employeeText: _that.props.user.employeeText, //部门编号对应的文案
                      searchRoleCode: _that.props.user.roleCode, //角色编号
                      searchWorkingState: this.props.user.workingState, //在职状态
                      totalSize: 0,
                      loadPageFlag: true
                  });
                  _that.loadData(ajaxData);
              } else {
                  this.props._dialogHandle({
                      type: "tips",
                      time: 2000,
                      content: "正在查询中，请耐心等待！",
                      tipsType: "warning",
                      show: true
                  });
              }
          }
  
          //点击重置  重置 选择框
      }, {
          key: 'userManagerReset',
          value: function userManagerReset(event) {
              var employeeNumber = $('#department').find('.s-ul').html();
              $('#department').find('.s-ul').html('');
              if (employeeNumber != "") {
                  $('#department').append('<label>请选择</label>');
              }
  
              this.props._userManager({
                  userName: "", //用户名
                  searchUserName: '', //搜索的用户名
                  accountNumber: "", //账号
                  searchAccountNumber: "", //搜索的账号
                  phoneNumber: "", //手机号
                  searchPhoneNumber: "", //搜索的手机号
                  employeeNumber: "", //部门编号
                  employeeText: "请选择", //部门编号对应的文案
                  searchEmployeeNumber: "", //搜索的部门编号
                  roleCode: "", //角色编码
                  searchRoleCode: "", //搜索的角色编号
                  workingState: '' });
              //在职状态
              var date = this.props.user.departmentData;
              for (var i = 0; i < date.length; i++) {
                  date[i].isChildOpen = false;
              }
          }
  
          //获得所选部门
      }, {
          key: 'departmentFun',
          value: function departmentFun(tcode, text) {
              this.props._userManager({
                  employeeNumber: tcode,
                  employeeText: text
              });
          }
  
          //在职状态 输入框修改
      }, {
          key: 'workingStateFun',
          value: function workingStateFun(event) {
              this.props._userManager({
                  workingState: event
              });
          }
      }, {
          key: 'render',
          value: function render() {
  
              return _react2['default'].createElement(
                  'div',
                  { className: 'height100p' },
                  _react2['default'].createElement(_componentsPublicCenterTopNav2['default'], { title: '用户管理', parentList: [{ name: "系统管理" }] }),
                  _react2['default'].createElement(
                      'div',
                      { className: 'height100pY user-manager-content clearfix' },
                      _react2['default'].createElement(
                          'div',
                          { className: 'form-content' },
                          _react2['default'].createElement(
                              'span',
                              null,
                              '姓名:'
                          ),
                          _react2['default'].createElement('input', { id: 'userManagerName', type: 'text', value: this.props.user.userName,
                              className: 'role-name',
                              onChange: this.userNameChange.bind(this), onBlur: this.userNameChange.bind(this),
                              placeholder: '请输入姓名' }),
                          _react2['default'].createElement(
                              'span',
                              null,
                              '帐号:'
                          ),
                          _react2['default'].createElement('input', { id: 'userManagerAccountNumber', type: 'text', value: this.props.user.accountNumber,
                              className: 'role-name',
                              onChange: this.accountNumberChange.bind(this),
                              onBlur: this.accountNumberChange.bind(this), placeholder: '请输入帐号' }),
                          _react2['default'].createElement(
                              'span',
                              null,
                              '手机号:'
                          ),
                          _react2['default'].createElement('input', { id: 'userManagerPhoneNumber', type: 'text', value: this.props.user.phoneNumber,
                              className: 'role-name',
                              onChange: this.phoneNumberChange.bind(this), onBlur: this.phoneNumberChange.bind(this),
                              placeholder: '请输入手机号' }),
                          _react2['default'].createElement(
                              'div',
                              { className: 'sec-cont clearfix' },
                              _react2['default'].createElement(
                                  'span',
                                  { className: 'lable ' },
                                  '部门:'
                              ),
                              _react2['default'].createElement(_componentsPublicDepartment2['default'], { value: this.props.user.employeeText,
                                  departmentData: this.props.user.departmentData,
                                  callBack: this.departmentFun.bind(this) }),
                              _react2['default'].createElement(
                                  'span',
                                  { className: 'lable' },
                                  '角色:'
                              ),
                              _react2['default'].createElement(_componentsPublicSelectBox2['default'], { className: 'role-name',
                                  value: this.props.user.roleCode,
                                  list: this.props.user.roleOldList,
                                  callBack: this.roleCodeChange.bind(this)
                              }),
                              _react2['default'].createElement(
                                  'span',
                                  null,
                                  '在职状态:'
                              ),
                              _react2['default'].createElement(_componentsPublicSelectBox2['default'], { className: 'role-name',
                                  value: this.props.user.workingState,
                                  list: [{ value: '', name: '请选择' }, { value: '实习', name: '实习' }, { value: '试用', name: '试用' }, { value: '正式', name: '正式' }, { value: '离职', name: '离职' }],
                                  callBack: this.workingStateFun.bind(this)
                              })
                          )
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'btn-content' },
                          _react2['default'].createElement(
                              'span',
                              { className: 'btn', onClick: this.userManagerQuery.bind(this) },
                              '查询'
                          ),
                          _react2['default'].createElement(
                              'span',
                              { className: 'btn', onClick: this.userManagerReset.bind(this) },
                              '重置'
                          )
                      ),
                      _react2['default'].createElement(
                          'table',
                          { className: 'table' },
                          _react2['default'].createElement(
                              'thead',
                              null,
                              _react2['default'].createElement(
                                  'tr',
                                  null,
                                  _react2['default'].createElement(
                                      'th',
                                      null,
                                      '姓名'
                                  ),
                                  _react2['default'].createElement(
                                      'th',
                                      null,
                                      '帐号'
                                  ),
                                  _react2['default'].createElement(
                                      'th',
                                      null,
                                      '手机号'
                                  ),
                                  _react2['default'].createElement(
                                      'th',
                                      null,
                                      '部门'
                                  ),
                                  _react2['default'].createElement(
                                      'th',
                                      null,
                                      '角色'
                                  ),
                                  _react2['default'].createElement(
                                      'th',
                                      null,
                                      '操作'
                                  )
                              )
                          ),
                          _react2['default'].createElement(
                              'tbody',
                              null,
                              this.dealData(this.props.user.list, this.props.user.status)
                          )
                      ),
                      _react2['default'].createElement(_componentsPublicPagination2['default'], {
                          curPage: this.props.user.curPage,
                          totalNumber: this.props.user.totalSize,
                          pageLimt: this.props.user.pageSize,
                          pageClick: this.pageNavClick.bind(this)
                      })
                  )
              );
          }
      }]);
  
      return UserManagerMain;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
      return state;
  }
  
  function mapDispatchToProps(dispatch) {
      return {
          /*user  页面回调方法*/
          _userManager: function _userManager(options) {
              dispatch((0, _actionsUser.userHandle)(options));
          },
          _userManagerLoadData: function _userManagerLoadData(options) {
              //userManagerLoadData, userManagerLoadTree,userManagerChangeRole
              dispatch((0, _actionsUser.userLoadData)(options));
          },
          _userManagerLoadTree: function _userManagerLoadTree(options) {
              dispatch((0, _actionsUser.userLoadTree)(options));
          },
          _userManagerChangeRole: function _userManagerChangeRole(options) {
              dispatch((0, _actionsUser.userChangeRole)(options));
          },
          _dialogHandle: function _dialogHandle(options) {
              dispatch((0, _actionsDialog.dialogHandle)(options));
          }
      };
  }
  
  var UserManager = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserManagerMain);
  
  exports['default'] = UserManager;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/containers/admin/user/index.js.map
  

});
