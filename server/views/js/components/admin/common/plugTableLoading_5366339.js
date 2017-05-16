define('src/js/components/admin/common/plugTableLoading', function(require, exports, module) {

  /**
   * Created by ex-wangxin on 2017/4/20.
   *
   * 例子：<PlugTableLoading status={_that.props.customerInfoLoanQuery.tbodyList} colSpanCount='7' classNameEnter=""/>;
   * status ajax 加载状态   loading 加载中  success加载成功  fail 加载失败  nothing暂无数据
   * colSpanCount 合并列数
   * classNameEnter 传入的class 名称    可为空
   *
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
  
  var PlugTableLoading = (function (_React$Component) {
      _inherits(PlugTableLoading, _React$Component);
  
      function PlugTableLoading() {
          _classCallCheck(this, PlugTableLoading);
  
          _get(Object.getPrototypeOf(PlugTableLoading.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(PlugTableLoading, [{
          key: 'creatInnerHtml',
          value: function creatInnerHtml(status) {
              var innerHtml = [];
              //loading 加载中  success加载成功  fail 加载失败  nothing暂无数据
              if (status == 'loading') {
                  innerHtml.push(_react2['default'].createElement(
                      'td',
                      { key: '0', colSpan: this.props.colSpanCount },
                      _react2['default'].createElement('span', null)
                  ));
              } else if (status == 'fail') {
                  innerHtml.push(_react2['default'].createElement(
                      'td',
                      { key: '0', className: 'fail-color', colSpan: this.props.colSpanCount },
                      '数据请求失败'
                  ));
              } else if (status == 'nothing') {
                  innerHtml.push(_react2['default'].createElement(
                      'td',
                      { key: '0', className: 'fail-color', colSpan: this.props.colSpanCount },
                      '暂无数据'
                  ));
              }
              return innerHtml;
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'tr',
                  { className: 'plug-table-loading ' + this.props.classNameEnter },
                  this.creatInnerHtml(this.props.status)
              );
          }
      }]);
  
      return PlugTableLoading;
  })(_react2['default'].Component);
  
  exports['default'] = PlugTableLoading;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/components/admin/common/plugTableLoading.js.map
  

});
