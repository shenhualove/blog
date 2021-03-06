define('src/js/containers/user/page', function(require, exports, module) {

  /**
   * Created by shenhua
   *
   * 内容页
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = require('node_modules/react-redux/lib/index');
  
  var _actionsUserPage = require('src/js/actions/user/page');
  
  var actions = _interopRequireWildcard(_actionsUserPage);
  
  var PageMain = (function (_React$Component) {
      _inherits(PageMain, _React$Component);
  
      function PageMain() {
          _classCallCheck(this, PageMain);
  
          _get(Object.getPrototypeOf(PageMain.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(PageMain, [{
          key: 'getData',
          value: function getData() {
              //获取数据
              if (this.props.page.data.length > 0) {
                  return this.props.page.data.map(function (val, key) {
                      return _react2['default'].createElement(
                          'div',
                          { className: 'page-content' },
                          _react2['default'].createElement(
                              'header',
                              null,
                              _react2['default'].createElement(
                                  'h1',
                                  { className: 'article-title' },
                                  val.title
                              ),
                              _react2['default'].createElement(
                                  'div',
                                  { className: 'meta' },
                                  _react2['default'].createElement(
                                      'span',
                                      { className: 'muted' },
                                      _react2['default'].createElement('i', { className: 'fa fa-user' }),
                                      ' ',
                                      val.author
                                  ),
                                  _react2['default'].createElement(
                                      'span',
                                      { className: 'muted' },
                                      _react2['default'].createElement('i', { className: 'fa fa-clock-o' }),
                                      ' ',
                                      val.time
                                  ),
                                  _react2['default'].createElement(
                                      'span',
                                      { className: 'muted' },
                                      _react2['default'].createElement('i', { className: 'fa fa-eye' }),
                                      ' ',
                                      val.totalViews,
                                      '浏览'
                                  )
                              )
                          ),
                          _react2['default'].createElement(
                              'article',
                              { className: 'article-content' },
                              _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: val.content } })
                          ),
                          _react2['default'].createElement('div', { className: 'article-talk' })
                      );
                  });
              } else {
                  return _react2['default'].createElement(
                      'div',
                      { className: 'page-content' },
                      _react2['default'].createElement(
                          'article',
                          { className: 'article-content' },
                          '暂无数据'
                      )
                  );
              }
          }
      }, {
          key: 'componentDidMount',
          value: function componentDidMount() {
              this.props._getPage(this.props.params.id);
          }
          //组件加载后
  
      }, {
          key: 'render',
          value: function render() {
  
              return _react2['default'].createElement(
                  'div',
                  { className: 'content-left' },
                  this.getData()
              );
          }
      }]);
  
      return PageMain;
  })(_react2['default'].Component);
  
  var mapStateToProps = function mapStateToProps(state) {
      return state;
  };
  
  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
      return {
          _getPage: function _getPage(id) {
              dispatch(actions.getPage(id));
          }
      };
  };
  
  var Page = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PageMain);
  
  exports['default'] = Page;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/containers/user/page.js.map
  

});
