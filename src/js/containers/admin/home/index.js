import React from 'react';
import {connect} from 'react-redux';
import {getEchartData} from '../../../actions/admin/home';


class HomeMain extends React.Component{

	componentDidMount(){
		this.loadData();
	}
	//生命周期销毁函数
	componentWillUnmount() {
		window.onresize = null;
	}
	//加载数据
	loadData(){
		this.props._getEchartData({
            callback:()=>{this.eChartsSet()}
     	});		
	}
	
	//eCharts 配置函数
	eChartsSet(){

		var xList=this.props.home.listData;
		var performanceList=this.props.home.listBalance;
		var siteCountList=this.props.home.listNodeCount;
		var myChart = echarts.init(document.getElementById('drawBar'));
		var option = {
			title:{
				text:"宜农站点业绩图",
				textStyle:{
					color:"#4bba39",
					fontSize:"18",
					textAlign:"center",
					padding:[0,0,30,500]
				}
			},
			grid:{
				top:"100",
				left:"60",
				right:"120"
			},
			color:["#66d354","#3fb3eb"],
			tooltip: {
				trigger: 'axis'
			},
			legend: {

				data:[
					{
						name:"站点数",
						icon:"rect"
					},
					{
						name:"时点余额",
						icon:"rect"
					}
				]
			},
			xAxis: [
				{
					/*splitLine:{
					 show:true
					 },*/
					axisLine:{
						lineStyle:{
							color:"#3598db",
							width:"2"
						}
					},
					axisLabel:{
						textStyle:{
							color:"#333",
							fontSize:"13"
						}
					},
					type: 'category',
					data: xList
				}
			],
			yAxis: [
				{
					/*splitLine:{
					 show:true
					 },*/
					axisLine:{
						lineStyle:{
							color:"#3598db",
							width:"2"
						}
					},
					axisLabel:{
						textStyle:{
							color:"#666",
							fontSize:"12"
						}
					},
					type: 'value',
					name: '站点数（个）',
					nameTextStyle:{
						color:"#66d354",
						fontSize:"12"
					},
					splitNumber:5,

				},
				{
					axisLine:{

						lineStyle:{
							color:"#3598db",
							width:"2"
						}
					},
					axisLabel:{
						textStyle:{
							color:"#666",
							fontSize:"12"
						}
					},
					type: 'value',
					name: '时点余额（亿元）',
					nameTextStyle:{
						color:"#3fb3eb",
						fontSize:"12"
					},
					splitLine:false,
						splitNumber:5
				}
			],
			series: [
				{
					name:'站点数',
					type:'line',
					data:  siteCountList
				},
				{
					name:'时点余额',
					type:'bar',
					yAxisIndex: 1,
					data:performanceList
				}
			]
		};
		window.onresize=function(){
			console.log('重新绘制echart');
			myChart.resize();
		};
		myChart.setOption(option);
	}
    render(){
        return(
            <div className="home-contioner">
            	<div className="contenter">
            		<div className="drawBar" id="drawBar"></div>
				    <div className="remarks">
						<p><span>注：</span>1、站点数是指数据站点的站点个数</p>
						<p><span></span>2、时点余额是指数据站点的时点余额的总和</p>
					</div>
            	</div>            	
            </div>
        )
    }
}


function mapStateToProps(state){
    return state;
}

function mapDispatchToProps(dispatch){
    return {       
        _getEchartData:(options)=>{
            dispatch(getEchartData(options));
        }
    }
}

const HomeIndex = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeMain);

export default  HomeIndex;