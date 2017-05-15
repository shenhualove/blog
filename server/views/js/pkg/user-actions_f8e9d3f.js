;/*!/src/js/actions/user/index.js*/
define('src/js/actions/user/index', function(require, exports, module) {

  /**
   * Created by apple on 17/4/19.
   *
   * 首页
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.indexHandle = indexHandle;
  exports.getNav = getNav;
  exports.getStudyLink = getStudyLink;
  exports.getFriendLink = getFriendLink;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  var _utilsCommonFetch = require('src/js/utils/common/fetch');
  
  var _utilsCommonFetch2 = _interopRequireDefault(_utilsCommonFetch);
  
  function indexHandle(type, data) {
      return {
          type: type,
          data: data
      };
  }
  
  //获取导航
  
  function getNav() {
      return function (dispatch) {
          (0, _utilsCommonFetch2["default"])({
              url: "columnList",
              success: function success(data) {
                  if (data.code === 200000) {
                      data.list.splice(3, 0, {}); //增加一个空对象方便输出LOGO排版
                      dispatch(indexHandle("GET_NAV", data.list));
                      dispatch(indexHandle("SHOW_VIEW", true));
                  }
              }
          });
      };
  }
  
  //获取文档链接
  
  function getStudyLink() {
      return function (dispatch) {
          (0, _utilsCommonFetch2["default"])({
              url: "studyLinks",
              success: function success(data) {
                  if (data.code === 200000 && data.list.length > 0) {
                      dispatch(indexHandle("GET_STUDY_LINKS", data.list));
                  }
              }
          });
      };
  }
  
  //获取友情链接
  
  function getFriendLink() {
      return function (dispatch) {
          (0, _utilsCommonFetch2["default"])({
              url: "friendLinks",
              success: function success(data) {
                  if (data.code === 200000 && data.list.length > 0) {
                      dispatch(indexHandle("GET_FRIEND_LINKS", data.list));
                  }
              }
          });
      };
  }
  //# sourceMappingURL=/js/actions/user/index.js.map
  

});

;/*!/src/js/actions/user/home.js*/
define('src/js/actions/user/home', function(require, exports, module) {

  /**
   * Created by shenhua on 2017/4/22.
   *
   * 首页最新文章
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.homeHandle = homeHandle;
  exports.getNew = getNew;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  var _utilsCommonFetch = require('src/js/utils/common/fetch');
  
  var _utilsCommonFetch2 = _interopRequireDefault(_utilsCommonFetch);
  
  function homeHandle(type, data) {
      return {
          type: type,
          data: data
      };
  }
  
  //获取新闻
  
  function getNew(page, pageSize) {
      return function (dispatch) {
          (0, _utilsCommonFetch2["default"])({
              url: "newPush",
              data: {
                  page: page,
                  pageSize: pageSize
              },
              success: function success(data) {
                  if (data.code === 200000 && data.list.length > 0) {
                      dispatch(homeHandle("GET_NEW", data.list));
                  }
              }
          });
      };
  }
  //# sourceMappingURL=/js/actions/user/home.js.map
  

});

;/*!/src/js/actions/user/list.js*/
define('src/js/actions/user/list', function(require, exports, module) {

  /**
   * Created by shenhua on 2017/4/22.
   *
   * 列表页面
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.listHandle = listHandle;
  exports.getList = getList;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  var _utilsCommonFetch = require('src/js/utils/common/fetch');
  
  var _utilsCommonFetch2 = _interopRequireDefault(_utilsCommonFetch);
  
  function listHandle(type, data) {
      return {
          type: type,
          data: data
      };
  }
  
  //获取列表数据
  
  function getList(id, page, pageSize) {
      return function (dispatch) {
          (0, _utilsCommonFetch2["default"])({
              url: "list",
              data: {
                  columnId: id,
                  page: page,
                  pageSize: pageSize
              },
              success: function success(data) {
                  if (data.code === 200000 && data.list.length > 0) {
                      dispatch(listHandle("GET_LIST", data.list));
                  }
              }
          });
      };
  }
  //# sourceMappingURL=/js/actions/user/list.js.map
  

});

;/*!/src/js/actions/user/page.js*/
define('src/js/actions/user/page', function(require, exports, module) {

  /**
   * Created by shenhua on 2017/4/22.
   *
   * 文章详情页
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  exports.pageHandle = pageHandle;
  exports.getPage = getPage;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _utilsCommonFetch = require('src/js/utils/common/fetch');
  
  var _utilsCommonFetch2 = _interopRequireDefault(_utilsCommonFetch);
  
  var _index = require('src/js/actions/user/index');
  
  function pageHandle(type, data) {
      return {
          type: type,
          data: data
      };
  }
  
  //获取内容
  
  function getPage(id) {
      return function (dispatch) {
          (0, _utilsCommonFetch2['default'])({
              url: "page",
              data: {
                  id: id
              },
              success: function success(data) {
                  if (data.code === 200000 && data.list.length > 0) {
                      dispatch((0, _index.indexHandle)("GET_NAV_ID", data.list[0].columnId));
                      dispatch(pageHandle("GET_PAGE", data.list));
                  }
              }
          });
      };
  }
  //# sourceMappingURL=/js/actions/user/page.js.map
  

});
