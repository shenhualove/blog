define('src/js/reducers/admin/top', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/1.
   *
   * 顶部模块
   */
  //初始化state
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  var initalize = {};
  
  function top(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
          case "TOP_HANDLE":
              return Object.assign({}, state, action.options);
          default:
              return state;
      }
  }
  
  exports["default"] = top;
  module.exports = exports["default"];
  //# sourceMappingURL=/js/reducers/admin/top.js.map
  

});
