define('src/js/reducers/admin/login', function(require, exports, module) {

  /**
   * Created by shenhua
   *
   * 登录模块
   */
  //初始化state
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  var initalize = {
      account: {}, //用户信息
      isLogin: false, //是否登录
      userName: "", //登录名
      passWord: "", //登录密码
      verificationCode: "", //验证码
      errorShow: false, //是否展示错误信息
      errorMsg: "", //错误信息
      loginHash: true };
  
  //登录按钮防重提交
  function login(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
          case "LOGIN_HANDLE":
              return Object.assign({}, state, action.data);
          case "LOGIN_SUCCESS":
              return Object.assign({}, state, { account: action.data, isLogin: true });
          default:
              return state;
      }
  }
  
  exports["default"] = login;
  module.exports = exports["default"];
  //# sourceMappingURL=/js/reducers/admin/login.js.map
  

});
