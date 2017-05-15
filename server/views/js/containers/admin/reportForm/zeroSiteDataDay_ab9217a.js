define('src/js/containers/admin/reportForm/zeroSiteDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 双零站点明细报表-日
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
  
  var _actionsReportFormZeroSiteDataDay = require('../../actions/reportForm/zeroSiteDataDay');
  
  var _componentsPublicSelectBox = require('../../components/public/selectBox');
  
  var _componentsPublicSelectBox2 = _interopRequireDefault(_componentsPublicSelectBox);
  
  var _componentsPublicReportFormTable = require('../../components/public/reportFormTable');
  
  var _componentsPublicReportFormTable2 = _interopRequireDefault(_componentsPublicReportFormTable);
  
  var _componentsReportFormExportButton = require('../../components/reportForm/exportButton');
  
  var _componentsReportFormExportButton2 = _interopRequireDefault(_componentsReportFormExportButton);
  
  var zeroSiteDataDayMain = (function (_React$Component) {
      _inherits(zeroSiteDataDayMain, _React$Component);
  
      function zeroSiteDataDayMain() {
          _classCallCheck(this, zeroSiteDataDayMain);
  
          _get(Object.getPrototypeOf(zeroSiteDataDayMain.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(zeroSiteDataDayMain, [{
          key: 'selectClick',
          value: function selectClick(id, val, name) {
              switch (id) {
                  case 1:
                      this.props._zeroSiteDataDayHandle({
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
                              reportName: "doublezeronodeDetail"
                          });
                      }
  
                      break;
                  case 2:
                      this.props._zeroSiteDataDayHandle({
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
                              reportName: "doublezeronodeDetail"
                          });
                      }
  
                      break;
                  case 3:
                      this.props._zeroSiteDataDayHandle({
                          county: { val: val, name: name }
                      });
                      break;
                  case 4:
                      this.props._zeroSiteDataDayHandle({
                          bank: val
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
          key: 'pageNavClick',
          value: function pageNavClick(curPage, pageSize, options) {
              this.getData(curPage, pageSize, options ? options : this.props.zeroSiteDataDay.temp_options);
          }
  
          //请求数据
      }, {
          key: 'getData',
          value: function getData(curPage, pageSize, options) {
              this.props._zeroSiteDataDayHandle({
                  curPage: curPage,
                  pageSize: pageSize
              });
              this.props._zeroSiteDataDayLoad({
                  curPage: curPage,
                  pageSize: pageSize,
                  reportDate: options.selectDate,
                  reportType: 0,
                  provinceName: options.province.name == '全部' ? '' : options.province.name,
                  cityName: options.city.name == '全部' ? '' : options.city.name,
                  countyName: options.county.name == '全部' ? '' : options.county.name,
                  bankTypeCode: options.bank == '全部' ? '' : options.bank
              });
          }
  
          //重置数据
      }, {
          key: 'resetData',
          value: function resetData(bool) {
              if (bool === true) {
                  var options = {
                      selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
                      province: { val: '', name: '' }, //选中的省
                      city: { val: '', name: '' }, //选中的城市
                      county: { val: '', name: '' }, //选中的县
                      bank: "" };
                  //选中的银行
                  //初次进入页面，所有参数初始化
                  this.props._zeroSiteDataDayHandle({
                      selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
                      province: { val: '', name: '' }, //选中的省
                      city: { val: '', name: '' }, //选中的城市
                      county: { val: '', name: '' }, //选中的县
                      bank: "", //选中的银行
                      temp_options: options
                  });
                  //进入页面发起默认请求加载数据
                  this.pageNavClick(1, 10, options);
              } else {
                  //页面未离开，用户正常重置查询条件
                  this.props._zeroSiteDataDayHandle({
                      selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
                      province: { val: '', name: '' }, //选中的省
                      city: { val: '', name: '' }, //选中的城市
                      county: { val: '', name: '' }, //选中的县
                      bank: "" });
              }
              //选中的银行
              this.selectClick(1, '', '');
          }
  
          //查询数据
      }, {
          key: 'submitClick',
          value: function submitClick() {
              if (this.props.zeroSiteDataDay.status == 'loading') {
                  this.props._dialogHandle({
                      type: "tips",
                      time: 2000,
                      content: "正在查询中，请耐心等待！",
                      tipsType: "warning",
                      show: true
                  });
              } else {
                  var options = {
                      selectDate: this.props.zeroSiteDataDay.selectDate, //默认日期
                      province: this.props.zeroSiteDataDay.province, //选中的省
                      city: this.props.zeroSiteDataDay.city, //选中的城市
                      county: this.props.zeroSiteDataDay.county, //选中的县
                      bank: this.props.zeroSiteDataDay.bank };
                  //选中的银行
                  this.props._zeroSiteDataDayHandle({
                      temp_options: options
                  });
                  this.getData(1, this.props.zeroSiteDataDay.pageSize, options);
              }
          }
  
          //导出报表
      }, {
          key: 'exportExcel',
          value: function exportExcel() {
              var options = this.props.zeroSiteDataDay.temp_options;
              this.props._zeroSiteDataDayExport({
                  reportType: 0,
                  reportDate: options.selectDate,
                  provinceName: options.province.name == '全部' ? '' : options.province.name,
                  cityName: options.city.name == '全部' ? '' : options.city.name,
                  countyName: options.county.name == '全部' ? '' : options.county.name,
                  bankTypeCode: options.bank == '全部' ? '' : options.bank
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
                          _that.props._zeroSiteDataDayHandle({
                              selectDate: date
                          });
                      }
                  });
              });
              this.props._queryProvince({ reportName: "doublezeronodeDetail" });
              this.props._getBankTypeCodes({ reportName: "doublezeronodeDetail" });
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'height100p' },
                  _react2['default'].createElement(_componentsPublicCenterTopNav2['default'], { title: '双零站点明细日报', parentList: [{ name: "数据报表" }, { name: "银行业务日报" }] }),
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
                                  _react2['default'].createElement('input', { type: 'text', readOnly: true, id: 'datepicker', value: this.props.zeroSiteDataDay.selectDate })
                              ),
                              _react2['default'].createElement(
                                  'li',
                                  null,
                                  _react2['default'].createElement(
                                      'span',
                                      null,
                                      '省份:'
                                  ),
                                  _react2['default'].createElement(_componentsPublicSelectBox2['default'], {
                                      callBack: this.selectClick.bind(this, 1),
                                      value: this.props.zeroSiteDataDay.province.val,
                                      list: this.showProvince()
                                  })
                              ),
                              _react2['default'].createElement(
                                  'li',
                                  null,
                                  _react2['default'].createElement(
                                      'span',
                                      null,
                                      '市:'
                                  ),
                                  _react2['default'].createElement(_componentsPublicSelectBox2['default'], {
                                      callBack: this.selectClick.bind(this, 2),
                                      value: this.props.zeroSiteDataDay.city.val,
                                      list: this.showCity()
                                  })
                              ),
                              _react2['default'].createElement(
                                  'li',
                                  null,
                                  _react2['default'].createElement(
                                      'span',
                                      null,
                                      '区县:'
                                  ),
                                  _react2['default'].createElement(_componentsPublicSelectBox2['default'], {
                                      callBack: this.selectClick.bind(this, 3),
                                      value: this.props.zeroSiteDataDay.county.val,
                                      list: this.showCounty()
                                  })
                              )
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
                                      value: this.props.zeroSiteDataDay.bank,
                                      list: this.showBank()
                                  })
                              )
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
                                  data: this.props.login.Jurisdiction.ReportForm.btns.zeroSiteDataDay,
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
                              _react2['default'].createElement(_componentsPublicReportFormTable2['default'], { colspan: 14, status: this.props.zeroSiteDataDay.status, dataList: this.props.zeroSiteDataDay.listData, titleList: this.props.zeroSiteDataDay.titleList })
                          ),
                          _react2['default'].createElement(_componentsPublicPagination2['default'], {
                              curPage: this.props.zeroSiteDataDay.curPage,
                              totalNumber: this.props.zeroSiteDataDay.totalSize,
                              pageLimt: this.props.zeroSiteDataDay.pageSize,
                              pageClick: this.pageNavClick.bind(this)
                          })
                      )
                  )
              );
          }
      }]);
  
      return zeroSiteDataDayMain;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
      return state;
  }
  
  function mapDispatchToProps(dispatch) {
      return {
          _zeroSiteDataDayHandle: function _zeroSiteDataDayHandle(options) {
              dispatch((0, _actionsReportFormZeroSiteDataDay.zeroSiteDataDayHandle)(options));
          },
          _zeroSiteDataDayLoad: function _zeroSiteDataDayLoad(options) {
              dispatch((0, _actionsReportFormZeroSiteDataDay.zeroSiteDataDayLoad)(options));
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
          _zeroSiteDataDayExport: function _zeroSiteDataDayExport(options) {
              dispatch((0, _actionsReportFormZeroSiteDataDay.zeroSiteDataDayExport)(options));
          }
      };
  }
  
  var zeroSiteDataDay = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(zeroSiteDataDayMain);
  
  exports['default'] = zeroSiteDataDay;
  module.exports = exports['default'];
  /*form content begin*/ /*form content end*/ /*content begin*/ /*content end*/
  //# sourceMappingURL=/js/containers/admin/reportForm/zeroSiteDataDay.js.map
  

});
