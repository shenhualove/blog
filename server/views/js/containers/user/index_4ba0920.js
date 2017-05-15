define('src/js/containers/user/index', function(require, exports, module) {

  /**
   * Created by shenhua on 16/6/16.
   *
   * 路由首页框架
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
  
  var actions = _interopRequireWildcard(_actionsUser);
  
  var IndexMain = (function (_React$Component) {
      _inherits(IndexMain, _React$Component);
  
      function IndexMain() {
          _classCallCheck(this, IndexMain);
  
          _get(Object.getPrototypeOf(IndexMain.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(IndexMain, [{
          key: 'getNav',
  
          //获取导航
          value: function getNav() {
              var _this = this;
  
              if (this.props.index.nav.length > 0) {
  
                  return this.props.index.nav.map(function (val, key) {
                      if (key == 3) {
                          return _react2['default'].createElement(
                              _reactRouter.IndexLink,
                              { to: '/', className: 'logo' },
                              _react2['default'].createElement('img', { src: "/images/user/logo_3679085.png" })
                          );
                      }
                      return _react2['default'].createElement(
                          _reactRouter.Link,
                          { className: _this.props.index.selectNav == val.id ? "hover" : '', to: '/list/' + val.id, activeClassName: 'hover' },
                          val.title
                      );
                  });
              }
          }
  
          //获取文档链接
      }, {
          key: 'getStudy',
          value: function getStudy() {
              if (this.props.index.study.length > 0) {
                  return this.props.index.study.map(function (val, key) {
                      return _react2['default'].createElement(
                          'li',
                          null,
                          _react2['default'].createElement(
                              'a',
                              { href: val.url, target: '_blank' },
                              val.title
                          )
                      );
                  });
              } else {
                  return _react2['default'].createElement(
                      'li',
                      null,
                      '暂无数据'
                  );
              }
          }
  
          //获取友情链接
      }, {
          key: 'getLink',
          value: function getLink() {
              if (this.props.index.link.length > 0) {
                  return this.props.index.link.map(function (val, key) {
                      return _react2['default'].createElement(
                          'li',
                          null,
                          _react2['default'].createElement(
                              'a',
                              { href: val.url, target: '_blank' },
                              val.title
                          )
                      );
                  });
              } else {
                  return _react2['default'].createElement(
                      'li',
                      null,
                      '暂无数据'
                  );
              }
          }
      }, {
          key: 'componentDidMount',
          value: function componentDidMount() {
              this.props._getNav();
              this.props._getStudyLink();
              this.props._getFriendLink();
          }
          //组件加载后
  
      }, {
          key: 'render',
          value: function render() {
  
              return _react2['default'].createElement(
                  'div',
                  { id: 'loadeWrap' },
                  _react2['default'].createElement(
                      'div',
                      { className: "myPhoto animated fadeInUp " + (this.props.index.showView ? "zoomOutUp" : "") },
                      _react2['default'].createElement('img', { src: "/images/user/myphoto_dfd57d0.png" })
                  ),
                  _react2['default'].createElement(
                      'div',
                      { id: 'blogWrap', className: "animated " + (this.props.index.showView ? "block fadeIn" : "") },
                      _react2['default'].createElement(
                          'div',
                          { className: 'wrap-r' },
                          _react2['default'].createElement(
                              'div',
                              { className: 'top-nav' },
                              _react2['default'].createElement(
                                  _reactRouter.IndexLink,
                                  { to: '/', className: !this.props.index.selectNav ? "hover" : '', activeClassName: 'hover' },
                                  '首页'
                              ),
                              this.getNav()
                          ),
                          _react2['default'].createElement(
                              'div',
                              { className: 'content-wrap' },
                              this.props.children,
                              _react2['default'].createElement(
                                  'div',
                                  { className: 'content-right' },
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'about-my' },
                                      _react2['default'].createElement(
                                          'h4',
                                          null,
                                          '博主介绍'
                                      ),
                                      _react2['default'].createElement(
                                          'div',
                                          null,
                                          _react2['default'].createElement('img', { src: "/images/user/myphoto_dfd57d0.png" }),
                                          _react2['default'].createElement(
                                              'p',
                                              null,
                                              'GitHub：',
                                              _react2['default'].createElement(
                                                  'a',
                                                  { href: 'https://github.com/shenhualove', target: '_blank' },
                                                  'github.com/shenhualove'
                                              ),
                                              _react2['default'].createElement('br', null),
                                              '前端攻城狮一枚，暂居魔都,希望交流WEB前端开发技术以及互联网探讨。有兴趣的可以加前端QQ群：59470700，拒绝潜水广告。'
                                          )
                                      )
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'study-links' },
                                      _react2['default'].createElement(
                                          'h4',
                                          null,
                                          '学习文档'
                                      ),
                                      _react2['default'].createElement(
                                          'ul',
                                          null,
                                          this.getStudy()
                                      )
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'friend-links' },
                                      _react2['default'].createElement(
                                          'h4',
                                          null,
                                          '友情链接'
                                      ),
                                      _react2['default'].createElement(
                                          'ul',
                                          null,
                                          this.getLink()
                                      )
                                  )
                              )
                          ),
                          _react2['default'].createElement(
                              'footer',
                              null,
                              _react2['default'].createElement(
                                  'p',
                                  null,
                                  '盛夏的骤雨  在梦中醒来  无法再闭上眼睑  向明天追寻直至刚才仍有你的未来  一直不停下的雨——译自宇多田光《真夏の通り雨》'
                              )
                          )
                      )
                  )
              );
          }
      }]);
  
      return IndexMain;
  })(_react2['default'].Component);
  
  var mapStateToProps = function mapStateToProps(state) {
      return state;
  };
  
  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
      return {
          _getNav: function _getNav() {
              dispatch(actions.getNav());
          },
          _getStudyLink: function _getStudyLink() {
              dispatch(actions.getStudyLink());
          },
          _getFriendLink: function _getFriendLink() {
              dispatch(actions.getFriendLink());
          }
      };
  };
  
  var Index = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(IndexMain);
  
  exports['default'] = Index;
  module.exports = exports['default'];
  /* 左侧 */ /* 路由页面 */ /* 右侧 */ /* 关于我 */ /* 学习链接 */ /* 友情链接 */ /*底部*/
  //# sourceMappingURL=/js/containers/user/index.js.map
  

});
