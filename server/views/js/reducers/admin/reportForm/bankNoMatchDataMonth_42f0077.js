define('src/js/reducers/admin/reportForm/bankNoMatchDataMonth', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 无匹配的银行数据明细报表-月
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
  var initalize = sessionStorage.getItem('bankNoMatchDataMonthState') ? JSON.parse(sessionStorage.getItem('bankNoMatchDataMonthState')) : {
      selectDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
      province: { val: '', name: '' }, //选中的省
      bank: "", //选中的银行
      listData: [], //数据列表
      curPage: 1, //默认为当前第一页
      pageSize: 10, //默认显示多少条
      totalSize: 0, //总条数
      status: "loading", //默认请求加载中
      temp_options: {
          selectDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
          province: { val: '', name: '' }, //选中的省
          bank: "" //选中的银行
      }, //临时存放请求数据的选项条件
      titleList: [{ title: "省份", type: "provinceName" }, { title: "导入批次号", type: "batchNo" }, { title: "本次数据时间", type: "importDate" }, { title: "合作银行", type: "bankTypeCode" }, { title: "助农点编码", type: "helpNodeCode" }, { title: "助农点名称", type: "helpNodeName" }, { title: "分行编码", type: "branchNo" }, { title: "分行名称", type: "branchName" }, { title: "支行编码", type: "subbranchNo" }, { title: "支行名称", type: "subbranchName" }, { title: "卡数", addClass: ["text-r"], type: "cardCount", format: "number" }, { title: "时点余额", addClass: ["text-r"], type: "balance", format: "money" }]
  };
  
  function bankNoMatchDataMonth(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "BANKNOMATCHDATAMONTH_HANDLE":
              sessionStorage.setItem("bankNoMatchDataMonthState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = bankNoMatchDataMonth;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/bankNoMatchDataMonth.js.map
  

});
