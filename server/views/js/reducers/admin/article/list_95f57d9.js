define('src/js/reducers/admin/article/list', function(require, exports, module) {

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
      titleList: [{ title: "文章名称", type: "title" }, { title: "所属栏目", type: "keyWord" }, { title: "缩略图", type: "caption" }, { title: "作者", type: "sort" }, { title: "", type: "time" }, { title: "操作", htmlType: [{ type: "button", text: "修改", callBack: null }, { type: "button", text: "删除", callBack: null }] }]
  };
  
  function columnList(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
          case "COLUMN_LIST_HANDLE":
              return Object.assign({}, state, action.data);
          default:
              return state;
      }
  }
  
  exports["default"] = columnList;
  module.exports = exports["default"];
  //# sourceMappingURL=/js/reducers/admin/article/list.js.map
  

});
