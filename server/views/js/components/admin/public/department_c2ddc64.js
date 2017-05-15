define('src/js/components/admin/public/department', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/20.
   *
   * 部门树形结构生成
   *
   * 传入数据格式
   * {
      id:4500000,
  	parent:"#",
  	tcode:"1000",
  	text:"宜农科技",
  	type:"业务服务类",
   * }
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
  
  var DepartmentTree = (function (_React$Component) {
  	_inherits(DepartmentTree, _React$Component);
  
  	function DepartmentTree(props) {
  		_classCallCheck(this, DepartmentTree);
  
  		_get(Object.getPrototypeOf(DepartmentTree.prototype), "constructor", this).call(this, props);
  		this.state = {
  			data: this.props.departmentData,
  			show: false,
  			tcode: "",
  			inpText: this.props.value == "" ? "请选择" : this.props.value
  		};
  	}
  
  	_createClass(DepartmentTree, [{
  		key: "showList",
  		value: function showList(data) {
  			if (data.length > 0) {
  				var html = [];
  				for (var i = 0; i < data.length; i++) {
  					if (data[i].parent == "#") {
  						html.push(_react2["default"].createElement(
  							"li",
  							{ key: data[i].id },
  							_react2["default"].createElement(
  								"p",
  								{ "data-id": data[i].id },
  								_react2["default"].createElement("i", { className: data[i].isChildOpen ? "yypt-icon-arrowDown" : "yypt-icon-arrowRight", onClick: this.openChild.bind(this, data[i].id) }),
  								_react2["default"].createElement(
  									"span",
  									{ onClick: this.getSelectedText.bind(this, data[i].tcode, data[i].text) },
  									data[i].text
  								)
  							),
  							_react2["default"].createElement(
  								"ul",
  								{ className: "child-ul", style: { display: data[i].isChildOpen ? "block" : "none" } },
  								this.getShowChildrenList(data, data[i].id)
  							)
  						));
  					}
  				}
  				return html;
  			}
  		}
  	}, {
  		key: "getShowChildrenList",
  		value: function getShowChildrenList(data, id) {
  			var html = [];
  			for (var j = 0; j < data.length; j++) {
  
  				if (data[j].parent == id) {
  					if (this.isHasChildren(data[j].id)) {
  						//有子菜单
  						html.push(_react2["default"].createElement(
  							"li",
  							{ key: data[j].id },
  							_react2["default"].createElement(
  								"p",
  								{ "data-id": data[j].id },
  								_react2["default"].createElement("i", { className: data[j].isChildOpen ? "yypt-icon-arrowDown" : "yypt-icon-arrowRight", onClick: this.openChild.bind(this, data[j].id) }),
  								_react2["default"].createElement(
  									"span",
  									{ onClick: this.getSelectedText.bind(this, data[j].tcode, data[j].text) },
  									data[j].text
  								)
  							),
  							_react2["default"].createElement(
  								"ul",
  								{ className: "child-ul", style: { display: data[j].isChildOpen ? "block" : "none" } },
  								this.getShowChildrenList(data, data[j].id)
  							)
  						));
  					} else {
  						//没有子菜单
  						html.push(_react2["default"].createElement(
  							"li",
  							{ key: data[j].id },
  							_react2["default"].createElement(
  								"p",
  								{ "data-id": data[j].id },
  								_react2["default"].createElement("i", null),
  								_react2["default"].createElement(
  									"span",
  									{ onClick: this.getSelectedText.bind(this, data[j].tcode, data[j].text) },
  									data[j].text
  								)
  							)
  						));
  					}
  				}
  			}
  			return html;
  		}
  
  		//判断是否有子部门
  	}, {
  		key: "isHasChildren",
  		value: function isHasChildren(id) {
  			var data = this.props.departmentData;
  			var isChild = false;
  			for (var i = 0; i < data.length; i++) {
  				if (data[i].parent == id) {
  					isChild = true;
  				}
  			}
  			return isChild;
  		}
  
  		//子部门展示隐藏
  	}, {
  		key: "openChild",
  		value: function openChild(id) {
  			var data = this.props.departmentData;
  
  			for (var i = 0; i < data.length; i++) {
  				if (data[i].id == id || data[i].parenet == id) {
  					data[i].isChildOpen = !data[i].isChildOpen;
  					break;
  				}
  			}
  			this.setState({
  				data: data
  			}, function () {
  				//console.log(this.state.data);
  			});
  		}
  
  		//监听状态变化
  	}, {
  		key: "componentWillReceiveProps",
  		value: function componentWillReceiveProps(props) {
  			this.setState({
  				data: props.departmentData,
  				show: false,
  				tcode: "",
  				inpText: props.value == "" ? "请选择" : props.value
  			});
  		}
  
  		//或得点击文案
  	}, {
  		key: "getSelectedText",
  		value: function getSelectedText(tcode, inpText) {
  			this.setState({
  				tcode: tcode,
  				inpText: inpText,
  				show: false
  			});
  			this.props.callBack(tcode, inpText);
  		}
  
  		//展示隐藏tree
  	}, {
  		key: "showTree",
  		value: function showTree() {
  			this.setState({
  				show: !this.state.show
  			});
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
  				{ className: "departMent-tree-wrapper", onMouseLeave: this.mouseLeave.bind(this) },
  				_react2["default"].createElement("input", { placeholder: "请选择", onClick: this.showTree.bind(this), readOnly: "readonly", value: this.state.inpText }),
  				_react2["default"].createElement(
  					"div",
  					{ className: "departMent-tree-wrap", style: { display: this.state.show ? "block" : "none" } },
  					_react2["default"].createElement(
  						"ul",
  						{ className: "departMent-tree" },
  						_react2["default"].createElement(
  							"li",
  							null,
  							_react2["default"].createElement(
  								"p",
  								null,
  								_react2["default"].createElement("i", null),
  								_react2["default"].createElement(
  									"span",
  									{ onClick: this.getSelectedText.bind(this, "", "请选择") },
  									"请选择"
  								)
  							)
  						),
  						this.showList(this.props.departmentData)
  					)
  				)
  			);
  		}
  	}]);
  
  	return DepartmentTree;
  })(_react2["default"].Component);
  
  exports["default"] = DepartmentTree;
  module.exports = exports["default"];
  //# sourceMappingURL=/js/components/admin/public/department.js.map
  

});
