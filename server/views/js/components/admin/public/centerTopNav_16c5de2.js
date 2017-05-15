define('src/js/components/admin/public/centerTopNav', function(require, exports, module) {

  /**
   * Created by zhangminglei on 2017/3/9.
   *
   * 中间内容 头部组件
   *
   * title="菜单名称" 必传
   * parentList={} //父栏目名字和跳转地址 可以不传  数据结构  [{name:"父栏目名字",url:"/parent"}]
   * leaveCallBack={} //回调函数，点击返回上一页的调用，可以不传,如果传入，讲回调父组件的方法
   * leaveUrl="返回上一页的URL"  可以不传，如果传入则显示上一页 否则不显示上一页
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
  
  var _reactRouter = require('node_modules/react-router/lib/index');
  
  var CenterTopNav = (function (_React$Component) {
      _inherits(CenterTopNav, _React$Component);
  
      function CenterTopNav() {
          _classCallCheck(this, CenterTopNav);
  
          _get(Object.getPrototypeOf(CenterTopNav.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(CenterTopNav, [{
          key: 'backUrl',
  
          //跳转之前是否回调
          value: function backUrl(url, fn) {
              if (typeof fn == 'function') {
                  fn();
              } else {
                  _reactRouter.browserHistory.push(url);
              }
          }
  
          //渲染父栏目名称URL
      }, {
          key: 'getParentList',
          value: function getParentList(data) {
              if (data) {
                  var _ret = (function () {
                      var html = [];
                      data.map(function (val, k) {
                          html.push(_react2['default'].createElement(
                              _reactRouter.Link,
                              { key: k, to: val.url },
                              val.name
                          ));
                          html.push(_react2['default'].createElement(
                              'span',
                              { key: k + 's' },
                              '>'
                          ));
                      });
                      return {
                          v: html
                      };
                  })();
  
                  if (typeof _ret === 'object') return _ret.v;
              }
          }
  
          //渲染 返回上一页
      }, {
          key: 'getPrev',
          value: function getPrev(url, fn) {
              if (url || fn) {
                  return _react2['default'].createElement(
                      'div',
                      { className: 'right-cont', style: { display: "inline-block" }, onClick: this.backUrl.bind(this, url, fn) },
                      '返回上一页 >>'
                  );
              }
          }
  
          /*<Link to="/">首页</Link><span>></span>*/
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'center-top-content clearfix' },
                  this.getParentList(this.props.parentList),
                  _react2['default'].createElement(
                      'span',
                      { className: 'title cur' },
                      this.props.title
                  ),
                  this.getPrev(this.props.leaveUrl, this.props.leaveCallBack)
              );
          }
      }]);
  
      return CenterTopNav;
  })(_react2['default'].Component);
  
  exports['default'] = CenterTopNav;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/components/admin/public/centerTopNav.js.map
  

});
