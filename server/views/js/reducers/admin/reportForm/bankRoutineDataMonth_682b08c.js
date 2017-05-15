define('src/js/reducers/admin/reportForm/bankRoutineDataMonth', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/27.
   *
   * 全辖银行业务全量银行数据汇总报表-月
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
  var initalize = sessionStorage.getItem('bankRoutineDataMonthState') ? JSON.parse(sessionStorage.getItem('bankRoutineDataMonthState')) : {
      selectDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
      province: { val: '', name: '' }, //选中的省
      bank: "", //选中的银行
      listData: [], //数据列表
      curPage: 1, //默认为当前第一页
      pageSize: 10, //默认显示多少条
      totalSize: 0, //总条数
      temp_options: {
          selectDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
          province: { val: '', name: '' }, //选中的省
          bank: "" //选中的银行
      }, //临时存放请求数据的选项条件
      status: "loading", //默认请求加载中
      titleList: [{ title: "省份", type: "provinceName" }, { title: "合作银行", type: "bankTypeCode" }, { title: "助农点数量", addClass: ["text-r"], type: "helpNodeCount", format: "number" }, { title: "站点数量", addClass: ["text-r"], type: "nodeCount", format: "number" }, { title: "开卡数量", addClass: ["text-r"], type: "cardCount", format: "number" }, { title: "时点余额（万元）", addClass: ["text-r"], type: "balance", format: "money" }, { title: "导入时间", type: "importDate" }],
      totalData: {}, //合计数据
      showTotal: false, //是否显示合计，只有在最后一页设置为true才显示合计
      totalTitle: [{}, { type: "sumHelpNodeCount", format: "number" }, { type: "sumNodeCount", format: "number" }, { type: "sumCardCount", format: "number" }, { type: "sumBalance", format: "money" }, {}] //合计字段 从第二位开始
  };
  
  function bankRoutineDataMonth(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "BANKROUTINEDATAMONTH_HANDLE":
              sessionStorage.setItem("bankRoutineDataMonthState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = bankRoutineDataMonth;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/bankRoutineDataMonth.js.map
  

});
