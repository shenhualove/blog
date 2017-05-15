define('src/js/containers/user/home', function(require, exports, module) {

  /**
   * Created by shenhua on 16/10/27.
   *
   * 首页
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
  
  var _reactRouter = require('node_modules/react-router/lib/index');
  
  var _reactRedux = require('node_modules/react-redux/lib/index');
  
  var _actionsUser = require('src/js/actions/user/index');
  
  var _actionsUserHome = require('src/js/actions/user/home');
  
  var actions = _interopRequireWildcard(_actionsUserHome);
  
  var HomeMain = (function (_React$Component) {
      _inherits(HomeMain, _React$Component);
  
      function HomeMain() {
          _classCallCheck(this, HomeMain);
  
          _get(Object.getPrototypeOf(HomeMain.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(HomeMain, [{
          key: 'getData',
          value: function getData() {
              if (this.props.home.listData.length > 0) {
                  return this.props.home.listData.map(function (val, key) {
                      return _react2['default'].createElement(
                          'article',
                          { key: key },
                          _react2['default'].createElement(
                              'div',
                              { className: 'focus' },
                              _react2['default'].createElement(
                                  _reactRouter.Link,
                                  { to: "/page/" + val.id, className: 'thumbnail' },
                                  _react2['default'].createElement('img', { src: "/images/upload/admin/" + val.imgUrl, alt: val.title, 'data-bd-imgshare-binded': '1' })
                              )
                          ),
                          _react2['default'].createElement(
                              'header',
                              null,
                              _react2['default'].createElement(
                                  'h3',
                                  null,
                                  _react2['default'].createElement(
                                      _reactRouter.Link,
                                      { to: "/page/" + val.id, state: val.title },
                                      val.title
                                  )
                              )
                          ),
                          _react2['default'].createElement(
                              'p',
                              { className: 'note' },
                              val.caption
                          ),
                          _react2['default'].createElement(
                              'p',
                              null,
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
                      );
                  });
              } else {
                  return _react2['default'].createElement(
                      'article',
                      null,
                      '暂无数据'
                  );
              }
          }
      }, {
          key: 'componentDidMount',
          value: function componentDidMount() {
              this.props._indexHandle('');
              this.props._getNew(this.props.home.page, this.props.home.pageSize);
          }
          //组件加载后
  
      }, {
          key: 'render',
          value: function render() {
  
              return _react2['default'].createElement(
                  'div',
                  { className: 'content-left' },
                  _react2['default'].createElement(
                      'div',
                      { className: 'hot-read' },
                      _react2['default'].createElement(
                          'h2',
                          null,
                          '推荐集合'
                      ),
                      _react2['default'].createElement(
                          'ul',
                          null,
                          _react2['default'].createElement(
                              'li',
                              null,
                              _react2['default'].createElement(
                                  'a',
                                  { href: '#' },
                                  _react2['default'].createElement('img', { src: '../../../images/reception/d8.jpg', alt: '移动端界面设计之尺寸篇', 'data-bd-imgshare-binded': '1' }),
                                  _react2['default'].createElement(
                                      'h3',
                                      null,
                                      '移动端布局单位之rem篇'
                                  ),
                                  _react2['default'].createElement(
                                      'p',
                                      { 'class': 'muted' },
                                      '彻底弄懂移动端布局单位，完美自适应移动手机的分辨率，搞定设计MM的PSD~！...'
                                  )
                              )
                          ),
                          _react2['default'].createElement(
                              'li',
                              null,
                              _react2['default'].createElement(
                                  'a',
                                  { href: '#' },
                                  _react2['default'].createElement('img', { src: '../../../images/reception/d8.jpg', alt: '移动端界面设计之尺寸篇', 'data-bd-imgshare-binded': '1' }),
                                  _react2['default'].createElement(
                                      'h3',
                                      null,
                                      'JQUERY插件封装入门篇'
                                  ),
                                  _react2['default'].createElement(
                                      'p',
                                      { 'class': 'muted' },
                                      '学了JQ，岂能不会封装插件，还怎么混，赶快跟哥一起来学如何封装，入门级必备~！...'
                                  )
                              )
                          ),
                          _react2['default'].createElement(
                              'li',
                              null,
                              _react2['default'].createElement(
                                  'a',
                                  { href: '#' },
                                  _react2['default'].createElement('img', { src: '../../../images/reception/d8.jpg', alt: '移动端界面设计之尺寸篇', 'data-bd-imgshare-binded': '1' }),
                                  _react2['default'].createElement(
                                      'h3',
                                      null,
                                      'react入门开发篇'
                                  ),
                                  _react2['default'].createElement(
                                      'p',
                                      { 'class': 'muted' },
                                      '在这个前端爆炸的年代，不会react还想涨薪！手把手教你入门react做个SPA项目~！...'
                                  )
                              )
                          ),
                          _react2['default'].createElement(
                              'li',
                              null,
                              _react2['default'].createElement(
                                  'a',
                                  { href: '#' },
                                  _react2['default'].createElement('img', { src: '../../../images/reception/d8.jpg', alt: '移动端界面设计之尺寸篇', 'data-bd-imgshare-binded': '1' }),
                                  _react2['default'].createElement(
                                      'h3',
                                      null,
                                      'Node.js全栈开发入门篇'
                                  ),
                                  _react2['default'].createElement(
                                      'p',
                                      { 'class': 'muted' },
                                      '只会前端远远不够，老司机贴身教你使用node.js+express+mysql搭建自己的博客...'
                                  )
                              )
                          )
                      )
                  ),
                  _react2['default'].createElement(
                      'div',
                      { className: 'new-push' },
                      _react2['default'].createElement(
                          'h2',
                          null,
                          '最新发布'
                      ),
                      this.getData()
                  )
              );
          }
      }]);
  
      return HomeMain;
  })(_react2['default'].Component);
  
  var mapStateToProps = function mapStateToProps(state) {
      return state;
  };
  
  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
      return {
          _getNew: function _getNew(page, pageSize) {
              dispatch(actions.getNew(page, pageSize));
          },
          _indexHandle: function _indexHandle(id) {
              dispatch((0, _actionsUser.indexHandle)("GET_NAV_ID", id));
          }
      };
  };
  
  var Home = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HomeMain);
  
  exports['default'] = Home;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/containers/user/home.js.map
  

});
