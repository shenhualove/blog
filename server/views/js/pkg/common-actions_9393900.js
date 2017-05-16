;/*!/src/js/actions/common/index.js*/
define('src/js/actions/common/index', function(require, exports, module) {

  /**
   * Created by apple on 17/4/19.
   */
  //通用action
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.handle = handle;
  
  function handle(type, data) {
      return {
          type: type,
          data: data
      };
  }
  //# sourceMappingURL=/js/actions/common/index.js.map
  

});
