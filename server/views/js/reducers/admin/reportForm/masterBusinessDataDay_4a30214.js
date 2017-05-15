define('src/js/reducers/admin/reportForm/masterBusinessDataDay', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/26.
   *
   * 站长交易录入明细报表-日
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  var moment = require("../../untils/moment");
  
  var initalize = sessionStorage.getItem('masterBusinessDataDayState') ? JSON.parse(sessionStorage.getItem('masterBusinessDataDayState')) : {
  	pageLimit: 10, //每页加载10条
  	loadPageFlag: true, //加载分页标识  true:加载  false:不加载
  	curPage: 1, //当前页
  	totalSize: 0, //总数据条数
  	reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
  	province: { val: '', name: '' }, //选中的省
  	city: { val: '', name: '' }, //选中的城市
  	county: { val: '', name: '' }, //选中的县
  	department: { val: '', name: '' }, //部门code
  	bank: "", //银行code
  	siteName: "", //站点名称
  	siteNum: "", //站点编号
  	siteLable: "", //站点标签
  	temp_options: {
  		reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
  		province: { val: '', name: '' }, //选中的省
  		city: { val: '', name: '' }, //选中的城市
  		county: { val: '', name: '' }, //选中的县
  		department: { val: '', name: '' }, //部门code
  		bank: "", //银行code
  		siteName: "", //站点名称
  		siteNum: "", //站点编号
  		siteLable: "" }, //站点标签
  	//ajax提交请求数据的选项条件
  	tableList: [], //table list
  	tableTitle: [{ title: "省份", type: "provinceName" }, { title: "市", type: "cityName" }, { title: "区县", type: "countyName" }, { title: "市场部", type: "companyName" }, { title: "站点编号", type: "nodeCode" }, { title: "站点名称", type: "nodeName" }, { title: "站点状态", type: "operationStatus" }, { title: "合作银行", type: "bankTypeCode" }, { title: "银行业务状态", type: "bankStatus" }, { title: "站点标签", type: "nodeLabel" }, { title: "当日转入（笔）", type: "dTransferMoneyAmount", format: "number" }, { title: "当日转入金额（元）", type: "dTransferMoney", format: "money" }, { title: "当日转出（笔）", type: "dRolloutMoneyAmount", format: "number" }, { title: "当日转出金额（元）", type: "dRolloutMoney", format: "money" }, { title: "本月转入笔数", type: "mTransferMoneyAmount", format: "number" }, { title: "本月转入金额（元）", type: "mTransferMoneyMoney", format: "money" }, { title: "本月转出笔数", type: "mRolloutMoneyAmount", format: "number" }, { title: "本月转出金额（元）", type: "mRolloutMoneyMoney", format: "money" }], //table 表头及对应字段
  	tbodyList: 'loading' };
  
  //table
  
  function masterBusinessDataDay(state, action) {
  	if (state === undefined) state = initalize;
  
  	switch (action.type) {
  		case "MASTERBUSINESSDARADAY_HANDLE":
  			sessionStorage.setItem("masterBusinessDataDayState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
  			return (0, _objectAssign2['default'])({}, state, action.options);
  
  		default:
  			return state;
  	}
  }
  exports['default'] = masterBusinessDataDay;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/masterBusinessDataDay.js.map
  

});
