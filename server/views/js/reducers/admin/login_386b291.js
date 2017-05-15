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
