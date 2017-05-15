/**
 * Created by gaolei on 2017/4/1.
 *
 * 公共页面加载
 * 传入参数 showLoading  false隐藏  true显示
 */

import React from 'react';

class PageLoading extends React.Component{
    
    constructor(){
        super();
        this.state={        	
        	showLoading:false
        };
    }
    
    componentDidMount(){ 
    	this.setState({
           showLoading:this.props.showLoading
      	},()=>{      	
       		
       	});
	}
    
    
    
    componentWillReceiveProps(props){
       this.setState({           
           showLoading:props.showLoading
       },()=>{    	
       		
       });
    }//父组件PROPS改变 
    

    render(){
    	
        return(
            <div className="page-loading" style={{"display":this.state.showLoading?"block":"none"}}>
            	<div className="loading-cont"></div>            	
            </div>
        )
    }
}

export default  PageLoading;