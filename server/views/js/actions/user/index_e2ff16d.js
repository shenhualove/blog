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
