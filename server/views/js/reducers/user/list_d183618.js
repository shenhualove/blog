define('src/js/reducers/user/list', function(require, exports, module) {

  /**
   * Created by shenhua on 2017/4/22.
   *
   * 列表页面
   */
  //初始化STATE
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  var initialize = {
      title: "", //标题
      listData: [], //文章数据
      page: 1, //当前页
      pageSize: 8 //每页加载条数
  };
  
  function list(state, action) {
      if (state === undefined) state = initialize;
  
      switch (action.type) {
          case "GET_TITLE":
              return Object.assign({}, state, { title: action.data });
          case "GET_LIST":
              return Object.assign({}, state, { listData: action.data });
          default:
              return state;
      }
  }
  
  exports["default"] = list;
  module.exports = exports["default"];
  //# sourceMappingURL=/js/reducers/user/list.js.map
  

});
