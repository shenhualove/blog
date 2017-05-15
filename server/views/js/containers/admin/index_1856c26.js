define('src/js/containers/admin/index', function(require, exports, module) {

  /**
   * Created by apple on 17/3/30.
   *
   * 网站首页，根据用户是否登录来加载登录页面还是主页
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
  
  var _login = require('src/js/containers/admin/login/index');
  
  var _login2 = _interopRequireDefault(_login);
  
  var _publicTop = require('src/js/containers/admin/public/top');
  
  var _publicTop2 = _interopRequireDefault(_publicTop);
  
  var _publicDialog = require('src/js/containers/admin/public/dialog');
  
  var _publicDialog2 = _interopRequireDefault(_publicDialog);
  
  var Index = (function (_React$Component) {
      _inherits(Index, _React$Component);
  
      function Index() {
          _classCallCheck(this, Index);
  
          _get(Object.getPrototypeOf(Index.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(Index, [{
          key: 'render',
          value: function render() {
              if (!this.props.login.isLogin) {
                  return _react2['default'].createElement(
                      'div',
                      { className: 'h100' },
                      _react2['default'].createElement(_login2['default'], null),
                      _react2['default'].createElement(_publicDialog2['default'], null)
                  );
              } else {
                  return _react2['default'].createElement(
                      'div',
                      { className: 'h100' },
                      _react2['default'].createElement(_publicTop2['default'], null),
                      _react2['default'].createElement(
                          'div',
                          { className: 'contioner' },
                          _react2['default'].createElement(
                              'div',
                              { className: 'center-content' },
                              _react2['default'].createElement(
                                  'div',
                                  { className: 'show-content' },
                                  this.props.children
                              )
                          )
                      ),
                      _react2['default'].createElement(_publicDialog2['default'], null)
                  );
              }
          }
      }]);
  
      return Index;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
      return state;
  }
  
  function mapDispatchToProps(dispatch) {
      return {};
  }
  
  var IndexMain = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Index);
  
  exports['default'] = IndexMain;
  module.exports = exports['default'];
  /*Main*/
  //# sourceMappingURL=/js/containers/admin/index.js.map
  

});
