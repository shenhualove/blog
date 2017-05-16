define('src/js/reducers/admin/column/list', function(require, exports, module) {

  /**
   * Created by apple on 17/5/16.
   */
  //初始化state
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  var initalize = sessionStorage.getItem('bankAllDataDayState') ? JSON.parse(sessionStorage.getItem('bankAllDataDayState')) : {
      selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
      province: { val: '', name: '' }, //选中的省
      city: { val: '', name: '' }, //选中的城市
      county: { val: '', name: '' }, //选中的县
      bank: "", //选中的银行
      summary: 1, //选中的汇总,默认为省
      listData: [], //数据列表
      curPage: 1, //默认为当前第一页
      pageSize: 10, //默认显示多少条
      totalSize: 0, //总条数
      temp_options: {
          selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
          province: { val: '', name: '' }, //选中的省
          city: { val: '', name: '' }, //选中的城市
          county: { val: '', name: '' }, //选中的县
          summary: 1, //选中的汇总
          bank: "" //选中的银行
      }, //临时存放请求数据的选项条件
      status: "loading", //默认请求加载中
      titleList: [{ title: "省份", type: "provinceName", rowspan: "2" }, { title: "市", type: "cityName", rowspan: "2" }, { title: "区县", type: "countyName", rowspan: "2" }, { title: "合作银行", type: "bankTypeCode", rowspan: "2" }, { title: "当日新增站点数", addClass: ["text-r"], type: "dAddNodeCount", parent: "已加盟已签银站点", colspan: 4, format: "number" }, { title: "当月新增站点数", addClass: ["text-r"], type: "mAddNodeCount", parent: "已加盟已签银站点", colspan: 4, format: "number" }, { title: "当年累计新增", addClass: ["text-r"], type: "yCumulateaddCount", parent: "已加盟已签银站点", colspan: 4, format: "number" }, { title: "站点总数", addClass: ["text-r"], type: "regularNodeCount", parent: "已加盟已签银站点", colspan: 4, format: "number" }, { title: "站点总数", addClass: ["text-r"], type: "datanodeCount", parent: "数据站点", colspan: 7, format: "number" }, { title: "站点平均卡数", addClass: ["text-r"], type: "datanodeAvgCardCount", parent: "数据站点", colspan: 7, format: "number" }, { title: "当月新增卡数", addClass: ["text-r"], type: "mAddCardCount", parent: "数据站点", colspan: 7, format: "number" }, { title: "卡数", addClass: ["text-r"], type: "cardCount", parent: "数据站点", colspan: 7, format: "number" }, { title: "站点平均余额（万元）", addClass: ["text-r"], type: "datanodeAvgBalance", parent: "数据站点", colspan: 7, format: "money" }, { title: "当月新增存款（万元）", addClass: ["text-r"], type: "mAddDeposit", parent: "数据站点", colspan: 7, format: "money" }, { title: "时点余额（亿元）", addClass: ["text-r"], type: "currentBalance", parent: "数据站点", colspan: 7, format: "money" }, { title: "导入时间", type: "importDate", rowspan: "2" }],
      totalData: {}, //合计数据
      showTotal: false, //是否显示合计，只有在最后一页设置为true才显示合计
      totalTitle: [{}, {}, {}, { type: "sumDAddNodeCount", format: "number" }, { type: "sumMAddNodeCount", format: "number" }, { type: "sumYCumulateaddCount", format: "number" }, { type: "sumRegularNodeCount", format: "number" }, { type: "sumDatanodeCount", format: "number" }, { type: "sumDatanodeAvgCardCount", format: "number" }, { type: "sumMAddCardCount", format: "number" }, { type: "sumCardCount", format: "number" }, { type: "sumDatanodeAvgBalance", format: "money" }, { type: "sumMAddDeposit", format: "money" }, { type: "sumCurrentBalance", format: "money" }, {}] //合计字段 从第二位开始
  };
  
  function bankAllDataDay(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "BANKALLDATADAY_HANDLE":
              sessionStorage.setItem("bankAllDataDayState", JSON.stringify(objectAssign({}, state, action.options)));
              return objectAssign({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = columnList;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/column/list.js.map
  

});
