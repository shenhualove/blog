define('src/js/components/admin/reportForm/regional', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/5/3.
   *
   * 根据权限来展示地区选项
   *
   * 如果是员工，则不能查看任何选项，如果是市长，只能查看市，县，省长和其他职位则是全部都能看到省市区县
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
  
  var _publicSelectBox = require('src/js/components/admin/public/selectBox');
  
  var _publicSelectBox2 = _interopRequireDefault(_publicSelectBox);
  
  var Regional = (function (_React$Component) {
      _inherits(Regional, _React$Component);
  
      function Regional() {
          _classCallCheck(this, Regional);
  
          _get(Object.getPrototypeOf(Regional.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(Regional, [{
          key: 'getHtml',
          value: function getHtml() {
              var html = [];
              switch (this.props.identity) {
  
                  //省长以及以上，还有没职位的都可以看到所有选项
                  default:
                      html.push(_react2['default'].createElement(
                          'li',
                          { key: 'provinceList' },
                          _react2['default'].createElement(
                              'span',
                              null,
                              '省份:'
                          ),
                          _react2['default'].createElement(_publicSelectBox2['default'], {
                              callBack: this.props.selectClick.bind(this, 1),
                              value: this.props.provinceVal,
                              list: this.props.provinceList
                          })
                      ));
                      html.push(_react2['default'].createElement(
                          'li',
                          { key: 'cityList' },
                          _react2['default'].createElement(
                              'span',
                              null,
                              '市:'
                          ),
                          _react2['default'].createElement(_publicSelectBox2['default'], {
                              callBack: this.props.selectClick.bind(this, 2),
                              value: this.props.cityVal,
                              list: this.props.cityList
                          })
                      ));
                      html.push(_react2['default'].createElement(
                          'li',
                          { key: 'countyList' },
                          _react2['default'].createElement(
                              'span',
                              null,
                              '区县:'
                          ),
                          _react2['default'].createElement(_publicSelectBox2['default'], {
                              callBack: this.props.selectClick.bind(this, 3),
                              value: this.props.countyVal,
                              list: this.props.countyList
                          })
                      ));
                      break;
              }
              return html;
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  null,
                  this.getHtml()
              );
          }
      }]);
  
      return Regional;
  })(_react2['default'].Component);
  
  exports['default'] = Regional;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/components/admin/reportForm/regional.js.map
  

});
