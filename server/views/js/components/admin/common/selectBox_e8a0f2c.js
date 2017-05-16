define('src/js/components/admin/common/selectBox', function(require, exports, module) {

  /**
   * Created by ex-wangxin on 2017/4/13.
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var selectBox = (function (_React$Component) {
      _inherits(selectBox, _React$Component);
  
      function selectBox(props) {
          _classCallCheck(this, selectBox);
  
          _get(Object.getPrototypeOf(selectBox.prototype), "constructor", this).call(this, props);
          this.state = {
              show: false
          };
      }
  
      _createClass(selectBox, [{
          key: "optionClick",
          value: function optionClick(item, name) {
              this.setState({
                  show: false
              });
              this.props.callBack(item, name);
          }
      }, {
          key: "createOption",
          value: function createOption(list) {
              var optionList = [];
              for (var i in list) {
                  optionList.push(_react2["default"].createElement(
                      "p",
                      { key: i, onClick: this.optionClick.bind(this, list[i].value, list[i].name) },
                      list[i].name
                  ));
              }
              return optionList;
          }
  
          //显示选中项
      }, {
          key: "showValue",
          value: function showValue(value, list) {
              for (var i = 0; i < list.length; i++) {
                  if (list[i].value == value) {
                      return list[i].name;
                  }
              }
          }
  
          //select 框点击事件
      }, {
          key: "selectClick",
          value: function selectClick() {
              var show = this.state.show;
              if (show) {
                  this.setState({
                      show: false
                  });
              } else {
                  this.setState({
                      show: true
                  });
              }
          }
      }, {
          key: "mouseLeave",
          value: function mouseLeave() {
              this.setState({
                  show: false
              });
          }
      }, {
          key: "render",
          value: function render() {
              return _react2["default"].createElement(
                  "div",
                  { className: "select-box-wap role-name", onMouseLeave: this.mouseLeave.bind(this) },
                  _react2["default"].createElement(
                      "div",
                      { className: "select-top", onClick: this.selectClick.bind(this) },
                      this.showValue(this.props.value, this.props.list),
                      _react2["default"].createElement(
                          "i",
                          null,
                          " "
                      )
                  ),
                  _react2["default"].createElement(
                      "div",
                      { className: "select-option", style: { display: this.state.show ? 'block' : 'none' } },
                      this.createOption(this.props.list)
                  )
              );
          }
      }]);
  
      return selectBox;
  })(_react2["default"].Component);
  
  exports["default"] = selectBox;
  module.exports = exports["default"];
  //# sourceMappingURL=/js/components/admin/common/selectBox.js.map
  

});
