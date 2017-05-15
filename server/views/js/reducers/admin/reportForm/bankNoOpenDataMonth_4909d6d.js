define('src/js/reducers/admin/reportForm/bankNoOpenDataMonth', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 银行业务未开展站点明细报表-月
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
  var initalize = sessionStorage.getItem('bankNoOpenDataMonthState') ? JSON.parse(sessionStorage.getItem('bankNoOpenDataMonthState')) : {
      selectDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
      province: { val: '', name: '' }, //选中的省
      city: { val: '', name: '' }, //选中的城市
      county: { val: '', name: '' }, //选中的县
      bank: "", //选中的银行
      listData: [], //数据列表
      curPage: 1, //默认为当前第一页
      pageSize: 10, //默认显示多少条
      totalSize: 0, //总条数
      temp_options: {
          selectDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
          province: { val: '', name: '' }, //选中的省
          city: { val: '', name: '' }, //选中的城市
          county: { val: '', name: '' }, //选中的县
          bank: "" //选中的银行
      }, //临时存放请求数据的选项条件
      status: "loading", //默认请求加载中
      titleList: [{ title: "省份", type: "provinceName" }, { title: "市", type: "cityName" }, { title: "区县", type: "countyName" }, { title: "合作银行", type: "bankTypeCode" }, { title: "市场部", type: "companyName" }, { title: "站点编码", type: "nodeCode" }, { title: "站点名称", type: "nodeName" }, { title: "站长姓名", type: "nodeManagerName" }, { title: "站长手机号", type: "nodeManagerPhone" }, { title: "站点状态", type: "operationStatus" }, { title: "银行业务状态", type: "bankStatus" }, { title: "签银时间", type: "bankSignupDate" }]
  };
  
  function bankNoOpenDataMonth(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "BANKNOOPENDATAMONTH_HANDLE":
              sessionStorage.setItem("bankNoOpenDataMonthState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = bankNoOpenDataMonth;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/bankNoOpenDataMonth.js.map
  

});
