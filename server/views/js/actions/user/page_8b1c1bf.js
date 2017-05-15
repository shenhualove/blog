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
