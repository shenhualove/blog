define('src/js/containers/admin/article/list', function(require, exports, module) {

  /**
   * Created by apple on 17/5/16.
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
  
  var _actionsReportFormBankAllDataDay = require('../../actions/reportForm/bankAllDataDay');
  
  var _componentsPublicSelectBox = require('../../components/public/selectBox');
  
  var _componentsPublicSelectBox2 = _interopRequireDefault(_componentsPublicSelectBox);
  
  var _componentsPublicReportFormTable = require('../../components/public/reportFormTable');
  
  var _componentsPublicReportFormTable2 = _interopRequireDefault(_componentsPublicReportFormTable);
  
  var List = (function (_React$Component) {
      _inherits(List, _React$Component);
  
      function List() {
          _classCallCheck(this, List);
  
          _get(Object.getPrototypeOf(List.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(List, [{
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
                              _react2['default'].createElement(Regional, {
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
                              _react2['default'].createElement(ViewSummary, {
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
                              _react2['default'].createElement(ExportButton, {
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
  
      return List;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
      return state;
  }
  
  function mapDispatchToProps(dispatch) {
      return {};
  }
  
  var articleList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(List);
  
  exports['default'] = articleList;
  module.exports = exports['default'];
  /*form content begin*/ /*form content end*/ /*content begin*/ /*content end*/
  //# sourceMappingURL=/js/containers/admin/article/list.js.map
  

});
