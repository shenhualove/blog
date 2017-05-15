;/*!/src/js/reducers/admin/login.js*/
define('src/js/reducers/admin/login', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/1.
   *
   * 登录模块
   */
  //引入 object-assign为了解决 低版本浏览器 ie,谷歌之类的不兼容ES6 object.assign语法
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  //初始化state
  var initalize = sessionStorage.getItem('loginState') ? JSON.parse(sessionStorage.getItem('loginState')) : {
      account: {}, //用户信息
      isLogin: false, //是否登录
      Jurisdiction: {}, //权限
      employ: {}, //部门信息
      partyId: '',
      secondsNum: 60, //每隔多少秒发送
      currentState: "login", //展示内容
      status: 1, //1登录   2首次登录  3忘记密码
      userName: "", //登录名
      passWord: "", //登录密码
      phoneNumber: "", //手机号码
      verificationCode: "", //验证码
      fPassword: "", //忘记密码 --密码
      confirmPassword: "", //忘记密码--确认密码
      errorShow: false, //是否展示错误信息
      errorMsg: "", //错误信息
      codeMsg: "获取验证码", //短信验证码按钮展示
      loginHash: true, //登录按钮防重提交
      nextHash: true, //下一步按钮防重提交
      setPsdHash: true //设置密码后登录按钮防重提交
  };
  /*const initalize = {
          account:sessionStorage.getItem('account')?JSON.parse(sessionStorage.getItem('account')):{},//用户信息
          isLogin:sessionStorage.getItem('isLogin')?true:false,//是否登录
          Jurisdiction:sessionStorage.getItem('Jurisdiction')?JSON.parse(sessionStorage.getItem('Jurisdiction')):{},//权限
          partyId:'',
          secondsNum:60,//每隔多少秒发送
          currentState:"login",//展示内容
          status:1,//1登录   2首次登录  3忘记密码
          userName:"",//登录名
          passWord:"",//登录密码
          phoneNumber:"",//手机号码
          verificationCode:"",//验证码
          fPassword:"",//忘记密码 --密码
          confirmPassword:"",//忘记密码--确认密码
          errorShow:false,//是否展示错误信息
          errorMsg:"",//错误信息
          codeMsg:"获取验证码",//短信验证码按钮展示
          loginHash:true,//登录按钮防重提交
          nextHash:true,//下一步按钮防重提交
          setPsdHash:true,//设置密码后登录按钮防重提交
  };*/
  
  function login(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
          case "LOGIN_HANDLE":
              sessionStorage.setItem('loginState', JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = login;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/login.js.map
  

});

;/*!/src/js/reducers/admin/roles/add.js*/
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

;/*!/src/js/reducers/admin/roles/roles.js*/
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

;/*!/src/js/reducers/admin/home.js*/
define('src/js/reducers/admin/home', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  //初始化state
  var initalize = sessionStorage.getItem('homeState') ? JSON.parse(sessionStorage.getItem('homeState')) : {
      listData: [], //图表X轴日期
      listBalance: [], //业绩余额
      listNodeCount: [] //站点个数
  };
  
  function home(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "HOME_HANDLE":
              sessionStorage.setItem("homeState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = home;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/home.js.map
  

});

;/*!/src/js/reducers/admin/top.js*/
define('src/js/reducers/admin/top', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/1.
   *
   * 顶部模块
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  //初始化state
  var initalize = sessionStorage.getItem('topState') ? JSON.parse(sessionStorage.getItem('topState')) : {};
  
  function top(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
          case "TOP_HANDLE":
              sessionStorage.setItem("topState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
          default:
              return state;
      }
  }
  
  exports['default'] = top;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/top.js.map
  

});

;/*!/src/js/reducers/admin/user.js*/
define('src/js/reducers/admin/user', function(require, exports, module) {

  /**
   * Created by ex-wangxin on 2017/4/1.
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  //初始化state
  var initalize = sessionStorage.getItem('userIndexState') ? JSON.parse(sessionStorage.getItem('userIndexState')) : {
      pageSize: 10, //每页加载10条
      loadPageFlag: true, //加载分页标识  true:加载  false:不加载
      curPage: 1, //当前页
      totalSize: 0, //总数据条数
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
      roleCodeList: false, //角色下拉框展示列表
      roleOldList: [], //角色下拉框原数据
      checkAll: false,
      list: '数据请求中', //数据列表
      tableList: false, //展示列表
  
      status: 'loading', //加载状态字段
      //id:"",
      userRoleList: [], //给某个用户分配的权限列表
      departmentData: '',
      queryCheck: 0, //查询防重复提交字段
      allotCheck: 0, //分配资源防重复提交字段
      allocateResourcesBtnShow: false, //分配资源按钮权限
      btnList: [], //按钮权限数组
      nullData: ""
  
  };
  
  function user(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
          case "USER_HANDLE":
              sessionStorage.setItem("userIndexState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
          default:
              return state;
      }
  }
  
  exports['default'] = user;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/user.js.map
  

});

;/*!/src/js/reducers/admin/dialog.js*/
define('src/js/reducers/admin/dialog', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/12.
   *
   * 弹窗组件
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  //初始化state
  var initalize = {
      show: false, //默认是关闭弹窗 true打开弹窗
      children: false, //是否显示子弹窗，通常用于弹窗里的表单交互，在弹窗提示信息错误之类,
      childrenType: 'warning', //子弹窗的类型,默认为操作警告,仅限于children=true的时候才有效果 success操作成功 fail 操作失败  confirm操作确认 warning 操作警告
      childrenContent: "", //子弹窗的内容
      childrenFail: function childrenFail() {}, //子弹窗的关闭回调函数
      childrenSuccess: function childrenSuccess() {
          return true;
      }, //子弹窗的成功回调函数
      title: '', //弹窗标题
      type: 'confirm', //弹窗类型  confirm / loading / tips / box
      tipsType: 'success', //仅限于type=tips有效果  success操作成功 fail 操作失败  confirm操作确认 warning 操作警告
      content: '', //弹窗内容
      time: 0, //弹窗消失时间
      width: "", //弹窗宽度
      height: "", //弹窗高度
      bgRemove: false, //遮罩层点击是否移除弹窗
      success: function success() {
          return true;
      }, //弹窗确定回调函数
      fail: function fail() {}, //弹窗取消回调函数
      hide: function hide() {}, //遮罩层消失回调函数
      successBtn: true, //是否显示确定按钮  默认为显示
      failBtn: true, //是否显示取消按钮  默认为显示
      successText: "提交", //确定按钮文字
      failText: "关闭" };
  
  //取消按钮文字
  function dialog(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
          case "DIALOG_HANDLE":
              return (0, _objectAssign2['default'])({}, state, action.options);
          default:
              return state;
      }
  }
  
  exports['default'] = dialog;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/dialog.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/public/common.js*/
define('src/js/reducers/admin/reportForm/public/common', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/25.
   *
   * 报表公用reducers
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  //初始化state
  var initalize = sessionStorage.getItem('reportFormCommonState') ? JSON.parse(sessionStorage.getItem('reportFormCommonState')) : {
      provinceList: [], //省列表
      cityList: [], //城市列表
      countyList: [], //县列表
      bankList: [], //银行列表
      companyList: [], //部门列表
      nodeLableList: [] //站点标签列表
  };
  
  function reportFormCommon(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "REPORT_FORM_COMMON_HANDLE":
              sessionStorage.setItem("reportFormCommonState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = reportFormCommon;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/public/common.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/bankAllDataDay.js*/
define('src/js/reducers/admin/reportForm/bankAllDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/24.
   *
   * 全辖银行业务常规数据汇总报表-日
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  //初始化state
  var moment = require("../../untils/moment");
  var initalize = sessionStorage.getItem('bankAllDataDayState') ? JSON.parse(sessionStorage.getItem('bankAllDataDayState')) : {
      selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
      province: { val: '', name: '' }, //选中的省
      city: { val: '', name: '' }, //选中的城市
      county: { val: '', name: '' }, //选中的县
      bank: "", //选中的银行
      summary: 1, //选中的汇总,默认为省
      listData: [], //数据列表
      curPage: 1, //默认为当前第一页
      pageSize: 10, //默认显示多少条
      totalSize: 0, //总条数
      temp_options: {
          selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
          province: { val: '', name: '' }, //选中的省
          city: { val: '', name: '' }, //选中的城市
          county: { val: '', name: '' }, //选中的县
          summary: 1, //选中的汇总
          bank: "" //选中的银行
      }, //临时存放请求数据的选项条件
      status: "loading", //默认请求加载中
      titleList: [{ title: "省份", type: "provinceName", rowspan: "2" }, { title: "市", type: "cityName", rowspan: "2" }, { title: "区县", type: "countyName", rowspan: "2" }, { title: "合作银行", type: "bankTypeCode", rowspan: "2" }, { title: "当日新增站点数", addClass: ["text-r"], type: "dAddNodeCount", parent: "已加盟已签银站点", colspan: 4, format: "number" }, { title: "当月新增站点数", addClass: ["text-r"], type: "mAddNodeCount", parent: "已加盟已签银站点", colspan: 4, format: "number" }, { title: "当年累计新增", addClass: ["text-r"], type: "yCumulateaddCount", parent: "已加盟已签银站点", colspan: 4, format: "number" }, { title: "站点总数", addClass: ["text-r"], type: "regularNodeCount", parent: "已加盟已签银站点", colspan: 4, format: "number" }, { title: "站点总数", addClass: ["text-r"], type: "datanodeCount", parent: "数据站点", colspan: 7, format: "number" }, { title: "站点平均卡数", addClass: ["text-r"], type: "datanodeAvgCardCount", parent: "数据站点", colspan: 7, format: "number" }, { title: "当月新增卡数", addClass: ["text-r"], type: "mAddCardCount", parent: "数据站点", colspan: 7, format: "number" }, { title: "卡数", addClass: ["text-r"], type: "cardCount", parent: "数据站点", colspan: 7, format: "number" }, { title: "站点平均余额（万元）", addClass: ["text-r"], type: "datanodeAvgBalance", parent: "数据站点", colspan: 7, format: "money" }, { title: "当月新增存款（万元）", addClass: ["text-r"], type: "mAddDeposit", parent: "数据站点", colspan: 7, format: "money" }, { title: "时点余额（亿元）", addClass: ["text-r"], type: "currentBalance", parent: "数据站点", colspan: 7, format: "money" }, { title: "导入时间", type: "importDate", rowspan: "2" }],
      totalData: {}, //合计数据
      showTotal: false, //是否显示合计，只有在最后一页设置为true才显示合计
      totalTitle: [{}, {}, {}, { type: "sumDAddNodeCount", format: "number" }, { type: "sumMAddNodeCount", format: "number" }, { type: "sumYCumulateaddCount", format: "number" }, { type: "sumRegularNodeCount", format: "number" }, { type: "sumDatanodeCount", format: "number" }, { type: "sumDatanodeAvgCardCount", format: "number" }, { type: "sumMAddCardCount", format: "number" }, { type: "sumCardCount", format: "number" }, { type: "sumDatanodeAvgBalance", format: "money" }, { type: "sumMAddDeposit", format: "money" }, { type: "sumCurrentBalance", format: "money" }, {}] //合计字段 从第二位开始
  };
  
  function bankAllDataDay(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "BANKALLDATADAY_HANDLE":
              sessionStorage.setItem("bankAllDataDayState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = bankAllDataDay;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/bankAllDataDay.js.map
  

});

;/*!/src/js/reducers/admin/index.js*/
define('src/js/reducers/admin/index', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _redux = require('node_modules/redux/lib/index');
  
  // 利用combineReducers 合并reducers
  
  var _reactRouterRedux = require('node_modules/react-router-redux/lib/index');
  
  // 将routerReducer一起合并管理
  
  var _login = require('src/js/reducers/admin/login');
  
  var _login2 = _interopRequireDefault(_login);
  
  var _rolesAdd = require('src/js/reducers/admin/roles/add');
  
  var _rolesAdd2 = _interopRequireDefault(_rolesAdd);
  
  var _rolesRoles = require('src/js/reducers/admin/roles/roles');
  
  var _rolesRoles2 = _interopRequireDefault(_rolesRoles);
  
  var _home = require('src/js/reducers/admin/home');
  
  var _home2 = _interopRequireDefault(_home);
  
  var _top = require('src/js/reducers/admin/top');
  
  var _top2 = _interopRequireDefault(_top);
  
  var _user = require('src/js/reducers/admin/user');
  
  var _user2 = _interopRequireDefault(_user);
  
  var _dialog = require('src/js/reducers/admin/dialog');
  
  var _dialog2 = _interopRequireDefault(_dialog);
  
  //报表模块
  
  var _reportFormPublicCommon = require('src/js/reducers/admin/reportForm/public/common');
  
  var _reportFormPublicCommon2 = _interopRequireDefault(_reportFormPublicCommon);
  
  //公用的报表模块STATE
  
  var _reportFormBankAllDataDay = require('src/js/reducers/admin/reportForm/bankAllDataDay');
  
  var _reportFormBankAllDataDay2 = _interopRequireDefault(_reportFormBankAllDataDay);
  
  //全辖银行业务常规数据汇总报表-日
  
  var admin = (0, _redux.combineReducers)({
      login: _login2['default'],
      top: _top2['default'],
      addRole: _rolesAdd2['default'],
      home: _home2['default'],
      user: _user2['default'],
      roles: _rolesRoles2['default'],
      dialog: _dialog2['default'],
      bankAllDataDay: _reportFormBankAllDataDay2['default'],
      siteAddDataDay: siteAddDataDay,
      reportFormCommon: _reportFormPublicCommon2['default'],
      routing: _reactRouterRedux.routerReducer
  });
  
  exports['default'] = admin;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/index.js.map
  

});
