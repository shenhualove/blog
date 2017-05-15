define('src/js/containers/admin/reportForm/sitePatrolAllDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 每日站点巡查汇总报表-日
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = require('node_modules/react-redux/lib/index');
  
  var _componentsPublicCenterTopNav = require('../../components/public/centerTopNav');
  
  var _componentsPublicCenterTopNav2 = _interopRequireDefault(_componentsPublicCenterTopNav);
  
  var _reactRouter = require('node_modules/react-router/lib/index');
  
  var _componentsPublicPagination = require('../../components/public/pagination');
  
  var _componentsPublicPagination2 = _interopRequireDefault(_componentsPublicPagination);
  
  var _actionsDialog = require('../../actions/dialog');
  
  var _componentsPublicSelectBox = require('../../components/public/selectBox');
  
  var _componentsPublicSelectBox2 = _interopRequireDefault(_componentsPublicSelectBox);
  
  var _componentsPublicReportFormTable = require('../../components/public/reportFormTable');
  
  var _componentsPublicReportFormTable2 = _interopRequireDefault(_componentsPublicReportFormTable);
  
  var _actionsReportFormPublicCommon = require('../../actions/reportForm/public/common');
  
  var _actionsReportFormSitePatrolAllDataDay = require('../../actions/reportForm/sitePatrolAllDataDay');
  
  var _componentsReportFormRegional = require('../../components/reportForm/regional');
  
  var _componentsReportFormRegional2 = _interopRequireDefault(_componentsReportFormRegional);
  
  var _componentsReportFormExportButton = require('../../components/reportForm/exportButton');
  
  var _componentsReportFormExportButton2 = _interopRequireDefault(_componentsReportFormExportButton);
  
  var _componentsReportFormViewSummary = require('../../components/reportForm/viewSummary');
  
  var _componentsReportFormViewSummary2 = _interopRequireDefault(_componentsReportFormViewSummary);
  
  var sitePatrolAllDataDayMain = (function (_React$Component) {
      _inherits(sitePatrolAllDataDayMain, _React$Component);
  
      function sitePatrolAllDataDayMain() {
          _classCallCheck(this, sitePatrolAllDataDayMain);
  
          _get(Object.getPrototypeOf(sitePatrolAllDataDayMain.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(sitePatrolAllDataDayMain, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
              this.resetFun(true);
              var _that = this;
              $(function () {
                  $("#datepicker").datepicker({
                      dateFormat: 'yy-mm-dd',
                      maxDate: -1,
                      changeYear: true, // 年下拉菜单
                      changeMonth: true, // 月下拉菜单
                      onSelect: function onSelect(date) {
                          _that.props._sitePatrolAllDataDayHandle({
                              reportDate: date
                          });
                      }
                  });
              });
  
              this.props._queryProvince({
                  reportName: "nodeinspectsummaryDaily"
              });
              this.props._getBankTypeCodes({
                  reportName: "nodeinspectsummaryDaily"
              });
              this.props._getCompanyByCompanyType();
          }
  
          //加载分页插件
      }, {
          key: 'loadPage',
          value: function loadPage(options) {
              this.props._sitePatrolAllDataDayHandle({
                  loadPageFlag: false
              });
              this.pageNavClick(1, 10, options);
          }
  
          //调用分页加载
      }, {
          key: 'pageNavClick',
          value: function pageNavClick(n, pageSize, options) {
              this.props._sitePatrolAllDataDayHandle({
                  curPage: n,
                  pageLimit: pageSize
              });
              if (n == Math.ceil(this.props.sitePatrolAllDataDay.totalSize / pageSize)) {
                  //当前是最后一页
                  this.props._sitePatrolAllDataDayHandle({
                      showTotal: true
                  });
              } else {
                  this.props._sitePatrolAllDataDayHandle({
                      showTotal: false
                  });
              }
              this.loadData(n, pageSize, options ? options : this.props.sitePatrolAllDataDay.temp_options);
          }
  
          //加载数据
      }, {
          key: 'loadData',
          value: function loadData(n, pageSize, options) {
              //加载中
              this.props._sitePatrolAllDataDayHandle({
                  curPage: n,
                  pageLimit: pageSize
              });
  
              var ajaxData = {
                  curPage: n, //当前页
                  pageSize: pageSize, //每页多少行
                  reportDate: options.reportDate, //数据日期
                  provinceName: options.province.name == "全部" ? "" : options.province.name, //省
                  cityName: options.city.name == "全部" ? "" : options.city.name, //市
                  countyName: options.county.name == "全部" ? "" : options.county.name, //区县
                  bankTypeCode: options.bank, //银行code
                  groupByClause: options.summary
              };
              this.props._sitePatrolAllDataDayLoadData({
                  data: ajaxData
              });
          }
  
          //省份
      }, {
          key: 'selectClick',
          value: function selectClick(id, val, name) {
              switch (id) {
                  case 1:
                      this.props._sitePatrolAllDataDayHandle({
                          province: { val: val, name: name },
                          city: { val: '', name: '' }, //选中的城市
                          county: { val: '', name: '' } //选中的县
                      });
  
                      if (val == '') {
                          //用户选择全部的情况
  
                          //重置市县区
                          this.props._reportFormCommonHandle({
                              cityList: [],
                              countyList: []
                          });
                      } else {
                          //重置县区
                          this.props._reportFormCommonHandle({
                              countyList: []
                          });
                          //更新城市数据
                          this.props._queryCity({
                              provinceCode: val,
                              reportName: "nodeinspectsummaryDaily"
                          });
                      }
  
                      break;
                  case 2:
                      this.props._sitePatrolAllDataDayHandle({
                          city: { val: val, name: name },
                          county: { val: '', name: '' } //选中的县
                      });
                      if (val == '') {
                          //用户选择全部的情况
  
                          //重置县区
                          this.props._reportFormCommonHandle({
                              countyList: []
                          });
                      } else {
                          //更新县区数据
                          this.props._queryCounty({
                              cityCode: val,
                              reportName: "nodeinspectsummaryDaily"
                          });
                      }
  
                      break;
                  case 3:
                      this.props._sitePatrolAllDataDayHandle({
                          county: { val: val, name: name }
                      });
                      break;
                  case 4:
                      this.props._sitePatrolAllDataDayHandle({
                          bank: val
                      });
                      break;
                  case 5:
                      this.props._sitePatrolAllDataDayHandle({
                          summary: val
                      });
                      break;
                  default:
                      break;
              }
          }
      }, {
          key: 'showProvince',
          value: function showProvince() {
              var arr = [{ value: "", name: "全部" }];
              var temp_arr = [];
              this.props.reportFormCommon.provinceList.map(function (val, key) {
                  temp_arr.push({ value: val.districtCode, name: val.districtName });
              });
              return arr.concat(temp_arr);
          }
      }, {
          key: 'showCity',
          value: function showCity() {
              var arr = [{ value: "", name: "全部" }];
              var temp_arr = [];
              this.props.reportFormCommon.cityList.map(function (val, key) {
                  temp_arr.push({ value: val.districtCode, name: val.cityName });
              });
              return arr.concat(temp_arr);
          }
      }, {
          key: 'showCounty',
          value: function showCounty() {
              var arr = [{ value: "", name: "全部" }];
              var temp_arr = [];
              this.props.reportFormCommon.countyList.map(function (val, key) {
                  temp_arr.push({ value: val.districtCode, name: val.countyName });
              });
              return arr.concat(temp_arr);
          }
      }, {
          key: 'showBank',
          value: function showBank() {
              var arr = [{ value: "", name: "全部" }];
              var temp_arr = [];
              this.props.reportFormCommon.bankList.map(function (val, key) {
                  temp_arr.push({ value: val.bankTypeCode, name: val.bankTypeName });
              });
              return arr.concat(temp_arr);
          }
      }, {
          key: 'showSummary',
          value: function showSummary() {
              var temp_arr = [{ value: 1, name: "省级" }, { value: 2, name: "市级" }, { value: 3, name: "县级" }];
              if (this.checkIsCity()) {
                  temp_arr = [{ value: 2, name: "市级" }, { value: 3, name: "县级" }];
              }
              return temp_arr;
          }
  
          //查询
      }, {
          key: 'queryData',
          value: function queryData() {
              if (this.props.sitePatrolAllDataDay.tbodyList == 'loading') {
                  this.props._dialogHandle({
                      type: "tips",
                      time: 2000,
                      content: "正在查询中，请耐心等待！",
                      tipsType: "warning",
                      show: true
                  });
              } else {
                  var siteNumCheck = $.XlCheck({
                      val: this.props.sitePatrolAllDataDay.siteNum,
                      rule: ["Number"]
                  });
                  if (!siteNumCheck.Number) {
                      this.props._dialogHandle({
                          show: true,
                          content: '站点编号只能输入数字',
                          type: "tips",
                          tipsType: "warning"
                      });
                      return false;
                  }
  
                  var options = {
                      reportDate: this.props.sitePatrolAllDataDay.reportDate, //数据日期
                      province: this.props.sitePatrolAllDataDay.province, //选中的省
                      city: this.props.sitePatrolAllDataDay.city, //选中的城市
                      county: this.props.sitePatrolAllDataDay.county, //选中的县
                      bank: this.props.sitePatrolAllDataDay.bank, //银行code
                      summary: this.props.sitePatrolAllDataDay.summary
                  };
                  this.props._sitePatrolAllDataDayHandle({
                      tbodyList: 'loading',
                      temp_options: options
                  });
                  this.loadData(1, this.props.sitePatrolAllDataDay.pageLimit, options);
              }
          }
  
          //重置
      }, {
          key: 'resetFun',
          value: function resetFun(bool) {
              var summary = this.checkIsCity() ? 2 : 1;
              if (bool === true) {
                  var options = {
                      reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
                      province: { val: "", name: "" }, //省
                      city: { val: "", name: "" }, //市
                      county: { val: "", name: "" }, //区县   
                      bank: "", //银行code
                      summary: summary
                  };
                  //初次进入页面，所有参数初始化
                  this.props._sitePatrolAllDataDayHandle({
                      reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
                      province: { val: "", name: "" }, //省
                      city: { val: "", name: "" }, //市
                      county: { val: "", name: "" }, //区县   
                      bank: "", //银行code
                      summary: summary,
                      temp_options: options
                  });
                  //进入页面发起默认请求加载数据
                  this.loadPage(options);
              } else {
                  this.props._sitePatrolAllDataDayHandle({
                      reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
                      province: { val: "", name: "" }, //省
                      city: { val: "", name: "" }, //市
                      county: { val: "", name: "" }, //区县   
                      bank: "", //银行code
                      summary: summary
                  });
              }
              this.selectClick(1, '', '');
          }
  
          //是否是市长
      }, {
          key: 'checkIsCity',
          value: function checkIsCity() {
              if (this.props.login.employ.title == 'CITY') {
                  return true;
              } else {
                  return false;
              }
          }
  
          //导出报表
      }, {
          key: 'exportExcel',
          value: function exportExcel() {
              var options = this.props.sitePatrolAllDataDay.temp_options;
              this.props._sitePatrolAllDataDayExport({
                  reportDate: options.reportDate, //数据日期
                  provinceName: options.province.name == "全部" ? "" : options.province.name, //省
                  cityName: options.city.name == "全部" ? "" : options.city.name, //市
                  countyName: options.county.name == "全部" ? "" : options.county.name, //区县
                  bankTypeCode: options.bank, //银行code
                  groupByClause: options.summary });
          }
      }, {
          key: 'render',
          //归属层级
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'height100p' },
                  _react2['default'].createElement(_componentsPublicCenterTopNav2['default'], { title: '每日站点巡查汇总报表', parentList: [{ name: "数据报表" }, { name: "巡查日报" }] }),
                  _react2['default'].createElement(
                      'div',
                      { className: 'height100pY plr26' },
                      _react2['default'].createElement(
                          'div',
                          { className: 'pub-form-top clearfix' },
                          _react2['default'].createElement(
                              'ul',
                              null,
                              _react2['default'].createElement(
                                  'li',
                                  null,
                                  _react2['default'].createElement(
                                      'span',
                                      null,
                                      '数据日期:'
                                  ),
                                  _react2['default'].createElement('input', { id: 'datepicker', type: 'text', value: this.props.sitePatrolAllDataDay.reportDate, readOnly: true })
                              ),
                              _react2['default'].createElement(_componentsReportFormRegional2['default'], {
                                  selectClick: this.selectClick.bind(this),
                                  provinceVal: this.props.sitePatrolAllDataDay.province.val,
                                  cityVal: this.props.sitePatrolAllDataDay.city.val,
                                  countyVal: this.props.sitePatrolAllDataDay.county.val,
                                  provinceList: this.showProvince(),
                                  cityList: this.showCity(),
                                  countyList: this.showCounty()
                              })
                          ),
                          _react2['default'].createElement(
                              'ul',
                              null,
                              _react2['default'].createElement(
                                  'li',
                                  null,
                                  _react2['default'].createElement(
                                      'span',
                                      null,
                                      '合作银行:'
                                  ),
                                  _react2['default'].createElement(_componentsPublicSelectBox2['default'], {
                                      callBack: this.selectClick.bind(this, 4),
                                      value: this.props.sitePatrolAllDataDay.bank,
                                      list: this.showBank()
                                  })
                              ),
                              _react2['default'].createElement(_componentsReportFormViewSummary2['default'], {
                                  selectClick: this.selectClick.bind(this),
                                  value: this.props.sitePatrolAllDataDay.summary,
                                  list: this.showSummary()
                              })
                          ),
                          _react2['default'].createElement(
                              'div',
                              { className: 'pub-form-btns clearfix' },
                              _react2['default'].createElement(
                                  'div',
                                  { className: 'left' },
                                  _react2['default'].createElement(
                                      'button',
                                      { onClick: this.queryData.bind(this) },
                                      '查询'
                                  ),
                                  _react2['default'].createElement(
                                      'button',
                                      { onClick: this.resetFun.bind(this) },
                                      '重置'
                                  )
                              ),
                              _react2['default'].createElement(_componentsReportFormExportButton2['default'], {
                                  data: this.props.login.Jurisdiction.ReportForm.btns.sitePatrolAllDataDay,
                                  clickBack: this.exportExcel.bind(this)
                              })
                          )
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'form-content-wrap' },
                          _react2['default'].createElement(
                              'div',
                              { className: 'form-table-wrap' },
                              _react2['default'].createElement(_componentsPublicReportFormTable2['default'], {
                                  showTotal: this.props.sitePatrolAllDataDay.showTotal,
                                  totalData: this.props.sitePatrolAllDataDay.totalData,
                                  totalTitle: this.props.sitePatrolAllDataDay.totalTitle,
                                  dataList: this.props.sitePatrolAllDataDay.tableList,
                                  titleList: this.props.sitePatrolAllDataDay.tableTitle,
                                  colspan: 13,
                                  status: this.props.sitePatrolAllDataDay.tbodyList
                              })
                          ),
                          _react2['default'].createElement(_componentsPublicPagination2['default'], {
                              curPage: this.props.sitePatrolAllDataDay.curPage,
                              totalNumber: this.props.sitePatrolAllDataDay.totalSize,
                              pageLimt: this.props.sitePatrolAllDataDay.pageLimit,
                              pageClick: this.pageNavClick.bind(this)
                          })
                      )
                  )
              );
          }
      }]);
  
      return sitePatrolAllDataDayMain;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
      return state;
  }
  function mapDispatchToProps(dispatch) {
      return {
          _sitePatrolAllDataDayHandle: function _sitePatrolAllDataDayHandle(options) {
              dispatch((0, _actionsReportFormSitePatrolAllDataDay.sitePatrolAllDataDayHandle)(options));
          },
          _sitePatrolAllDataDayLoadData: function _sitePatrolAllDataDayLoadData(options) {
              dispatch((0, _actionsReportFormSitePatrolAllDataDay.sitePatrolAllDataDayLoadData)(options));
          },
          _queryProvince: function _queryProvince(options) {
              dispatch((0, _actionsReportFormPublicCommon.queryProvince)(options));
          },
          _queryCity: function _queryCity(options) {
              dispatch((0, _actionsReportFormPublicCommon.queryCity)(options));
          },
          _queryCounty: function _queryCounty(options) {
              dispatch((0, _actionsReportFormPublicCommon.queryCounty)(options));
          },
          _getBankTypeCodes: function _getBankTypeCodes(options) {
              dispatch((0, _actionsReportFormPublicCommon.getBankTypeCodes)(options));
          },
          _getCompanyByCompanyType: function _getCompanyByCompanyType(options) {
              dispatch((0, _actionsReportFormPublicCommon.getCompanyByCompanyType)(options));
          },
          _reportFormCommonHandle: function _reportFormCommonHandle(options) {
              dispatch((0, _actionsReportFormPublicCommon.reportFormCommonHandle)(options));
          },
          _dialogHandle: function _dialogHandle(options) {
              dispatch((0, _actionsDialog.dialogHandle)(options));
          },
          _sitePatrolAllDataDayExport: function _sitePatrolAllDataDayExport(options) {
              dispatch((0, _actionsReportFormSitePatrolAllDataDay.sitePatrolAllDataDayExport)(options));
          }
  
      };
  }
  var sitePatrolAllDataDay = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(sitePatrolAllDataDayMain);
  
  exports['default'] = sitePatrolAllDataDay;
  module.exports = exports['default'];
  /*form content begin*/ /*form content end*/ /*content begin*/ /*content end*/
  //# sourceMappingURL=/js/containers/admin/reportForm/sitePatrolAllDataDay.js.map
  

});
