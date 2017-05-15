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
