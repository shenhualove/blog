define('src/js/reducers/admin/roles/roles', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  //初始化state
  var initalize = sessionStorage.getItem('rolesIndexState') ? JSON.parse(sessionStorage.getItem('rolesIndexState')) : {
      pageLimit: 10, //每页加载10条
      loadPageFlag: true, //加载分页标识  true:加载  false:不加载
      curPage: 1, //当前页
      totalSize: 0, //总数据条数
      roleName: "", //角色名称
      searchText: "", //搜索时用的角色名称
      list: [],
      tableList: false,
      selectList: [],
      tableHead: false,
      searchBtnShow: true, //查询按钮权限
      addBtnShow: false, //添加按钮权限
      editBtnShow: false, //编辑按钮权限
      deleteBtnShow: false, //删除按钮权限
      btnList: "", //按钮权限字符串
      nullData: "",
      tbodyList: 'loading', //表格加载控件
      submitFlag: true //删除防重提交
  };
  
  function roles(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
          case "ROLES_HANDLE":
              sessionStorage.setItem("rolesIndexState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  exports['default'] = roles;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/roles/roles.js.map
  

});
