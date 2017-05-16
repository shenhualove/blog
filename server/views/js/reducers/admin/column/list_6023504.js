define('src/js/reducers/admin/column/list', function(require, exports, module) {

  /**
   * Created by apple on 17/5/16.
   */
  //初始化state
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  var initalize = {
      listData: [], //数据列表
      curPage: 1, //默认为当前第一页
      pageSize: 10, //默认显示多少条
      totalSize: 0, //总条数
      status: "loading", //默认请求加载中
      titleList: [{ title: "栏目名称", type: "provinceName" }, { title: "栏目关键字", type: "provinceName" }, { title: "栏目说明", type: "provinceName" }, { title: "栏目", type: "provinceName" }, { title: "栏目名称", type: "provinceName" }, { title: "栏目名称", type: "provinceName" }]
  };
  
  function bankAllDataDay(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "BANKALLDATADAY_HANDLE":
              return objectAssign({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports["default"] = columnList;
  module.exports = exports["default"];
  //# sourceMappingURL=/js/reducers/admin/column/list.js.map
  

});
