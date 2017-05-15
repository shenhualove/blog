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

;/*!/src/js/reducers/admin/reportForm/bankAllDataMonth.js*/
define('src/js/reducers/admin/reportForm/bankAllDataMonth', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/27.
   *
   * 全辖银行业务常规数据汇总报表-月
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
  var initalize = sessionStorage.getItem('bankAllDataMonthState') ? JSON.parse(sessionStorage.getItem('bankAllDataMonthState')) : {
      selectDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
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
          selectDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
          province: { val: '', name: '' }, //选中的省
          city: { val: '', name: '' }, //选中的城市
          county: { val: '', name: '' }, //选中的县
          summary: 1, //选中的汇总,默认为省
          bank: "" //选中的银行
      }, //临时存放请求数据的选项条件
      status: "loading", //默认请求加载中
      titleList: [{ title: "省份", type: "provinceName", rowspan: "2" }, { title: "市", type: "cityName", rowspan: "2" }, { title: "区县", type: "countyName", rowspan: "2" }, { title: "合作银行", type: "bankTypeCode", rowspan: "2" }, { title: "当日新增站点数", addClass: ["text-r"], type: "dAddNodeCount", parent: "已加盟已签银站点", colspan: 4, format: "number" }, { title: "当月新增站点数", addClass: ["text-r"], type: "mAddNodeCount", parent: "已加盟已签银站点", colspan: 4, format: "number" }, { title: "当年累计新增", addClass: ["text-r"], type: "yCumulateaddCount", parent: "已加盟已签银站点", colspan: 4, format: "number" }, { title: "站点总数", addClass: ["text-r"], type: "regularNodeCount", parent: "已加盟已签银站点", colspan: 4, format: "number" }, { title: "站点总数", addClass: ["text-r"], type: "datanodeCount", parent: "数据站点", colspan: 7, format: "number" }, { title: "站点平均卡数", addClass: ["text-r"], type: "datanodeAvgCardCount", parent: "数据站点", colspan: 7, format: "number" }, { title: "当月新增卡数", addClass: ["text-r"], type: "mAddCardCount", parent: "数据站点", colspan: 7, format: "number" }, { title: "卡数", addClass: ["text-r"], type: "cardCount", parent: "数据站点", colspan: 7, format: "number" }, { title: "站点平均余额（万元）", addClass: ["text-r"], type: "datanodeAvgBalance", parent: "数据站点", colspan: 7, format: "money" }, { title: "当月新增存款（万元）", addClass: ["text-r"], type: "mAddDeposit", parent: "数据站点", colspan: 7, format: "money" }, { title: "时点余额（亿元）", addClass: ["text-r"], type: "currentBalance", parent: "数据站点", colspan: 7, format: "money" }, { title: "导入时间", type: "importDate", rowspan: "2" }],
      totalData: {}, //合计数据
      showTotal: false, //是否显示合计，只有在最后一页设置为true才显示合计
      totalTitle: [{}, {}, {}, { type: "sumDAddNodeCount", format: "number" }, { type: "sumMAddNodeCount", format: "number" }, { type: "sumYCumulateaddCount", format: "number" }, { type: "sumRegularNodeCount", format: "number" }, { type: "sumDatanodeCount", format: "number" }, { type: "sumDatanodeAvgCardCount", format: "number" }, { type: "sumMAddCardCount", format: "number" }, { type: "sumCardCount", format: "number" }, { type: "sumDatanodeAvgBalance", format: "money" }, { type: "sumMAddDeposit", format: "money" }, { type: "sumCurrentBalance", format: "money" }, {}] //合计字段 从第二位开始
  };
  
  function bankAllDataMonth(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "BANKALLDATAMONTH_HANDLE":
              sessionStorage.setItem("bankAllDataMonthState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = bankAllDataMonth;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/bankAllDataMonth.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/bankRoutineDataDay.js*/
define('src/js/reducers/admin/reportForm/bankRoutineDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/27.
   *
   * 全辖银行业务全量银行数据汇总报表-日
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
  var initalize = sessionStorage.getItem('bankRoutineDataDayState') ? JSON.parse(sessionStorage.getItem('bankRoutineDataDayState')) : {
      selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
      province: { val: '', name: '' }, //选中的省
      bank: "", //选中的银行
      listData: [], //数据列表
      curPage: 1, //默认为当前第一页
      pageSize: 10, //默认显示多少条
      totalSize: 0, //总条数
      temp_options: {
          selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
          province: { val: '', name: '' }, //选中的省
          bank: "" //选中的银行
      }, //临时存放请求数据的选项条件
      status: "loading", //默认请求加载中
      titleList: [{ title: "省份", type: "provinceName" }, { title: "合作银行", type: "bankTypeCode" }, { title: "助农点数量", addClass: ["text-r"], type: "helpNodeCount", format: "number" }, { title: "站点数量", addClass: ["text-r"], type: "nodeCount", format: "number" }, { title: "开卡数量", addClass: ["text-r"], type: "cardCount", format: "number" }, { title: "时点余额（万元）", addClass: ["text-r"], type: "balance", format: "money" }, { title: "导入时间", type: "importDate" }],
      totalData: {}, //合计数据
      showTotal: false, //是否显示合计，只有在最后一页设置为true才显示合计
      totalTitle: [{}, { type: "sumHelpNodeCount", format: "number" }, { type: "sumNodeCount", format: "number" }, { type: "sumCardCount", format: "number" }, { type: "sumBalance", format: "money" }, {}] //合计字段 从第二位开始
  };
  
  function bankRoutineDataDay(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "BANKROUTINEDATADAY_HANDLE":
              sessionStorage.setItem("bankRoutineDataDayState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = bankRoutineDataDay;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/bankRoutineDataDay.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/bankRoutineDataMonth.js*/
define('src/js/reducers/admin/reportForm/bankRoutineDataMonth', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/27.
   *
   * 全辖银行业务全量银行数据汇总报表-月
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
  var initalize = sessionStorage.getItem('bankRoutineDataMonthState') ? JSON.parse(sessionStorage.getItem('bankRoutineDataMonthState')) : {
      selectDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
      province: { val: '', name: '' }, //选中的省
      bank: "", //选中的银行
      listData: [], //数据列表
      curPage: 1, //默认为当前第一页
      pageSize: 10, //默认显示多少条
      totalSize: 0, //总条数
      temp_options: {
          selectDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
          province: { val: '', name: '' }, //选中的省
          bank: "" //选中的银行
      }, //临时存放请求数据的选项条件
      status: "loading", //默认请求加载中
      titleList: [{ title: "省份", type: "provinceName" }, { title: "合作银行", type: "bankTypeCode" }, { title: "助农点数量", addClass: ["text-r"], type: "helpNodeCount", format: "number" }, { title: "站点数量", addClass: ["text-r"], type: "nodeCount", format: "number" }, { title: "开卡数量", addClass: ["text-r"], type: "cardCount", format: "number" }, { title: "时点余额（万元）", addClass: ["text-r"], type: "balance", format: "money" }, { title: "导入时间", type: "importDate" }],
      totalData: {}, //合计数据
      showTotal: false, //是否显示合计，只有在最后一页设置为true才显示合计
      totalTitle: [{}, { type: "sumHelpNodeCount", format: "number" }, { type: "sumNodeCount", format: "number" }, { type: "sumCardCount", format: "number" }, { type: "sumBalance", format: "money" }, {}] //合计字段 从第二位开始
  };
  
  function bankRoutineDataMonth(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "BANKROUTINEDATAMONTH_HANDLE":
              sessionStorage.setItem("bankRoutineDataMonthState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = bankRoutineDataMonth;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/bankRoutineDataMonth.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/siteAddDataDay.js*/
define('src/js/reducers/admin/reportForm/siteAddDataDay', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 全辖站点增量日报（签约、数据、落地情况）-日
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  var moment = require("../../untils/moment");
  
  var initalize = sessionStorage.getItem('siteAddDataDayState') ? JSON.parse(sessionStorage.getItem('siteAddDataDayState')) : {
  	pageLimit: 10, //每页加载10条
  	loadPageFlag: true, //加载分页标识  true:加载  false:不加载
  	curPage: 1, //当前页
  	totalSize: 0, //总数据条数
  	reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
  	province: { val: '', name: '' }, //选中的省
  	bank: "", //银行code
  	temp_options: {
  		reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
  		province: { val: '', name: '' }, //选中的省
  		bank: "" }, //银行code
  	//ajax提交请求数据的选项条件
  	tableList: [], //table list
  	tableTitle: [{ title: "省份", type: "provinceName", rowspan: 2 }, { title: "市场部", type: "companyName", rowspan: 2 }, { title: "合作银行", type: "bankTypeCode", rowspan: 2 }, { title: "本日新增", addClass: ["text-r"], type: "dAddNodesignupCount", parent: "签约站点", colspan: 3, format: "number" }, { title: "本周累计", addClass: ["text-r"], type: "wCumulateNodesignupCount", parent: "签约站点", colspan: 3, format: "number" }, { title: "本月累计", addClass: ["text-r"], type: "mCumulateNodesignupCount", parent: "签约站点", colspan: 3, format: "number" }, { title: "本周新增", addClass: ["text-r"], type: "wAddNodehasdataCount", parent: "数据站点", colspan: 2, format: "number" }, { title: "本月累计", addClass: ["text-r"], type: "mCumulateNodehasdataCount", parent: "数据站点", colspan: 2, format: "number" }, { title: "本周新增", addClass: ["text-r"], type: "wAddNodedouble10Count", parent: "落地站点", colspan: 2, format: "number" }, { title: "本月累计", addClass: ["text-r"], type: "mCumulateNodedouble10Count", parent: "落地站点", colspan: 2, format: "number" }, { title: "双十站点总数", addClass: ["text-r"], type: "double10NodeCount", rowspan: 2, format: "number" }, { title: "双十站点占比", addClass: ["text-r"], type: "double10NodeRate", rowspan: 2, format: "percent" }, { title: "责任人", type: "owner", rowspan: 2 }, { title: "排名", addClass: ["text-r"], type: "ranking", rowspan: 2 }], //table 表头及对应字段
  	tbodyList: 'loading', //table
  	totalData: {}, //合计数据
  	showTotal: false, //是否显示合计，只有在最后一页设置为true才显示合计
  	totalTitle: [{}, {}, { type: "sumDAddNodesignupCount", format: "number" }, { type: "sumWCumulateNodesignupCount", format: "number" }, { type: "sumMCumulateNodesignupCount", format: "number" }, { type: "sumWAddNodehasdataCount", format: "number" }, { type: "sumMCumulateNodehasdataCount", format: "number" }, { type: "sumWAddNodedouble10Count", format: "number" }, { type: "sumMCumulateNodedouble10Count", format: "number" }, { type: "sumDouble10NodeCount", format: "number" }, { type: "sumDouble10NodeRate", format: "percent" }, {}, {}] //合计字段 从第二位开始
  
  };
  
  function siteAddDataDay(state, action) {
  	if (state === undefined) state = initalize;
  
  	switch (action.type) {
  		case "SITEADDDATADAY_HANDLE":
  			sessionStorage.setItem("siteAddDataDayState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
  			return (0, _objectAssign2['default'])({}, state, action.options);
  
  		default:
  			return state;
  	}
  }
  exports['default'] = siteAddDataDay;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/siteAddDataDay.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/siteAddDataMonth.js*/
define('src/js/reducers/admin/reportForm/siteAddDataMonth', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 全辖站点增量日报（签约、数据、落地情况）-月
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  var moment = require("../../untils/moment");
  
  var initalize = sessionStorage.getItem('siteAddDataMonthState') ? JSON.parse(sessionStorage.getItem('siteAddDataMonthState')) : {
  	pageLimit: 10, //每页加载10条
  	loadPageFlag: true, //加载分页标识  true:加载  false:不加载
  	curPage: 1, //当前页
  	totalSize: 0, //总数据条数
  	reportDate: moment().subtract(1, "days").format('YYYY-MM'), //数据日期
  	province: { val: '', name: '' }, //选中的省
  	bank: "", //银行code
  	temp_options: {
  		reportDate: moment().subtract(1, "days").format('YYYY-MM'), //数据日期
  		province: { val: '', name: '' }, //选中的省
  		bank: "" }, //银行code
  	//ajax提交请求数据的选项条件
  	tableList: [], //table list
  	tableTitle: [{ title: "省份", type: "provinceName" }, { title: "市场部", type: "companyName" }, { title: "合作银行", type: "bankTypeCode" }, { title: "签约站点本月累计", addClass: ["text-r"], type: "mCumulateNodesignupCount", format: "number" }, { title: "数据站点本月累计", addClass: ["text-r"], type: "mCumulateNodehasdataCount", format: "number" }, { title: "落地站点本月累计", addClass: ["text-r"], type: "mCumulateNodedouble10Count", format: "number" }, { title: "双十站点总数", addClass: ["text-r"], type: "double10NodeCount", format: "number" }, { title: "双十站点占比", addClass: ["text-r"], type: "double10NodeRate", format: "percent" }, { title: "责任人", type: "owner" }, { title: "排名", type: "ranking" }], //table 表头及对应字段
  	tbodyList: 'loading', //table
  	totalData: {}, //合计数据
  	showTotal: false, //是否显示合计，只有在最后一页设置为true才显示合计
  	totalTitle: [{}, {}, { type: "sumMCumulateNodesignupCount", format: "number" }, { type: "sumMCumulateNodehasdataCount", format: "number" }, { type: "sumMCumulateNodedouble10Count", format: "number" }, { type: "sumDouble10NodeCount", format: "number" }, { type: "sumDouble10NodeRate", format: "percent" }, {}, {}] //合计字段 从第二位开始
  
  };
  
  function siteAddDataMonth(state, action) {
  	if (state === undefined) state = initalize;
  
  	switch (action.type) {
  		case "SITEADDDATAMONTH_HANDLE":
  			sessionStorage.setItem("siteAddDataMonthState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
  			return (0, _objectAssign2['default'])({}, state, action.options);
  
  		default:
  			return state;
  	}
  }
  exports['default'] = siteAddDataMonth;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/siteAddDataMonth.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/siteSignDataDay.js*/
define('src/js/reducers/admin/reportForm/siteSignDataDay', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/26.
   *
   * 月新增签约站点明细报表-日
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  var moment = require("../../untils/moment");
  
  var initalize = sessionStorage.getItem('siteSignDataDayState') ? JSON.parse(sessionStorage.getItem('siteSignDataDayState')) : {
  	pageLimit: 10, //每页加载10条
  	loadPageFlag: true, //加载分页标识  true:加载  false:不加载
  	curPage: 1, //当前页
  	totalSize: 0, //总数据条数
  	reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
  	province: { val: '', name: '' }, //选中的省
  	city: { val: '', name: '' }, //选中的城市
  	county: { val: '', name: '' }, //选中的县
  	department: { val: '', name: '' }, //部门code
  	bank: "", //银行code
  	siteName: "", //站点名称
  	siteNum: "", //站点编号
  	temp_options: {
  		reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
  		province: { val: '', name: '' }, //选中的省
  		city: { val: '', name: '' }, //选中的城市
  		county: { val: '', name: '' }, //选中的县
  		department: { val: '', name: '' }, //部门code
  		bank: "", //银行code
  		siteName: "", //站点名称
  		siteNum: "" }, //站点编号
  	//ajax提交请求数据的选项条件
  	tableList: [], //table list
  	tableTitle: [{ title: "省份", type: "provinceName" }, { title: "市", type: "cityName" }, { title: "区县", type: "countyName" }, { title: "市场部", type: "companyName" }, { title: "合作银行", type: "bankTypeCode" }, { title: "站点编号", type: "nodeCode" }, { title: "站点名称", type: "nodeName" }, { title: "站长姓名", type: "nodeManagerName" }, { title: "站长联系电话", type: "nodeManagerPhone" }, { title: "签银时间", type: "bankSignupDate" }, { title: "站长全身照（图片数量）", addClass: ["text-r"], type: "nodemanagerPhotoCount", format: "number" }, { title: "站点（图片数量）", addClass: ["text-r"], type: "nodePhotoCount", format: "number" }, { title: "合同签字页（图片数量）", addClass: ["text-r"], type: "contractPhotoCount", format: "number" }, { title: "其他（图片数量）", addClass: ["text-r"], type: "otherPhotoCount", format: "number" }], //table 表头及对应字段
  	tbodyList: 'loading' };
  
  //table
  
  function siteSignDataDay(state, action) {
  	if (state === undefined) state = initalize;
  
  	switch (action.type) {
  		case "SITESIGNDATADAY_HANDLE":
  			sessionStorage.setItem("siteSignDataDayState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
  			return (0, _objectAssign2['default'])({}, state, action.options);
  
  		default:
  			return state;
  	}
  }
  exports['default'] = siteSignDataDay;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/siteSignDataDay.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/siteNewAddDataDay.js*/
define('src/js/reducers/admin/reportForm/siteNewAddDataDay', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 月新增数据站点明细报表-日
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  var moment = require("../../untils/moment");
  
  var initalize = sessionStorage.getItem('siteNewAddDataDayState') ? JSON.parse(sessionStorage.getItem('siteNewAddDataDayState')) : {
  	pageLimit: 10, //每页加载10条
  	loadPageFlag: true, //加载分页标识  true:加载  false:不加载
  	curPage: 1, //当前页
  	totalSize: 0, //总数据条数
  	reportType: "0", //0为日报表，1为月报表
  	reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
  	province: { val: '', name: '' }, //选中的省
  	city: { val: '', name: '' }, //选中的城市
  	county: { val: '', name: '' }, //选中的县
  	department: { val: '', name: '' }, //部门code
  	bank: "", //银行code
  	siteName: "", //站点名称
  	siteNum: "", //站点编号
  	temp_options: {
  		reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
  		province: { val: '', name: '' }, //选中的省
  		city: { val: '', name: '' }, //选中的城市
  		county: { val: '', name: '' }, //选中的县
  		department: { val: '', name: '' }, //部门code
  		bank: "", //银行code
  		siteName: "", //站点名称
  		siteNum: "" }, //站点编号
  	//ajax提交请求数据的选项条件
  	tableList: [], //table list
  	tableTitle: [{ title: "省份", type: "provinceName" }, { title: "市", type: "cityName" }, { title: "区县", type: "countyName" }, { title: "市场部", type: "companyName" }, { title: "所属银行", type: "bankTypeCode" }, { title: "站点编号", type: "nodeCode" }, { title: "站点名称", type: "nodeName" }, { title: "站长姓名", type: "nodeManagerName" }, { title: "站长联系电话", type: "nodeManagerPhone" }, { title: "数据导入时间", type: "importDate" }], //table 表头及对应字段
  	tbodyList: 'loading' };
  
  //table
  
  function siteNewAddDataDay(state, action) {
  	if (state === undefined) state = initalize;
  
  	switch (action.type) {
  		case "SITENEWADDDATADAY_HANDLE":
  			sessionStorage.setItem("siteNewAddDataDayState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
  			return (0, _objectAssign2['default'])({}, state, action.options);
  
  		default:
  			return state;
  	}
  }
  exports['default'] = siteNewAddDataDay;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/siteNewAddDataDay.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/siteNewAddDataMonth.js*/
define('src/js/reducers/admin/reportForm/siteNewAddDataMonth', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 月新增数据站点明细报表-月
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  var moment = require("../../untils/moment");
  
  var initalize = sessionStorage.getItem('siteNewAddDataMonthState') ? JSON.parse(sessionStorage.getItem('siteNewAddDataMonthState')) : {
  	pageLimit: 10, //每页加载10条
  	loadPageFlag: true, //加载分页标识  true:加载  false:不加载
  	curPage: 1, //当前页
  	totalSize: 0, //总数据条数
  	reportType: "1", //0为日报表，1为月报表
  	reportDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
  	province: { val: '', name: '' }, //选中的省
  	city: { val: '', name: '' }, //选中的城市
  	county: { val: '', name: '' }, //选中的县
  	department: { val: '', name: '' }, //部门code
  	bank: "", //银行code
  	siteName: "", //站点名称
  	siteNum: "", //站点编号
  	temp_options: {
  		reportDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
  		province: { val: '', name: '' }, //选中的省
  		city: { val: '', name: '' }, //选中的城市
  		county: { val: '', name: '' }, //选中的县
  		department: { val: '', name: '' }, //部门code
  		bank: "", //银行code
  		siteName: "", //站点名称
  		siteNum: "" }, //站点编号
  	//ajax提交请求数据的选项条件
  	tableList: [], //table list
  	tableTitle: [{ title: "省份", type: "provinceName" }, { title: "市", type: "cityName" }, { title: "区县", type: "countyName" }, { title: "市场部", type: "companyName" }, { title: "所属银行", type: "bankTypeCode" }, { title: "站点编号", type: "nodeCode" }, { title: "站点名称", type: "nodeName" }, { title: "站长姓名", type: "nodeManagerName" }, { title: "站长联系电话", type: "nodeManagerPhone" }, { title: "数据导入时间", type: "importDate" }], //table 表头及对应字段
  	tbodyList: 'loading' };
  
  //table
  
  function siteNewAddDataMonth(state, action) {
  	if (state === undefined) state = initalize;
  
  	switch (action.type) {
  		case "SITENEWADDDATAMONTH_HANDLE":
  			sessionStorage.setItem("siteNewAddDataMonthState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
  			return (0, _objectAssign2['default'])({}, state, action.options);
  
  		default:
  			return state;
  	}
  }
  exports['default'] = siteNewAddDataMonth;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/siteNewAddDataMonth.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/siteNewFinishDataDay.js*/
define('src/js/reducers/admin/reportForm/siteNewFinishDataDay', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 月新增落地站点明细报表-日
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  var moment = require("../../untils/moment");
  
  var initalize = sessionStorage.getItem('siteNewFinishDataDayState') ? JSON.parse(sessionStorage.getItem('siteNewFinishDataDayState')) : {
  	pageLimit: 10, //每页加载10条
  	loadPageFlag: true, //加载分页标识  true:加载  false:不加载
  	curPage: 1, //当前页
  	totalSize: 0, //总数据条数
  	reportType: "0", //0为日报表，1为月报表
  	reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
  	province: { val: '', name: '' }, //选中的省
  	city: { val: '', name: '' }, //选中的城市
  	county: { val: '', name: '' }, //选中的县
  	department: { val: '', name: '' }, //部门code
  	bank: "", //银行code
  	siteName: "", //站点名称
  	siteNum: "", //站点编号
  	temp_options: {
  		reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
  		province: { val: '', name: '' }, //选中的省
  		city: { val: '', name: '' }, //选中的城市
  		county: { val: '', name: '' }, //选中的县
  		department: { val: '', name: '' }, //部门code
  		bank: "", //银行code
  		siteName: "", //站点名称
  		siteNum: "" }, //站点编号
  	//ajax提交请求数据的选项条件
  	tableList: [], //table list
  	tableTitle: [{ title: "省", type: "provinceName" }, { title: "市", type: "cityName" }, { title: "区县", type: "countyName" }, { title: "市场部", type: "companyName" }, { title: "所属银行", type: "bankTypeCode" }, { title: "站点编号", type: "nodeCode" }, { title: "站点名称", type: "nodeName" }, { title: "站长姓名", type: "nodeManagerName" }, { title: "站长联系电话", type: "nodeNamagerPhone" }, { title: "数据落地时间", type: "double10Date" }, { title: "当前卡数(张)", addClass: ["text-r"], type: "currentCardCount", format: "number" }, { title: "当前卡余额(元)", addClass: ["text-r"], type: "currentBalance", format: "money" }, { title: "当前数据导入时间", type: "importDate" }], //table 表头及对应字段
  	tbodyList: 'loading' };
  
  //table
  
  function siteNewFinishDataDay(state, action) {
  	if (state === undefined) state = initalize;
  
  	switch (action.type) {
  		case "SITENEWFINISHDATADAY_HANDLE":
  			sessionStorage.setItem("siteNewFinishDataDayState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
  			return (0, _objectAssign2['default'])({}, state, action.options);
  
  		default:
  			return state;
  	}
  }
  exports['default'] = siteNewFinishDataDay;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/siteNewFinishDataDay.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/siteNewFinishDataMonth.js*/
define('src/js/reducers/admin/reportForm/siteNewFinishDataMonth', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 月新增落地站点明细报表-月
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  var moment = require("../../untils/moment");
  
  var initalize = sessionStorage.getItem('siteNewFinishDataMonthState') ? JSON.parse(sessionStorage.getItem('siteNewFinishDataMonthState')) : {
  	pageLimit: 10, //每页加载10条
  	loadPageFlag: true, //加载分页标识  true:加载  false:不加载
  	curPage: 1, //当前页
  	totalSize: 0, //总数据条数
  	reportType: "1", //0为日报表，1为月报表
  	reportDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
  	province: { val: '', name: '' }, //选中的省
  	city: { val: '', name: '' }, //选中的城市
  	county: { val: '', name: '' }, //选中的县
  	department: { val: '', name: '' }, //部门code
  	bank: "", //银行code
  	siteName: "", //站点名称
  	siteNum: "", //站点编号
  	temp_options: {
  		reportDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
  		province: { val: '', name: '' }, //选中的省
  		city: { val: '', name: '' }, //选中的城市
  		county: { val: '', name: '' }, //选中的县
  		department: { val: '', name: '' }, //部门code
  		bank: "", //银行code
  		siteName: "", //站点名称
  		siteNum: "" }, //站点编号
  	//ajax提交请求数据的选项条件
  	tableList: [], //table list
  	tableTitle: [{ title: "省", type: "provinceName" }, { title: "市", type: "cityName" }, { title: "区县", type: "countyName" }, { title: "市场部", type: "companyName" }, { title: "所属银行", type: "bankTypeCode" }, { title: "站点编号", type: "nodeCode" }, { title: "站点名称", type: "nodeName" }, { title: "站长姓名", type: "nodeManagerName" }, { title: "站长联系电话", type: "nodeNamagerPhone" }, { title: "数据落地时间", type: "double10Date" }, { title: "当前卡数(张)", addClass: ["text-r"], type: "currentCardCount", format: "number" }, { title: "当前卡余额(元)", addClass: ["text-r"], type: "currentBalance", format: "money" }, { title: "当前数据导入时间", type: "importDate" }], //table 表头及对应字段
  	tbodyList: 'loading' };
  
  //table
  
  function siteNewFinishDataMonth(state, action) {
  	if (state === undefined) state = initalize;
  
  	switch (action.type) {
  		case "SITENEWFINISHDATAMONTH_HANDLE":
  			sessionStorage.setItem("siteNewFinishDataMonthState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
  			return (0, _objectAssign2['default'])({}, state, action.options);
  
  		default:
  			return state;
  	}
  }
  exports['default'] = siteNewFinishDataMonth;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/siteNewFinishDataMonth.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/bankErrorDataDay.js*/
define('src/js/reducers/admin/reportForm/bankErrorDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/27.
   *
   * 全辖银行业务待处理异常数据汇总报表-日
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
  var initalize = sessionStorage.getItem('bankErrorDataDayState') ? JSON.parse(sessionStorage.getItem('bankErrorDataDayState')) : {
      selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
      province: { val: '', name: '' }, //选中的省
      bank: "", //选中的银行
      listData: [], //数据列表
      curPage: 1, //默认为当前第一页
      pageSize: 10, //默认显示多少条
      totalSize: 0, //总条数
      temp_options: {
          selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
          province: { val: '', name: '' }, //选中的省
          bank: "" //选中的银行
      }, //临时存放请求数据的选项条件
      status: "loading", //默认请求加载中
      titleList: [{ title: "省份", type: "provinceName" }, { title: "合作银行", type: "bankTypeCode" }, { title: "双零站点数", addClass: ["text-r"], type: "double0NodeCount", format: "number" }, { title: "无匹配站点数", addClass: ["text-r"], type: "nomatchNodeCount", format: "number" }, { title: "银行业务未开展站点数", addClass: ["text-r"], type: "bankbizstopNodeCount", format: "number" }, { title: "银行业务暂停站点数", addClass: ["text-r"], type: "bankbizpauseNodeCount", format: "number" }, { title: "导入时间", type: "importDate" }],
      totalData: {}, //合计数据
      showTotal: false, //是否显示合计，只有在最后一页设置为true才显示合计
      totalTitle: [{}, { type: "sumDouble0NodeCount", format: "number" }, { type: "sumNomatchNodeCount", format: "number" }, { type: "sumBankbizstopNodeCount", format: "number" }, { type: "sumBankbizpauseNodeCount", format: "number" }, {}] //合计字段 从第二位开始
  };
  
  function bankErrorDataDay(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "BANKERRORDATADAY_HANDLE":
              sessionStorage.setItem("bankErrorDataDayState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = bankErrorDataDay;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/bankErrorDataDay.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/bankErrorDataMonth.js*/
define('src/js/reducers/admin/reportForm/bankErrorDataMonth', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 全辖银行业务待处理异常数据汇总报表-月
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
  var initalize = sessionStorage.getItem('bankErrorDataMonthState') ? JSON.parse(sessionStorage.getItem('bankErrorDataMonthState')) : {
      selectDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
      province: { val: '', name: '' }, //选中的省
      bank: "", //选中的银行
      listData: [], //数据列表
      curPage: 1, //默认为当前第一页
      pageSize: 10, //默认显示多少条
      totalSize: 0, //总条数
      temp_options: {
          selectDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
          province: { val: '', name: '' }, //选中的省
          bank: "" //选中的银行
      }, //临时存放请求数据的选项条件
      status: "loading", //默认请求加载中
      titleList: [{ title: "省份", type: "provinceName" }, { title: "合作银行", type: "bankTypeCode" }, { title: "双零站点数", addClass: ["text-r"], type: "double0NodeCount", format: "number" }, { title: "无匹配站点数", addClass: ["text-r"], type: "nomatchNodeCount", format: "number" }, { title: "银行业务未开展站点数", addClass: ["text-r"], type: "bankbizstopNodeCount", format: "number" }, { title: "银行业务暂停站点数", addClass: ["text-r"], type: "bankbizpauseNodeCount", format: "number" }, { title: "导入时间", type: "importDate" }],
      totalData: {}, //合计数据
      showTotal: false, //是否显示合计，只有在最后一页设置为true才显示合计
      totalTitle: [{}, { type: "sumDouble0NodeCount", format: "number" }, { type: "sumNomatchNodeCount", format: "number" }, { type: "sumBankbizstopNodeCount", format: "number" }, { type: "sumBankbizpauseNodeCount", format: "number" }, {}] //合计字段 从第二位开始
  };
  
  function bankErrorDataMonth(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "BANKERRORDATAMONTH_HANDLE":
              sessionStorage.setItem("bankErrorDataMonthState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = bankErrorDataMonth;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/bankErrorDataMonth.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/sitePatrolAllDataDay.js*/
define('src/js/reducers/admin/reportForm/sitePatrolAllDataDay', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 每日站点巡查汇总报表-日
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  var moment = require("../../untils/moment");
  
  var initalize = sessionStorage.getItem('sitePatrolAllDataDayState') ? JSON.parse(sessionStorage.getItem('sitePatrolAllDataDayState')) : {
  	pageLimit: 10, //每页加载10条
  	loadPageFlag: true, //加载分页标识  true:加载  false:不加载
  	curPage: 1, //当前页
  	totalSize: 0, //总数据条数
  	reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
  	province: { val: '', name: '' }, //选中的省
  	city: { val: '', name: '' }, //选中的城市
  	county: { val: '', name: '' }, //选中的县
  	bank: "", //银行code
  	summary: 1, //选中的汇总,默认为省
  	temp_options: {
  		reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
  		province: { val: '', name: '' }, //选中的省
  		city: { val: '', name: '' }, //选中的城市
  		county: { val: '', name: '' }, //选中的县
  		bank: "", //银行code
  		summary: 1 }, //选中的汇总,默认为省
  	//ajax提交请求数据的选项条件
  	tableList: [], //table list
  	showTotal: false, //是否显示合计，只有在最后一页设置为true才显示合计
  	tableTitle: [{ title: "统计月份", type: "statisticsMonth" }, { title: "省份", type: "provinceName" }, { title: "市", type: "cityName" }, { title: "区县", type: "countyName" }, { title: "合作银行", type: "bankTypeCode" }, { title: "已加盟站点数", addClass: ["text-r"], type: "joinedNodeCount", format: "number" }, { title: "当月巡查率", addClass: ["text-r"], type: "mInspectCountPercent", format: "percent" }, { title: "系统分配任务数", addClass: ["text-r"], type: "jobassignedCount", format: "number" }, { title: "系统任务完成数", addClass: ["text-r"], type: "jobfinishedCount", format: "number" }, { title: "手动添加巡查任务数", addClass: ["text-r"], type: "manualaddinspectjobCount", format: "number" }, { title: "手动添加任务完成数", addClass: ["text-r"], type: "manualaddjobfinishedCount", format: "number" }, { title: "当月总巡查数", addClass: ["text-r"], type: "mInspectCount", format: "number" }, { title: "累计总巡查数", addClass: ["text-r"], type: "cumulateInspectCount", format: "number" }], //table 表头及对应字段
  	tbodyList: 'loading', //table
  	totalData: {}, //合计数据
  	totalTitle: [{}, {}, {}, {}, { type: "sumJoinedNodeCount", format: "number" }, { type: "sumMInspectCountPercent", format: "percent" }, { type: "sumJobassignedCount", format: "number" }, { type: "sumJobfinishedCount", format: "number" }, { type: "sumManualaddinspectjobCount", format: "number" }, { type: "sumManualaddjobfinishedCount", format: "number" }, { type: "sumMInspectCount", format: "number" }, { type: "sumCumulateInspectCount", format: "number" }] //合计字段 从第二位开始
  
  };
  
  function sitePatrolAllDataDay(state, action) {
  	if (state === undefined) state = initalize;
  
  	switch (action.type) {
  		case "SITEPATROLALLDATADAY_HANDLE":
  			sessionStorage.setItem("sitePatrolAllDataDayState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
  			return (0, _objectAssign2['default'])({}, state, action.options);
  
  		default:
  			return state;
  	}
  }
  exports['default'] = sitePatrolAllDataDay;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/sitePatrolAllDataDay.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/zeroSiteDataDay.js*/
define('src/js/reducers/admin/reportForm/zeroSiteDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 双零站点明细报表-日
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
  var initalize = sessionStorage.getItem('zeroSiteDataDayState') ? JSON.parse(sessionStorage.getItem('zeroSiteDataDayState')) : {
      selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
      province: { val: '', name: '' }, //选中的省
      city: { val: '', name: '' }, //选中的城市
      county: { val: '', name: '' }, //选中的县
      bank: "", //选中的银行
      listData: [], //数据列表
      curPage: 1, //默认为当前第一页
      pageSize: 10, //默认显示多少条
      totalSize: 0, //总条数
      temp_options: {
          selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
          province: { val: '', name: '' }, //选中的省
          city: { val: '', name: '' }, //选中的城市
          county: { val: '', name: '' }, //选中的县
          bank: "" //选中的银行
      }, //临时存放请求数据的选项条件
      status: "loading", //默认请求加载中
      titleList: [{ title: "省", type: "provinceName" }, { title: "市", type: "cityName" }, { title: "区县", type: "countyName" }, { title: "合作银行", type: "bankTypeCode" }, { title: "市场部", type: "companyName" }, { title: "站点编码", type: "nodeCode" }, { title: "站点名称", type: "nodeName" }, { title: "站长姓名", type: "nodeManagerName" }, { title: "站长手机号", type: "nodeManagerPhone" }, { title: "站点状态", type: "operationStatus" }, { title: "银行业务状态", type: "bankStatus" }, { title: "签银时间", type: "bankSignupDate" }, { title: "本次数据时间", type: "importDate" }]
  };
  
  function zeroSiteDataDay(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "ZEROSITEDATADAY_HANDLE":
              sessionStorage.setItem("zeroSiteDataDayState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = zeroSiteDataDay;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/zeroSiteDataDay.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/zeroSiteDataMonth.js*/
define('src/js/reducers/admin/reportForm/zeroSiteDataMonth', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 双零站点明细报表-月
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
  var initalize = sessionStorage.getItem('zeroSiteDataMonthState') ? JSON.parse(sessionStorage.getItem('zeroSiteDataMonthState')) : {
      selectDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
      province: { val: '', name: '' }, //选中的省
      city: { val: '', name: '' }, //选中的城市
      county: { val: '', name: '' }, //选中的县
      bank: "", //选中的银行
      listData: [], //数据列表
      curPage: 1, //默认为当前第一页
      pageSize: 10, //默认显示多少条
      totalSize: 0, //总条数
      temp_options: {
          selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
          province: { val: '', name: '' }, //选中的省
          city: { val: '', name: '' }, //选中的城市
          county: { val: '', name: '' }, //选中的县
          bank: "" //选中的银行
      }, //临时存放请求数据的选项条件
      status: "loading", //默认请求加载中
      titleList: [{ title: "省", type: "provinceName" }, { title: "市", type: "cityName" }, { title: "区县", type: "countyName" }, { title: "合作银行", type: "bankTypeCode" }, { title: "市场部", type: "companyName" }, { title: "站点编码", type: "nodeCode" }, { title: "站点名称", type: "nodeName" }, { title: "站长姓名", type: "nodeManagerName" }, { title: "站长手机号", type: "nodeManagerPhone" }, { title: "站点状态", type: "operationStatus" }, { title: "银行业务状态", type: "bankStatus" }, { title: "签银时间", type: "bankSignupDate" }, { title: "本次数据时间", type: "importDate" }]
  };
  
  function zeroSiteDataMonth(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "ZEROSITEDATAMONTH_HANDLE":
              sessionStorage.setItem("zeroSiteDataMonthState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = zeroSiteDataMonth;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/zeroSiteDataMonth.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/siteDetailsDataDay.js*/
define('src/js/reducers/admin/reportForm/siteDetailsDataDay', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 每日站点巡查明细报表-日
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  var moment = require("../../untils/moment");
  
  var initalize = sessionStorage.getItem('siteDetailsDataDayState') ? JSON.parse(sessionStorage.getItem('siteDetailsDataDayState')) : {
  	pageLimit: 10, //每页加载10条
  	loadPageFlag: true, //加载分页标识  true:加载  false:不加载
  	curPage: 1, //当前页
  	totalSize: 0, //总数据条数
  	reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
  	province: { val: '', name: '' }, //选中的省
  	city: { val: '', name: '' }, //选中的城市
  	county: { val: '', name: '' }, //选中的县
  	department: { val: '', name: '' }, //部门code
  	bank: "", //银行code
  	siteName: "", //站点名称
  	siteNum: "", //站点编号
  	partakePeople: "", //参与人员
  	taskState: "", //任务状态
  	temp_options: {
  		reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
  		province: { val: '', name: '' }, //选中的省
  		city: { val: '', name: '' }, //选中的城市
  		county: { val: '', name: '' }, //选中的县
  		department: { val: '', name: '' }, //部门code
  		bank: "", //银行code
  		siteName: "", //站点名称
  		siteNum: "", //站点编号
  		partakePeople: "", //参与人员
  		taskState: "" }, //任务状态
  	//ajax提交请求数据的选项条件
  	tableList: [], //table list
  	tableTitle: [{ title: "省份", type: "provinceName" }, { title: "市", type: "cityName" }, { title: "区县", type: "countyName" }, { title: "合作银行", type: "bankTypeCode" }, { title: "市场部", type: "fullTreePath" }, { title: "站点名称", type: "nodeName" }, { title: "站点编号", type: "nodeCode" }, { title: "是否系统分配任务", type: "isSystemTask" }, { title: "任务状态", type: "inspectjobStatus" }, { title: "巡查时间", type: "inspectDate" }, { title: "参与人员", type: "participant" }, { title: "大致距离（KM）", addClass: ["text-r"], type: "distance", format: "money" }, { title: "巡查备注", type: "inspectComments" }, { title: "巡查反馈", htmlType: [{ type: "button", text: "查看", bindType: "inspectjobStatus", callBack: null, param: "id" }] }], //table 表头及对应字段
  	tbodyList: 'loading' };
  
  //table
  
  function siteDetailsDataDay(state, action) {
  	if (state === undefined) state = initalize;
  
  	switch (action.type) {
  		case "SITEDETAILSDATADAY_HANDLE":
  			sessionStorage.setItem("siteDetailsDataDayState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
  			return (0, _objectAssign2['default'])({}, state, action.options);
  
  		default:
  			return state;
  	}
  }
  exports['default'] = siteDetailsDataDay;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/siteDetailsDataDay.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/masterBusinessDataDay.js*/
define('src/js/reducers/admin/reportForm/masterBusinessDataDay', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/26.
   *
   * 站长交易录入明细报表-日
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  var moment = require("../../untils/moment");
  
  var initalize = sessionStorage.getItem('masterBusinessDataDayState') ? JSON.parse(sessionStorage.getItem('masterBusinessDataDayState')) : {
  	pageLimit: 10, //每页加载10条
  	loadPageFlag: true, //加载分页标识  true:加载  false:不加载
  	curPage: 1, //当前页
  	totalSize: 0, //总数据条数
  	reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
  	province: { val: '', name: '' }, //选中的省
  	city: { val: '', name: '' }, //选中的城市
  	county: { val: '', name: '' }, //选中的县
  	department: { val: '', name: '' }, //部门code
  	bank: "", //银行code
  	siteName: "", //站点名称
  	siteNum: "", //站点编号
  	siteLable: "", //站点标签
  	temp_options: {
  		reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
  		province: { val: '', name: '' }, //选中的省
  		city: { val: '', name: '' }, //选中的城市
  		county: { val: '', name: '' }, //选中的县
  		department: { val: '', name: '' }, //部门code
  		bank: "", //银行code
  		siteName: "", //站点名称
  		siteNum: "", //站点编号
  		siteLable: "" }, //站点标签
  	//ajax提交请求数据的选项条件
  	tableList: [], //table list
  	tableTitle: [{ title: "省份", type: "provinceName" }, { title: "市", type: "cityName" }, { title: "区县", type: "countyName" }, { title: "市场部", type: "companyName" }, { title: "站点编号", type: "nodeCode" }, { title: "站点名称", type: "nodeName" }, { title: "站点状态", type: "operationStatus" }, { title: "合作银行", type: "bankTypeCode" }, { title: "银行业务状态", type: "bankStatus" }, { title: "站点标签", type: "nodeLabel" }, { title: "当日转入（笔）", type: "dTransferMoneyAmount", format: "number" }, { title: "当日转入金额（元）", type: "dTransferMoney", format: "money" }, { title: "当日转出（笔）", type: "dRolloutMoneyAmount", format: "number" }, { title: "当日转出金额（元）", type: "dRolloutMoney", format: "money" }, { title: "本月转入笔数", type: "mTransferMoneyAmount", format: "number" }, { title: "本月转入金额（元）", type: "mTransferMoneyMoney", format: "money" }, { title: "本月转出笔数", type: "mRolloutMoneyAmount", format: "number" }, { title: "本月转出金额（元）", type: "mRolloutMoneyMoney", format: "money" }], //table 表头及对应字段
  	tbodyList: 'loading' };
  
  //table
  
  function masterBusinessDataDay(state, action) {
  	if (state === undefined) state = initalize;
  
  	switch (action.type) {
  		case "MASTERBUSINESSDARADAY_HANDLE":
  			sessionStorage.setItem("masterBusinessDataDayState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
  			return (0, _objectAssign2['default'])({}, state, action.options);
  
  		default:
  			return state;
  	}
  }
  exports['default'] = masterBusinessDataDay;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/masterBusinessDataDay.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/bankNoMatchDataDay.js*/
define('src/js/reducers/admin/reportForm/bankNoMatchDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 无匹配的银行数据明细报表-日
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
  var initalize = sessionStorage.getItem('bankNoMatchDataDayState') ? JSON.parse(sessionStorage.getItem('bankNoMatchDataDayState')) : {
      selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
      province: { val: '', name: '' }, //选中的省
      bank: "", //选中的银行
      listData: [], //数据列表
      curPage: 1, //默认为当前第一页
      pageSize: 10, //默认显示多少条
      totalSize: 0, //总条数
      temp_options: {
          selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
          province: { val: '', name: '' }, //选中的省
          bank: "" //选中的银行
      }, //临时存放请求数据的选项条件
      status: "loading", //默认请求加载中
      titleList: [{ title: "省份", type: "provinceName" }, { title: "导入批次号", type: "batchNo" }, { title: "本次数据时间", type: "importDate" }, { title: "合作银行", type: "bankTypeCode" }, { title: "助农点编码", type: "helpNodeCode" }, { title: "助农点名称", type: "helpNodeName" }, { title: "分行编码", type: "branchNo" }, { title: "分行名称", type: "branchName" }, { title: "支行编码", type: "subbranchNo" }, { title: "支行名称", type: "subbranchName" }, { title: "卡数", addClass: ["text-r"], type: "cardCount", format: "number" }, { title: "时点余额", addClass: ["text-r"], type: "balance", format: "money" }]
  };
  
  function bankNoMatchDataDay(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "BANKNOMATCHDATADAY_HANDLE":
              sessionStorage.setItem("bankNoMatchDataDayState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = bankNoMatchDataDay;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/bankNoMatchDataDay.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/bankNoMatchDataMonth.js*/
define('src/js/reducers/admin/reportForm/bankNoMatchDataMonth', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 无匹配的银行数据明细报表-月
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
  var initalize = sessionStorage.getItem('bankNoMatchDataMonthState') ? JSON.parse(sessionStorage.getItem('bankNoMatchDataMonthState')) : {
      selectDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
      province: { val: '', name: '' }, //选中的省
      bank: "", //选中的银行
      listData: [], //数据列表
      curPage: 1, //默认为当前第一页
      pageSize: 10, //默认显示多少条
      totalSize: 0, //总条数
      status: "loading", //默认请求加载中
      temp_options: {
          selectDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
          province: { val: '', name: '' }, //选中的省
          bank: "" //选中的银行
      }, //临时存放请求数据的选项条件
      titleList: [{ title: "省份", type: "provinceName" }, { title: "导入批次号", type: "batchNo" }, { title: "本次数据时间", type: "importDate" }, { title: "合作银行", type: "bankTypeCode" }, { title: "助农点编码", type: "helpNodeCode" }, { title: "助农点名称", type: "helpNodeName" }, { title: "分行编码", type: "branchNo" }, { title: "分行名称", type: "branchName" }, { title: "支行编码", type: "subbranchNo" }, { title: "支行名称", type: "subbranchName" }, { title: "卡数", addClass: ["text-r"], type: "cardCount", format: "number" }, { title: "时点余额", addClass: ["text-r"], type: "balance", format: "money" }]
  };
  
  function bankNoMatchDataMonth(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "BANKNOMATCHDATAMONTH_HANDLE":
              sessionStorage.setItem("bankNoMatchDataMonthState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = bankNoMatchDataMonth;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/bankNoMatchDataMonth.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/bankPauseDataDay.js*/
define('src/js/reducers/admin/reportForm/bankPauseDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 银行业务暂停站点明细报表-日
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
  var initalize = sessionStorage.getItem('bankPauseDataDayState') ? JSON.parse(sessionStorage.getItem('bankPauseDataDayState')) : {
      selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
      province: { val: '', name: '' }, //选中的省
      city: { val: '', name: '' }, //选中的城市
      county: { val: '', name: '' }, //选中的县
      bank: "", //选中的银行
      listData: [], //数据列表
      curPage: 1, //默认为当前第一页
      pageSize: 10, //默认显示多少条
      totalSize: 0, //总条数
      temp_options: {
          selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
          province: { val: '', name: '' }, //选中的省
          city: { val: '', name: '' }, //选中的城市
          county: { val: '', name: '' }, //选中的县
          bank: "" //选中的银行
      }, //临时存放请求数据的选项条件
      status: "loading", //默认请求加载中
      titleList: [{ title: "省份", type: "provinceName" }, { title: "市", type: "cityName" }, { title: "区县", type: "countyName" }, { title: "合作银行", type: "bankTypeCode" }, { title: "市场部", type: "companyName" }, { title: "站点编码", type: "nodeCode" }, { title: "站点名称", type: "nodeName" }, { title: "站长姓名", type: "nodeManagerName" }, { title: "站长手机号", type: "nodeManagerPhone" }, { title: "站点状态", type: "operationStatus" }, { title: "银行业务状态", type: "bankStatus" }, { title: "签银时间", type: "bankSignupDate" }, { title: "卡数", addClass: ["text-r"], type: "cardCount", format: "number" }, { title: "时点余额", addClass: ["text-r"], type: "currentBalance", format: "money" }, { title: "最后一次数据时间", type: "lastImportDate" }]
  };
  
  function bankPauseDataDay(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "BANKPAUSEDATADAY_HANDLE":
              sessionStorage.setItem("bankPauseDataDayState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = bankPauseDataDay;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/bankPauseDataDay.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/bankPauseDataMonth.js*/
define('src/js/reducers/admin/reportForm/bankPauseDataMonth', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 银行业务暂停站点明细报表-月
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
  var initalize = sessionStorage.getItem('bankPauseDataMonthState') ? JSON.parse(sessionStorage.getItem('bankPauseDataMonthState')) : {
      selectDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
      province: { val: '', name: '' }, //选中的省
      city: { val: '', name: '' }, //选中的城市
      county: { val: '', name: '' }, //选中的县
      bank: "", //选中的银行
      listData: [], //数据列表
      curPage: 1, //默认为当前第一页
      pageSize: 10, //默认显示多少条
      totalSize: 0, //总条数
      temp_options: {
          selectDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
          province: { val: '', name: '' }, //选中的省
          city: { val: '', name: '' }, //选中的城市
          county: { val: '', name: '' }, //选中的县
          bank: "" //选中的银行
      }, //临时存放请求数据的选项条件
      status: "loading", //默认请求加载中
      titleList: [{ title: "省份", type: "provinceName" }, { title: "市", type: "cityName" }, { title: "区县", type: "countyName" }, { title: "合作银行", type: "bankTypeCode" }, { title: "市场部", type: "companyName" }, { title: "站点编码", type: "nodeCode" }, { title: "站点名称", type: "nodeName" }, { title: "站长姓名", type: "nodeManagerName" }, { title: "站长手机号", type: "nodeManagerPhone" }, { title: "站点状态", type: "operationStatus" }, { title: "银行业务状态", type: "bankStatus" }, { title: "签银时间", type: "bankSignupDate" }, { title: "卡数", addClass: ["text-r"], type: "cardCount", format: "number" }, { title: "时点余额", addClass: ["text-r"], type: "currentBalance", format: "money" }, { title: "最后一次数据时间", type: "lastImportDate" }]
  };
  
  function bankPauseDataMonth(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "BANKPAUSEDATAMONTH_HANDLE":
              sessionStorage.setItem("bankPauseDataMonthState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = bankPauseDataMonth;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/bankPauseDataMonth.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/bankNoOpenDataDay.js*/
define('src/js/reducers/admin/reportForm/bankNoOpenDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 银行业务未开展站点明细报表-日
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
  var initalize = sessionStorage.getItem('bankNoOpenDataDayState') ? JSON.parse(sessionStorage.getItem('bankNoOpenDataDayState')) : {
      selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
      province: { val: '', name: '' }, //选中的省
      city: { val: '', name: '' }, //选中的城市
      county: { val: '', name: '' }, //选中的县
      bank: "", //选中的银行
      listData: [], //数据列表
      curPage: 1, //默认为当前第一页
      pageSize: 10, //默认显示多少条
      totalSize: 0, //总条数
      temp_options: {
          selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
          province: { val: '', name: '' }, //选中的省
          city: { val: '', name: '' }, //选中的城市
          county: { val: '', name: '' }, //选中的县
          bank: "" //选中的银行
      }, //临时存放请求数据的选项条件
      status: "loading", //默认请求加载中
      titleList: [{ title: "省份", type: "provinceName" }, { title: "市", type: "cityName" }, { title: "区县", type: "countyName" }, { title: "合作银行", type: "bankTypeCode" }, { title: "市场部", type: "companyName" }, { title: "站点编码", type: "nodeCode" }, { title: "站点名称", type: "nodeName" }, { title: "站长姓名", type: "nodeManagerName" }, { title: "站长手机号", type: "nodeManagerPhone" }, { title: "站点状态", type: "operationStatus" }, { title: "银行业务状态", type: "bankStatus" }, { title: "签银时间", type: "bankSignupDate" }]
  };
  
  function bankNoOpenDataDay(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "BANKNOOPENDATADAY_HANDLE":
              sessionStorage.setItem("bankNoOpenDataDayState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = bankNoOpenDataDay;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/bankNoOpenDataDay.js.map
  

});

;/*!/src/js/reducers/admin/reportForm/bankNoOpenDataMonth.js*/
define('src/js/reducers/admin/reportForm/bankNoOpenDataMonth', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 银行业务未开展站点明细报表-月
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
  var initalize = sessionStorage.getItem('bankNoOpenDataMonthState') ? JSON.parse(sessionStorage.getItem('bankNoOpenDataMonthState')) : {
      selectDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
      province: { val: '', name: '' }, //选中的省
      city: { val: '', name: '' }, //选中的城市
      county: { val: '', name: '' }, //选中的县
      bank: "", //选中的银行
      listData: [], //数据列表
      curPage: 1, //默认为当前第一页
      pageSize: 10, //默认显示多少条
      totalSize: 0, //总条数
      temp_options: {
          selectDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
          province: { val: '', name: '' }, //选中的省
          city: { val: '', name: '' }, //选中的城市
          county: { val: '', name: '' }, //选中的县
          bank: "" //选中的银行
      }, //临时存放请求数据的选项条件
      status: "loading", //默认请求加载中
      titleList: [{ title: "省份", type: "provinceName" }, { title: "市", type: "cityName" }, { title: "区县", type: "countyName" }, { title: "合作银行", type: "bankTypeCode" }, { title: "市场部", type: "companyName" }, { title: "站点编码", type: "nodeCode" }, { title: "站点名称", type: "nodeName" }, { title: "站长姓名", type: "nodeManagerName" }, { title: "站长手机号", type: "nodeManagerPhone" }, { title: "站点状态", type: "operationStatus" }, { title: "银行业务状态", type: "bankStatus" }, { title: "签银时间", type: "bankSignupDate" }]
  };
  
  function bankNoOpenDataMonth(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "BANKNOOPENDATAMONTH_HANDLE":
              sessionStorage.setItem("bankNoOpenDataMonthState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = bankNoOpenDataMonth;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/bankNoOpenDataMonth.js.map
  

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
  
  var _reportFormBankAllDataMonth = require('src/js/reducers/admin/reportForm/bankAllDataMonth');
  
  var _reportFormBankAllDataMonth2 = _interopRequireDefault(_reportFormBankAllDataMonth);
  
  //全辖银行业务常规数据汇总报表-月
  
  var _reportFormBankRoutineDataDay = require('src/js/reducers/admin/reportForm/bankRoutineDataDay');
  
  var _reportFormBankRoutineDataDay2 = _interopRequireDefault(_reportFormBankRoutineDataDay);
  
  //全辖银行业务全量银行数据汇总报表-日
  
  var _reportFormBankRoutineDataMonth = require('src/js/reducers/admin/reportForm/bankRoutineDataMonth');
  
  var _reportFormBankRoutineDataMonth2 = _interopRequireDefault(_reportFormBankRoutineDataMonth);
  
  //全辖银行业务全量银行数据汇总报表-月
  
  var _reportFormSiteAddDataDay = require('src/js/reducers/admin/reportForm/siteAddDataDay');
  
  var _reportFormSiteAddDataDay2 = _interopRequireDefault(_reportFormSiteAddDataDay);
  
  //全辖站点增量日报（签约、数据、落地情况）-日
  
  var _reportFormSiteAddDataMonth = require('src/js/reducers/admin/reportForm/siteAddDataMonth');
  
  var _reportFormSiteAddDataMonth2 = _interopRequireDefault(_reportFormSiteAddDataMonth);
  
  //全辖站点增量日报（签约、数据、落地情况）-月
  
  var _reportFormSiteSignDataDay = require('src/js/reducers/admin/reportForm/siteSignDataDay');
  
  var _reportFormSiteSignDataDay2 = _interopRequireDefault(_reportFormSiteSignDataDay);
  
  //月新增签约站点明细报表
  
  var _reportFormSiteNewAddDataDay = require('src/js/reducers/admin/reportForm/siteNewAddDataDay');
  
  var _reportFormSiteNewAddDataDay2 = _interopRequireDefault(_reportFormSiteNewAddDataDay);
  
  //月新增数据站点明细报表-日
  
  var _reportFormSiteNewAddDataMonth = require('src/js/reducers/admin/reportForm/siteNewAddDataMonth');
  
  var _reportFormSiteNewAddDataMonth2 = _interopRequireDefault(_reportFormSiteNewAddDataMonth);
  
  //月新增数据站点明细报表-月
  
  var _reportFormSiteNewFinishDataDay = require('src/js/reducers/admin/reportForm/siteNewFinishDataDay');
  
  var _reportFormSiteNewFinishDataDay2 = _interopRequireDefault(_reportFormSiteNewFinishDataDay);
  
  //月新增落地站点明细报表-日
  
  var _reportFormSiteNewFinishDataMonth = require('src/js/reducers/admin/reportForm/siteNewFinishDataMonth');
  
  var _reportFormSiteNewFinishDataMonth2 = _interopRequireDefault(_reportFormSiteNewFinishDataMonth);
  
  //月新增落地站点明细报表-月
  
  var _reportFormBankErrorDataDay = require('src/js/reducers/admin/reportForm/bankErrorDataDay');
  
  var _reportFormBankErrorDataDay2 = _interopRequireDefault(_reportFormBankErrorDataDay);
  
  //全辖银行业务待处理异常数据汇总报表-日
  
  var _reportFormBankErrorDataMonth = require('src/js/reducers/admin/reportForm/bankErrorDataMonth');
  
  var _reportFormBankErrorDataMonth2 = _interopRequireDefault(_reportFormBankErrorDataMonth);
  
  //全辖银行业务待处理异常数据汇总报表-月
  
  var _reportFormSitePatrolAllDataDay = require('src/js/reducers/admin/reportForm/sitePatrolAllDataDay');
  
  var _reportFormSitePatrolAllDataDay2 = _interopRequireDefault(_reportFormSitePatrolAllDataDay);
  
  //月新增数据站点明细报表-日
  
  var _reportFormZeroSiteDataDay = require('src/js/reducers/admin/reportForm/zeroSiteDataDay');
  
  var _reportFormZeroSiteDataDay2 = _interopRequireDefault(_reportFormZeroSiteDataDay);
  
  //双零站点明细报表-月
  
  var _reportFormZeroSiteDataMonth = require('src/js/reducers/admin/reportForm/zeroSiteDataMonth');
  
  var _reportFormZeroSiteDataMonth2 = _interopRequireDefault(_reportFormZeroSiteDataMonth);
  
  //双零站点明细报表-月
  
  var _reportFormSiteDetailsDataDay = require('src/js/reducers/admin/reportForm/siteDetailsDataDay');
  
  var _reportFormSiteDetailsDataDay2 = _interopRequireDefault(_reportFormSiteDetailsDataDay);
  
  //每日站点巡查明细报表
  
  var _reportFormMasterBusinessDataDay = require('src/js/reducers/admin/reportForm/masterBusinessDataDay');
  
  var _reportFormMasterBusinessDataDay2 = _interopRequireDefault(_reportFormMasterBusinessDataDay);
  
  //每日站点巡查明细报表
  
  var _reportFormBankNoMatchDataDay = require('src/js/reducers/admin/reportForm/bankNoMatchDataDay');
  
  var _reportFormBankNoMatchDataDay2 = _interopRequireDefault(_reportFormBankNoMatchDataDay);
  
  //无匹配的银行数据明细报表-日
  
  var _reportFormBankNoMatchDataMonth = require('src/js/reducers/admin/reportForm/bankNoMatchDataMonth');
  
  var _reportFormBankNoMatchDataMonth2 = _interopRequireDefault(_reportFormBankNoMatchDataMonth);
  
  //无匹配的银行数据明细报表-月
  
  var _reportFormBankPauseDataDay = require('src/js/reducers/admin/reportForm/bankPauseDataDay');
  
  var _reportFormBankPauseDataDay2 = _interopRequireDefault(_reportFormBankPauseDataDay);
  
  //银行业务暂停站点明细报表-日
  
  var _reportFormBankPauseDataMonth = require('src/js/reducers/admin/reportForm/bankPauseDataMonth');
  
  var _reportFormBankPauseDataMonth2 = _interopRequireDefault(_reportFormBankPauseDataMonth);
  
  //银行业务暂停站点明细报表-月
  
  var _reportFormBankNoOpenDataDay = require('src/js/reducers/admin/reportForm/bankNoOpenDataDay');
  
  var _reportFormBankNoOpenDataDay2 = _interopRequireDefault(_reportFormBankNoOpenDataDay);
  
  //银行业务未开展站点明细报表-日
  
  var _reportFormBankNoOpenDataMonth = require('src/js/reducers/admin/reportForm/bankNoOpenDataMonth');
  
  var _reportFormBankNoOpenDataMonth2 = _interopRequireDefault(_reportFormBankNoOpenDataMonth);
  
  //银行业务未开展站点明细报表-月
  
  var admin = (0, _redux.combineReducers)({
      login: _login2['default'],
      top: _top2['default'],
      addRole: _rolesAdd2['default'],
      home: _home2['default'],
      user: _user2['default'],
      roles: _rolesRoles2['default'],
      dialog: _dialog2['default'],
      bankAllDataDay: _reportFormBankAllDataDay2['default'],
      bankAllDataMonth: _reportFormBankAllDataMonth2['default'],
      bankRoutineDataDay: _reportFormBankRoutineDataDay2['default'],
      bankRoutineDataMonth: _reportFormBankRoutineDataMonth2['default'],
      siteAddDataDay: _reportFormSiteAddDataDay2['default'],
      reportFormCommon: _reportFormPublicCommon2['default'],
      routing: _reactRouterRedux.routerReducer,
      siteAddDataMonth: _reportFormSiteAddDataMonth2['default'],
      siteSignDataDay: _reportFormSiteSignDataDay2['default'],
      siteNewAddDataDay: _reportFormSiteNewAddDataDay2['default'],
      siteNewAddDataMonth: _reportFormSiteNewAddDataMonth2['default'],
      siteNewFinishDataDay: _reportFormSiteNewFinishDataDay2['default'],
      bankErrorDataDay: _reportFormBankErrorDataDay2['default'],
      bankErrorDataMonth: _reportFormBankErrorDataMonth2['default'],
      siteNewFinishDataMonth: _reportFormSiteNewFinishDataMonth2['default'],
      zeroSiteDataDay: _reportFormZeroSiteDataDay2['default'],
      sitePatrolAllDataDay: _reportFormSitePatrolAllDataDay2['default'],
      zeroSiteDataMonth: _reportFormZeroSiteDataMonth2['default'],
      siteDetailsDataDay: _reportFormSiteDetailsDataDay2['default'],
      masterBusinessDataDay: _reportFormMasterBusinessDataDay2['default'],
      bankNoMatchDataDay: _reportFormBankNoMatchDataDay2['default'],
      bankNoMatchDataMonth: _reportFormBankNoMatchDataMonth2['default'],
      bankPauseDataDay: _reportFormBankPauseDataDay2['default'],
      bankPauseDataMonth: _reportFormBankPauseDataMonth2['default'],
      bankNoOpenDataDay: _reportFormBankNoOpenDataDay2['default'],
      bankNoOpenDataMonth: _reportFormBankNoOpenDataMonth2['default']
  });
  
  exports['default'] = admin;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/index.js.map
  

});
