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
import React from 'react';

class DepartmentTree extends React.Component{
	constructor(props){
        super(props);
        this.state={
        	data:this.props.departmentData,
        	show:false,
        	tcode:"",
        	inpText:this.props.value==""?"请选择":this.props.value
        }
    }
	
	
	showList(data){
		if(data.length>0){
			let html = [];
			for(let i=0;i<data.length;i++){
				if(data[i].parent == "#"){
					html.push(<li  key={data[i].id}>
	               			<p data-id={data[i].id}>
		               			<i className={data[i].isChildOpen?"yypt-icon-arrowDown":"yypt-icon-arrowRight"} onClick={this.openChild.bind(this,data[i].id)}></i>
		               			<span onClick={this.getSelectedText.bind(this,data[i].tcode,data[i].text)}>{data[i].text}</span>
	               			</p>
	               			<ul className="child-ul" style={{display:data[i].isChildOpen?"block":"none"}}>
	               				{this.getShowChildrenList(data,data[i].id)}
	               			</ul>
	               		</li>);
				}				
			}
			return html;
		}
	}
	
	getShowChildrenList(data,id){
		let html = [];
		for(let j=0;j<data.length;j++){
			
			if(data[j].parent == id){
				if(this.isHasChildren(data[j].id)){
					//有子菜单
					html.push(<li key={data[j].id}>
	               			<p data-id={data[j].id}>
		               			<i className={data[j].isChildOpen?"yypt-icon-arrowDown":"yypt-icon-arrowRight"} onClick={this.openChild.bind(this,data[j].id)}></i>
		               			<span onClick={this.getSelectedText.bind(this,data[j].tcode,data[j].text)}>{data[j].text}</span>
	               			</p>
	               			<ul className="child-ul" style={{display:data[j].isChildOpen?"block":"none"}}>
	               				{this.getShowChildrenList(data,data[j].id)}
	               			</ul>
	               		</li>);
				}else{
					//没有子菜单
					html.push(<li key={data[j].id}>
	               			<p data-id={data[j].id}>
		               			<i></i>
		               			<span onClick={this.getSelectedText.bind(this,data[j].tcode,data[j].text)}>{data[j].text}</span>
	               			</p>
	               		</li>);
				}
				
			}		
			
		}
		return html;
	}
	
	//判断是否有子部门
	isHasChildren(id){
		let data = this.props.departmentData;
		let isChild = false;
		for(let i=0;i<data.length;i++){
			if(data[i].parent == id){
				isChild = true;
			}
		}
		return isChild;
		
	}
	
	//子部门展示隐藏
	openChild(id){		
		let data = this.props.departmentData;

		for(let i=0;i<data.length;i++){
			if(data[i].id == id || data[i].parenet == id){
				data[i].isChildOpen = !data[i].isChildOpen;
				break;
			}
		}
		this.setState({
			data:data
		},()=>{
			//console.log(this.state.data);
		});		
	}
	
	//监听状态变化
	componentWillReceiveProps(props){
		this.setState({
			data:props.departmentData,
        	show:false,
        	tcode:"",
        	inpText:props.value==""?"请选择":props.value
		})
	}
	
	//或得点击文案
	getSelectedText(tcode,inpText){
		this.setState({
			tcode:tcode,
			inpText:inpText,
			show:false
		});
		this.props.callBack(tcode,inpText);
	}
	
	//展示隐藏tree
	showTree(){
		this.setState({
			show:!this.state.show
		});
	}
	
	mouseLeave(){
        this.setState({
            show:false
        })
    }

    render(){
        return(
        	<div className="departMent-tree-wrapper" onMouseLeave={this.mouseLeave.bind(this)}>
        		<input placeholder="请选择" onClick={this.showTree.bind(this)} readOnly="readonly" value={this.state.inpText} />
	        	<div className="departMent-tree-wrap" style={{display:this.state.show?"block":"none"}}>
		            <ul className="departMent-tree">
		              <li>
			              <p>
				              <i></i>
				              <span onClick={this.getSelectedText.bind(this,"","请选择")}>请选择</span>
			              </p>
		              </li>
		              {this.showList(this.props.departmentData)}
		            </ul>
	            </div>
        	</div>
        	
        )
    }
}

export default DepartmentTree;