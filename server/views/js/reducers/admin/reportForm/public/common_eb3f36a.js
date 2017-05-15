define('src/js/reducers/admin/reportForm/public/common', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/25.
   *
   * 报表公用reducers
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  //初始化state
  var initalize = sessionStorage.getItem('reportFormCommonState') ? JSON.parse(sessionStorage.getItem('reportFormCommonState')) : {
      provinceList: [], //省列表
      cityList: [], //城市列表
      countyList: [], //县列表
      bankList: [], //银行列表
      companyList: [], //部门列表
      nodeLableList: [] //站点标签列表
  };
  
  function reportFormCommon(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "REPORT_FORM_COMMON_HANDLE":
              sessionStorage.setItem("reportFormCommonState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = reportFormCommon;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/public/common.js.map
  

});
