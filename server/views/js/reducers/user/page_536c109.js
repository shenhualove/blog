define('src/js/reducers/user/page', function(require, exports, module) {

  /**
   * Created by shenhua on 2017/4/22.
   *
   * 文章详情页面
   */
  //初始化STATE
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  var initialize = {
      data: {} };
  
  //文章数据
  function page(state, action) {
      if (state === undefined) state = initialize;
  
      switch (action.type) {
          case "GET_PAGE":
              return Object.assign({}, state, { data: action.data });
          default:
              return state;
      }
  }
  
  exports["default"] = page;
  module.exports = exports["default"];
  //# sourceMappingURL=/js/reducers/user/page.js.map
  

});
