define('src/js/reducers/user/home', function(require, exports, module) {

  /**
   * Created by shenhua on 2017/4/22.
   *
   * 首页列表数据
   */
  //初始化STATE
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  var initialize = {
      listData: [], //文章数据
      page: 1, //当前页
      pageSize: 8 //每页加载条数
  };
  
  function home(state, action) {
      if (state === undefined) state = initialize;
  
      switch (action.type) {
          case "GET_NEW":
              return Object.assign({}, state, { listData: action.data });
          default:
              return state;
      }
  }
  
  exports["default"] = home;
  module.exports = exports["default"];
  //# sourceMappingURL=/js/reducers/user/home.js.map
  

});
