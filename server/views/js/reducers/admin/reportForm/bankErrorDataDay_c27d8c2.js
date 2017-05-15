define('src/js/reducers/admin/reportForm/bankErrorDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/27.
   *
   * 全辖银行业务待处理异常数据汇总报表-日
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  //初始化state
  var moment = require("../../untils/moment");
  var initalize = sessionStorage.getItem('bankErrorDataDayState') ? JSON.parse(sessionStorage.getItem('bankErrorDataDayState')) : {
      selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
      province: { val: '', name: '' }, //选中的省
      bank: "", //选中的银行
      listData: [], //数据列表
      curPage: 1, //默认为当前第一页
      pageSize: 10, //默认显示多少条
      totalSize: 0, //总条数
      temp_options: {
          selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
          province: { val: '', name: '' }, //选中的省
          bank: "" //选中的银行
      }, //临时存放请求数据的选项条件
      status: "loading", //默认请求加载中
      titleList: [{ title: "省份", type: "provinceName" }, { title: "合作银行", type: "bankTypeCode" }, { title: "双零站点数", addClass: ["text-r"], type: "double0NodeCount", format: "number" }, { title: "无匹配站点数", addClass: ["text-r"], type: "nomatchNodeCount", format: "number" }, { title: "银行业务未开展站点数", addClass: ["text-r"], type: "bankbizstopNodeCount", format: "number" }, { title: "银行业务暂停站点数", addClass: ["text-r"], type: "bankbizpauseNodeCount", format: "number" }, { title: "导入时间", type: "importDate" }],
      totalData: {}, //合计数据
      showTotal: false, //是否显示合计，只有在最后一页设置为true才显示合计
      totalTitle: [{}, { type: "sumDouble0NodeCount", format: "number" }, { type: "sumNomatchNodeCount", format: "number" }, { type: "sumBankbizstopNodeCount", format: "number" }, { type: "sumBankbizpauseNodeCount", format: "number" }, {}] //合计字段 从第二位开始
  };
  
  function bankErrorDataDay(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "BANKERRORDATADAY_HANDLE":
              sessionStorage.setItem("bankErrorDataDayState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = bankErrorDataDay;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/bankErrorDataDay.js.map
  

});
