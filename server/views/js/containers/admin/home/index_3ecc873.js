define('src/js/containers/admin/home/index', function(require, exports, module) {

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
  
  var _actionsHome = require('../../../actions/home');
  
  var HomeMain = (function (_React$Component) {
  	_inherits(HomeMain, _React$Component);
  
  	function HomeMain() {
  		_classCallCheck(this, HomeMain);
  
  		_get(Object.getPrototypeOf(HomeMain.prototype), 'constructor', this).apply(this, arguments);
  	}
  
  	_createClass(HomeMain, [{
  		key: 'componentDidMount',
  		value: function componentDidMount() {
  			this.loadData();
  		}
  
  		//生命周期销毁函数
  	}, {
  		key: 'componentWillUnmount',
  		value: function componentWillUnmount() {
  			window.onresize = null;
  		}
  
  		//加载数据
  	}, {
  		key: 'loadData',
  		value: function loadData() {
  			var _this = this;
  
  			this.props._getEchartData({
  				callback: function callback() {
  					_this.eChartsSet();
  				}
  			});
  		}
  
  		//eCharts 配置函数
  	}, {
  		key: 'eChartsSet',
  		value: function eChartsSet() {
  
  			var xList = this.props.home.listData;
  			var performanceList = this.props.home.listBalance;
  			var siteCountList = this.props.home.listNodeCount;
  			var myChart = echarts.init(document.getElementById('drawBar'));
  			var option = {
  				title: {
  					text: "宜农站点业绩图",
  					textStyle: {
  						color: "#4bba39",
  						fontSize: "18",
  						textAlign: "center",
  						padding: [0, 0, 30, 500]
  					}
  				},
  				grid: {
  					top: "100",
  					left: "60",
  					right: "120"
  				},
  				color: ["#66d354", "#3fb3eb"],
  				tooltip: {
  					trigger: 'axis'
  				},
  				legend: {
  
  					data: [{
  						name: "站点数",
  						icon: "rect"
  					}, {
  						name: "时点余额",
  						icon: "rect"
  					}]
  				},
  				xAxis: [{
  					/*splitLine:{
        show:true
        },*/
  					axisLine: {
  						lineStyle: {
  							color: "#3598db",
  							width: "2"
  						}
  					},
  					axisLabel: {
  						textStyle: {
  							color: "#333",
  							fontSize: "13"
  						}
  					},
  					type: 'category',
  					data: xList
  				}],
  				yAxis: [{
  					/*splitLine:{
        show:true
        },*/
  					axisLine: {
  						lineStyle: {
  							color: "#3598db",
  							width: "2"
  						}
  					},
  					axisLabel: {
  						textStyle: {
  							color: "#666",
  							fontSize: "12"
  						}
  					},
  					type: 'value',
  					name: '站点数（个）',
  					nameTextStyle: {
  						color: "#66d354",
  						fontSize: "12"
  					},
  					splitNumber: 5
  
  				}, {
  					axisLine: {
  
  						lineStyle: {
  							color: "#3598db",
  							width: "2"
  						}
  					},
  					axisLabel: {
  						textStyle: {
  							color: "#666",
  							fontSize: "12"
  						}
  					},
  					type: 'value',
  					name: '时点余额（亿元）',
  					nameTextStyle: {
  						color: "#3fb3eb",
  						fontSize: "12"
  					},
  					splitLine: false,
  					splitNumber: 5
  				}],
  				series: [{
  					name: '站点数',
  					type: 'line',
  					data: siteCountList
  				}, {
  					name: '时点余额',
  					type: 'bar',
  					yAxisIndex: 1,
  					data: performanceList
  				}]
  			};
  			window.onresize = function () {
  				console.log('重新绘制echart');
  				myChart.resize();
  			};
  			myChart.setOption(option);
  		}
  	}, {
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				'div',
  				{ className: 'home-contioner' },
  				_react2['default'].createElement(
  					'div',
  					{ className: 'contenter' },
  					_react2['default'].createElement('div', { className: 'drawBar', id: 'drawBar' }),
  					_react2['default'].createElement(
  						'div',
  						{ className: 'remarks' },
  						_react2['default'].createElement(
  							'p',
  							null,
  							_react2['default'].createElement(
  								'span',
  								null,
  								'注：'
  							),
  							'1、站点数是指数据站点的站点个数'
  						),
  						_react2['default'].createElement(
  							'p',
  							null,
  							_react2['default'].createElement('span', null),
  							'2、时点余额是指数据站点的时点余额的总和'
  						)
  					)
  				)
  			);
  		}
  	}]);
  
  	return HomeMain;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
  	return state;
  }
  
  function mapDispatchToProps(dispatch) {
  	return {
  		_getEchartData: function _getEchartData(options) {
  			dispatch((0, _actionsHome.getEchartData)(options));
  		}
  	};
  }
  
  var HomeIndex = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HomeMain);
  
  exports['default'] = HomeIndex;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/containers/admin/home/index.js.map
  

});
