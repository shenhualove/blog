define('src/js/reducers/admin/article/list', function(require, exports, module) {

  /**
   * Created by apple on 17/5/16.
   */
  //初始化state
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  var initalize = {
      selectDate: '', //选择日期
      columnId: '', //选择栏目
      title: "", //文章标题
      temp_options: {
          selectDate: '', //选择日期
          columnId: '', //选择栏目
          title: "" }, //文章标题
      //临时搜索条件
      listData: [], //数据列表
      curPage: 1, //默认为当前第一页
      pageSize: 10, //默认显示多少条
      totalSize: 0, //总条数
      status: "loading", //默认请求加载中
      titleList: [{ title: "文章名称", type: "title" }, { title: "所属栏目", type: "columnName" }, { title: "缩略图", type: "imgUrl" }, { title: "文章作者", type: "author" }, { title: "文章来源", type: "source" }, { title: "浏览次数", type: "totalViews" }, { title: "添加时间", type: "time" }, { title: "操作", htmlType: [{ type: "button", text: "修改", callBack: null }, { type: "button", text: "删除", callBack: null }] }]
  };
  
  function articleList(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
          case "ARTICLE_LIST_HANDLE":
              return Object.assign({}, state, action.data);
          default:
              return state;
      }
  }
  
  exports['default'] = articleList;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/article/list.js.map
  

});
