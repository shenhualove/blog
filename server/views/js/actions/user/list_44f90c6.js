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
