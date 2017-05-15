define('src/js/containers/admin/reportForm/bankAllDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 全辖银行业务常规数据汇总报表-日
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
  
  var _componentsPublicPagination = require('../../components/public/pagination');
  
  var _componentsPublicPagination2 = _interopRequireDefault(_componentsPublicPagination);
  
  var _actionsDialog = require('../../actions/dialog');
  
  var _actionsReportFormPublicCommon = require('../../actions/reportForm/public/common');
  
  var _actionsReportFormBankAllDataDay = require('../../actions/reportForm/bankAllDataDay');
  
  var _componentsPublicSelectBox = require('../../components/public/selectBox');
  
  var _componentsPublicSelectBox2 = _interopRequireDefault(_componentsPublicSelectBox);
  
  var _componentsPublicReportFormTable = require('../../components/public/reportFormTable');
  
  var _componentsPublicReportFormTable2 = _interopRequireDefault(_componentsPublicReportFormTable);
  
  var _componentsReportFormRegional = require('../../components/reportForm/regional');
  
  var _componentsReportFormRegional2 = _interopRequireDefault(_componentsReportFormRegional);
  
  var _componentsReportFormExportButton = require('../../components/reportForm/exportButton');
  
  var _componentsReportFormExportButton2 = _interopRequireDefault(_componentsReportFormExportButton);
  
  var _componentsReportFormViewSummary = require('../../components/reportForm/viewSummary');
  
  var _componentsReportFormViewSummary2 = _interopRequireDefault(_componentsReportFormViewSummary);
  
  var bankAllDataDayMain = (function (_React$Component) {
      _inherits(bankAllDataDayMain, _React$Component);
  
      function bankAllDataDayMain() {
          _classCallCheck(this, bankAllDataDayMain);
  
          _get(Object.getPrototypeOf(bankAllDataDayMain.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(bankAllDataDayMain, [{
          key: 'selectClick',
          value: function selectClick(id, val, name) {
              switch (id) {
                  case 1:
                      this.props._bankAllDataDayHandle({
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
                              reportName: "bankbizRoutine"
                          });
                      }
  
                      break;
                  case 2:
                      this.props._bankAllDataDayHandle({
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
                              reportName: "bankbizRoutine"
                          });
                      }
  
                      break;
                  case 3:
                      this.props._bankAllDataDayHandle({
                          county: { val: val, name: name }
                      });
                      break;
                  case 4:
                      this.props._bankAllDataDayHandle({
                          bank: val
                      });
                      break;
                  case 5:
                      this.props._bankAllDataDayHandle({
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
      }, {
          key: 'pageNavClick',
          value: function pageNavClick(curPage, pageSize, options) {
  
              if (curPage == Math.ceil(this.props.bankAllDataDay.totalSize / pageSize)) {
                  //当前是最后一页
                  this.props._bankAllDataDayHandle({
                      showTotal: true
                  });
              } else {
                  this.props._bankAllDataDayHandle({
                      showTotal: false
                  });
              }
              this.getData(curPage, pageSize, options ? options : this.props.bankAllDataDay.temp_options);
          }
  
          //请求数据
      }, {
          key: 'getData',
          value: function getData(curPage, pageSize, options) {
              this.props._bankAllDataDayHandle({
                  curPage: curPage,
                  pageSize: pageSize
              });
  
              this.props._bankAllDataDayLoad({
                  curPage: curPage,
                  pageSize: pageSize,
                  reportDate: options.selectDate,
                  reportType: 0,
                  provinceName: options.province.name == '全部' ? '' : options.province.name,
                  cityName: options.city.name == '全部' ? '' : options.city.name,
                  countyName: options.county.name == '全部' ? '' : options.county.name,
                  bankTypeCode: options.bank == '全部' ? '' : options.bank,
                  groupByClause: options.summary
              });
          }
  
          //重置数据
      }, {
          key: 'resetData',
          value: function resetData(bool) {
              var summary = this.checkIsCity() ? 2 : 1;
              if (bool === true) {
                  var options = {
                      selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
                      province: { val: '', name: '' }, //选中的省
                      city: { val: '', name: '' }, //选中的城市
                      county: { val: '', name: '' }, //选中的县
                      bank: "", //选中的银行
                      summary: summary
                  };
                  //初次进入页面，所有参数初始化
                  this.props._bankAllDataDayHandle({
                      selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
                      province: { val: '', name: '' }, //选中的省
                      city: { val: '', name: '' }, //选中的城市
                      county: { val: '', name: '' }, //选中的县
                      bank: "", //选中的银行
                      summary: summary,
                      temp_options: options
                  });
                  //进入页面发起默认请求加载数据
                  this.pageNavClick(1, 10, options);
              } else {
                  //页面未离开，用户正常重置查询条件
                  this.props._bankAllDataDayHandle({
                      selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
                      province: { val: '', name: '' }, //选中的省
                      city: { val: '', name: '' }, //选中的城市
                      county: { val: '', name: '' }, //选中的县
                      bank: "", //选中的银行
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
  
          //查询数据
      }, {
          key: 'submitClick',
          value: function submitClick() {
              if (this.props.bankAllDataDay.status == 'loading') {
                  this.props._dialogHandle({
                      type: "tips",
                      time: 2000,
                      content: "正在查询中，请耐心等待！",
                      tipsType: "warning",
                      show: true
                  });
              } else {
                  var options = {
                      selectDate: this.props.bankAllDataDay.selectDate, //默认日期
                      province: this.props.bankAllDataDay.province, //选中的省
                      city: this.props.bankAllDataDay.city, //选中的城市
                      county: this.props.bankAllDataDay.county, //选中的县
                      bank: this.props.bankAllDataDay.bank, //选中的银行
                      summary: this.props.bankAllDataDay.summary
                  };
                  this.props._bankAllDataDayHandle({
                      temp_options: options
                  });
                  this.getData(1, this.props.bankAllDataDay.pageSize, options);
              }
          }
  
          //导出报表
      }, {
          key: 'exportExcel',
          value: function exportExcel() {
              var options = this.props.bankAllDataDay.temp_options;
              this.props._bankAllDataDayExport({
                  reportType: 0,
                  reportDate: options.selectDate,
                  provinceName: options.province.name == '全部' ? '' : options.province.name,
                  cityName: options.city.name == '全部' ? '' : options.city.name,
                  countyName: options.county.name == '全部' ? '' : options.county.name,
                  bankTypeCode: options.bank == '全部' ? '' : options.bank,
                  groupByClause: options.summary
              });
          }
      }, {
          key: 'componentDidMount',
          value: function componentDidMount() {
              this.resetData(true);
              var _that = this;
              $(function () {
                  $("#datepicker").datepicker({
                      maxDate: -1,
                      dateFormat: "yy-mm-dd",
                      changeYear: true, // 年下拉菜单
                      changeMonth: true, // 月下拉菜单
                      onSelect: function onSelect(date) {
                          _that.props._bankAllDataDayHandle({
                              selectDate: date
                          });
                      }
                  });
              });
              this.props._queryProvince({
                  reportName: "bankbizRoutine"
              });
              this.props._getBankTypeCodes({
                  reportName: "bankbizRoutine"
              });
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'height100p' },
                  _react2['default'].createElement(_componentsPublicCenterTopNav2['default'], { title: '全辖银行业务常规数据汇总日报', parentList: [{ name: "数据报表" }, { name: "银行业务日报" }] }),
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
                                  _react2['default'].createElement('input', { type: 'text', readOnly: true, id: 'datepicker', value: this.props.bankAllDataDay.selectDate })
                              ),
                              _react2['default'].createElement(_componentsReportFormRegional2['default'], {
                                  selectClick: this.selectClick.bind(this),
                                  provinceVal: this.props.bankAllDataDay.province.val,
                                  cityVal: this.props.bankAllDataDay.city.val,
                                  countyVal: this.props.bankAllDataDay.county.val,
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
                                      value: this.props.bankAllDataDay.bank,
                                      list: this.showBank()
                                  })
                              ),
                              _react2['default'].createElement(_componentsReportFormViewSummary2['default'], {
                                  selectClick: this.selectClick.bind(this),
                                  value: this.props.bankAllDataDay.summary,
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
                                      { onClick: this.submitClick.bind(this) },
                                      '查询'
                                  ),
                                  _react2['default'].createElement(
                                      'button',
                                      { onClick: this.resetData.bind(this) },
                                      '重置'
                                  )
                              ),
                              _react2['default'].createElement(_componentsReportFormExportButton2['default'], {
                                  data: this.props.login.Jurisdiction.ReportForm.btns.bankAllDataDay,
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
                              _react2['default'].createElement(_componentsPublicReportFormTable2['default'], { width: '140%', colspan: 16,
                                  showTotal: this.props.bankAllDataDay.showTotal,
                                  status: this.props.bankAllDataDay.status,
                                  totalData: this.props.bankAllDataDay.totalData,
                                  totalTitle: this.props.bankAllDataDay.totalTitle,
                                  dataList: this.props.bankAllDataDay.listData,
                                  titleList: this.props.bankAllDataDay.titleList })
                          ),
                          _react2['default'].createElement(_componentsPublicPagination2['default'], {
                              curPage: this.props.bankAllDataDay.curPage,
                              totalNumber: this.props.bankAllDataDay.totalSize,
                              pageLimt: this.props.bankAllDataDay.pageSize,
                              pageClick: this.pageNavClick.bind(this)
                          })
                      )
                  )
              );
          }
      }]);
  
      return bankAllDataDayMain;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
      return state;
  }
  
  function mapDispatchToProps(dispatch) {
      return {
          _bankAllDataDayHandle: function _bankAllDataDayHandle(options) {
              dispatch((0, _actionsReportFormBankAllDataDay.bankAllDataDayHandle)(options));
          },
          _bankAllDataDayLoad: function _bankAllDataDayLoad(options) {
              dispatch((0, _actionsReportFormBankAllDataDay.bankAllDataDayLoad)(options));
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
          _reportFormCommonHandle: function _reportFormCommonHandle(options) {
              dispatch((0, _actionsReportFormPublicCommon.reportFormCommonHandle)(options));
          },
          _dialogHandle: function _dialogHandle(options) {
              dispatch((0, _actionsDialog.dialogHandle)(options));
          },
          _bankAllDataDayExport: function _bankAllDataDayExport(options) {
              dispatch((0, _actionsReportFormBankAllDataDay.bankAllDataDayExport)(options));
          }
      };
  }
  
  var bankAllDataDay = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(bankAllDataDayMain);
  
  exports['default'] = bankAllDataDay;
  module.exports = exports['default'];
  /*form content begin*/ /*form content end*/ /*content begin*/ /*content end*/
  //# sourceMappingURL=/js/containers/admin/reportForm/bankAllDataDay.js.map
  

});
