define('src/js/reducers/admin/roles/add', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  //初始化state
  
  var initalize = sessionStorage.getItem('rolesAddState') ? JSON.parse(sessionStorage.getItem('rolesAddState')) : {
      roleName: "", //角色名称
      roleDescribe: "", //角色描述
  
      roleCode: "", //编辑角色  角色Code
      levelTow: "", //顶部面包屑  二级标题
      logListShow: false, //日志数据
      logListData: [],
      operationType: "", //操作状态  add添加  edit编辑
      roleId: "",
      parentList: [{ name: "系统管理" }, { name: "角色管理", url: "/System/RoleManager" }],
      submitFlag: true, //提交按钮防重提交标识
      treeData: [] };
  
  //左侧权限树形数据
  function addRole(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
          case "ADDROLE_HANDLE":
              sessionStorage.setItem("rolesAddState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  exports['default'] = addRole;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/roles/add.js.map
  

});
