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
      titleList: [{ title: "栏目名称", type: "title" }, { title: "栏目关键字", type: "keyWord" }, { title: "栏目说明", type: "caption" }, { title: "栏目排序", type: "sort" }, { title: "添加时间", type: "time" }, { title: "操作", htmlType: [{ type: "button", text: "修改", callBack: null }, { type: "button", text: "删除", callBack: null }] }]
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
