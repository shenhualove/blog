import React from 'react';
import {connect} from 'react-redux';
import {browserHistory } from 'react-router';
import CenterTopNav from '../../components/public/centerTopNav';
import CreatTree from '../../components/public/tree';
import {rolesAddRoleHandle,rolesGetAddTreeData,rolesEditLoadData,rolesEditRole,rolesAddRole} from '../../actions/roles/add';
import {dialogHandle} from '../../actions/dialog';

class AddRoleMain extends React.Component{

	componentDidMount(){	
		this.props._rolesAddRoleHandle({
			submitFlag:true
		});
		if(this.props.addRole.operationType!="add"){//编辑
			this.editLoadData();			
		}else{
			this.loadAddTreeData();
			this.loadLog([]);
		}	
	}
	//加载添加角色的树形数据
	loadAddTreeData(){
		this.props._rolesGetAddTreeData({
            callback:()=>{this.creatTree()}
     	});		
		
	}
	
	showLogList(listData,showFlag){
		if(!showFlag){
			return "";
		}
		let logListShow=[];		
		if(listData.length==0){
			logListShow=(
				<tr>
					<td colSpan="4"></td>
					
				</tr>
			);
		}else{
			listData.map((item,i)=>{
				let Time=moment(item.operateTime).format("YYYY-MM-DD");
				logListShow.push(
					<tr key={i}>
						<td>{Time}</td>
						<td>{item.accountName}</td>
						<td>{item.objectName}</td>
						<td>{item.rawLog}</td>
					</tr>				
				);
			});
		}
		return logListShow;
	}
	
	//加载日志数据
	loadLog(listData){
		
		this.props._rolesAddRoleHandle({
			logListShow:true
		});
	}
	
	//创建权限树
	creatTree(){

	}

	
	//编辑时加载数据
	editLoadData(){
		//this.props.params.roleCode //浏览器参数
		this.props._rolesEditLoadData({
			roleCode:this.props.addRole.roleCode?this.props.addRole.roleCode:this.props.params.roleCode,
            callback:()=>{this.creatTree()},
            loadLog:(data)=>{this.loadLog(data)}
     	});
		
	}
	
	//角色描述改变事件
	roleDescribeOnchange(event){
		this.props._rolesAddRoleHandle({
			roleDescribe:event.target.value.substring(0, 200)
		});
	}
	
	//角色名称改变事件
	roleNameOnchange(event){
		this.props._rolesAddRoleHandle({
			roleName:event.target.value
		});
	}
	
	//点击取消
	signOutBack(){
		this.props._dialogHandle({
			show:true,
			type:"tips",
			tipsType:"confirm",
			success:function(){
				browserHistory.push('/System/RoleManager');
				return true;
			},
			content:"是否放弃所填内容"
		});
	}
	//
	checkForm(){

		let roleName=this.props.addRole.roleName
		let roleDescribe=this.props.addRole.roleDescribe.replace(/\s+/g, "");
		
		let roleNameCheck= $.XlCheck({
			val:roleName,
			len:"1,20",
			rule:["Empty","specialCharacter","Length"] 
		});
		let roleDescribeCheck=$.XlCheck({
			val:roleDescribe,
			len:"1,200",
			rule:["Empty","specialCharacter","Length"] 
		});
		//校验角色名称
		if(!roleNameCheck.result){
			if(!roleNameCheck.Empty){
				this.props._dialogHandle({
					show:true,
					content:'角色名称不能为空',
					type:"tips",
					tipsType:"warning"
				});
				return false;
			}
			if(!roleNameCheck.specialCharacter){
				this.props._dialogHandle({
					show:true,
					content:'角色名称不可输入特殊字符或空格',
					type:"tips",
					tipsType:"warning"
				});

				return false;
			}
			if(!roleNameCheck.Length){
				this.props._dialogHandle({
					show:true,
					content:'角色名称只能输入1-20个汉字',
					type:"tips",
					tipsType:"warning"
				});
				return false;
			}			
		}
		//校验角色描述
		if(!roleDescribeCheck.result){
			if(!roleDescribeCheck.Empty){
				this.props._dialogHandle({
					show:true,
					content:'角色描述不能为空',
					type:"tips",
					tipsType:"warning"
				});
				return false;
			}
			if(!roleDescribeCheck.specialCharacter){
				this.props._dialogHandle({
					show:true,
					content:'角色描述不可输入特殊字符，请重新输入',
					type:"tips",
					tipsType:"warning"
				});
				return false;
			}
			if(!roleDescribeCheck.Length){
				this.props._dialogHandle({
					show:true,
					content:'角色描述只能输入1-200个汉字',
					type:"tips",
					tipsType:"warning"
				});
				return false;
			}			
		}

		let checkedNodeList=this.getTreeCheckVal(this.props.addRole.treeData).idArray;


        if(checkedNodeList.length==0){
			this.props._dialogHandle({
				show:true,
				content:'请给角色分配权限',
				type:"tips",
				tipsType:"warning"
			});
			return false;
        }
        return true;
	}
	
	//编辑保存回调
	saveCallBack(){
		this.props._dialogHandle({
			show:true,
			content:'编辑角色成功',
			type:"tips",
			tipsType:"success",
			hide:function(){
				this.props._rolesAddRoleHandle({
					submitFlag:true
				});
				browserHistory.push('/System/RoleManager');
			}.bind(this)
		});
	}
	//新增保存回调
	saveAddCallBack(){
		this.props._dialogHandle({
			show:true,
			content:'添加成功',
			type:"tips",
			tipsType:"success",
			hide:function(){
				this.props._rolesAddRoleHandle({
					submitFlag:true
				});
				browserHistory.push('/System/RoleManager');
			}.bind(this)
		});
	}
	
	//编辑保存
	saveEditForm(){
		if(!this.checkForm()){
			return false;
		}
		
		

		let checkedValue=this.getTreeCheckVal(this.props.addRole.treeData);
		let checkedNodeList=checkedValue.idArray;
		let checkedNodeNameList=checkedValue.nameArray;

		this.props._dialogHandle({
			show:true,
			content:'是否保存提交所填内容',
			type:"tips",
			tipsType:"confirm",
			success:function(){
				this.props._rolesAddRoleHandle({
					submitFlag:false,
				});
				this.props._rolesEditRole({
					roleCode:this.props.addRole.roleCode?this.props.addRole.roleCode:this.props.params.roleCode,
					id:this.props.addRole.roleId,
					roleName:this.props.addRole.roleName,
					roleDesc:this.props.addRole.roleDescribe,
					pers:checkedNodeList.join(","),
					perNames:checkedNodeNameList.join(","),
					callback:()=>{this.saveCallBack()}
				});
				return true;
			}.bind(this),
			fail:function(){
				this.props._rolesAddRoleHandle({
					submitFlag:true
				});
			}.bind(this)
		});
	}
	
	//添加保存
	saveAddForm(){	
		if(!this.checkForm()){
			return false;
		}		

		let checkedValue=this.getTreeCheckVal(this.props.addRole.treeData);
		let checkedNodeList=checkedValue.idArray;
		let checkedNodeNameList=checkedValue.nameArray;

		this.props._dialogHandle({
			show:true,
			content:'是否保存提交所填内容',
			type:"tips",
			tipsType:"confirm",
			success:function(){
				this.props._rolesAddRoleHandle({
					submitFlag:false
				});
				this.props._rolesAddRole({
					roleName:this.props.addRole.roleName,
					roleDescribe:this.props.addRole.roleDescribe,
					pers:checkedNodeList.join(","),
					perNames:checkedNodeNameList.join(","),
					callback:()=>{this.saveAddCallBack()}
				});
				return true;
			}.bind(this),
			fail:function(){
				this.props._rolesAddRoleHandle({
					submitFlag:true
				});
			}.bind(this)
		});
	}
	
	
	//保存按钮
	saveBtnFun(){
		
		if(!this.props.addRole.submitFlag){
			this.props._dialogHandle({
				show:true,
				type:"loading",
				content:"提交中"
			})
			return false;
		}
		
		if(this.props.addRole.operationType!="add"){
			this.saveEditForm();
		}else{
			this.saveAddForm();
		}
	}

	//树形菜单隐藏、显示回调事件 id栏目的ID， bool 是展示或隐藏 DATA是菜单数据结构源
	showCall(id,bool,data){
		this.props._rolesAddRoleHandle({
			treeData:this.selectTreeId(id,bool,data)
		});
	}

	//递归菜单是否展开隐藏
	selectTreeId(id,bool,d){
		let data=d;
		for(let i=0;i<data.length;i++){
			if(data[i].id==id){
				data[i].open=!bool;
				break;
			}else{
				if(data[i].children.length>0){
					data[i].children=this.selectTreeId(id,bool,data[i].children);
				}
			}
		}
		return data;
	}

	//递归菜单 选项是否选中  id栏目的ID， bool 是有子菜单或没有子菜单 DATA是菜单数据结构源
	checkShow(id,bool,data){
		let tempData=this.checkTreeId(id,bool,data);
		console.log(tempData);
		this.props._rolesAddRoleHandle({
			treeData:this.parentIsCheck(id,tempData,tempData)
		});
	}

	//递归循环取消选择
	checkTreeId(id,bool,d){
		let data=d;
		for(let i=0;i<data.length;i++){
			if(data[i].id==id){
				data[i].checked=!data[i].checked;
				data[i].middleCheck=false;
				//含有子菜单，向下递归循环
				if(bool){
					data[i].children=this.loopCheck(data[i].checked,data[i].children);
				}
				break;
			}else{
				if(data[i].children.length>0){
					data[i].children=this.checkTreeId(id,bool,data[i].children);
				}
			}
		}
		return data;
	}

	//递归循环子菜单里的取消选择
	loopCheck(bool,d){
		let data=d;
		for(let i=0;i<data.length;i++){
				data[i].checked=bool;
			    data[i].middleCheck=false;
				if(data[i].children.length>0){
					data[i].children=this.loopCheck(bool,data[i].children);
				}
		}
		return data;
	}

	//循环递归父元素是否需要更改状态为全选，全不选，或者半选
	parentIsCheck(id,d,d2){

		let data=d;
        for(let i=0;i<data.length;i++){
			if(data[i].id==id){
				if(data[i].pid!='0'){
                    d2=this.digui(data[i].pid,d2);
					d2=this.parentIsCheck(data[i].pid,d2,d2);
				}
				break;
			}else{
				if(data[i].children.length>0){
					d2=this.parentIsCheck(id,data[i].children,d2)
				}
			}
		}
		return d2;
	}

	digui(pid,d){
		let data=d;
		for(let i=0;i<data.length;i++){
			if(data[i].id==pid){
				let temp_arr1,temp_arr2=[],isMiddle=false;
				for(let k=0;k<data[i].children.length;k++){
					data[i].children[k].middleCheck&&temp_arr2.push(true);
					if(k==0){
						temp_arr1=data[i].children[k].checked;
					}else{
						if(temp_arr1!=data[i].children[k].checked){
							isMiddle=true;
							break;
						};
					}
				}
				//如果有半选状态，直接设置为选中，并且状态为半选中
				if(temp_arr2.length>0||isMiddle||temp_arr1==false){
					data[i].checked=true;
					data[i].middleCheck=true;
				}else{
					data[i].checked=temp_arr1;
					data[i].middleCheck=false;
				}

				break;
			}else{
				if(data[i].children.length>0){
					data[i].children=this.digui(pid,data[i].children);
				}
			}
		}
		return data;
	}


	//获取树形菜单选中的值，名称
	getTreeCheckVal(data){
		let idArray=[],nameArray=[],valObj={};
		for(let i=0;i<data.length;i++){
            if(data[i].checked){
				nameArray.push(data[i].name);
				idArray.push(data[i].id);
			}
			if(data[i].children.length>0){
				let oldObj=this.getTreeCheckVal(data[i].children);
                nameArray=nameArray.concat(oldObj.nameArray);
				idArray=idArray.concat(oldObj.idArray);
			}
		}
		valObj.idArray=idArray;
		valObj.nameArray=nameArray;
		return valObj;
	}


	componentWillUnmount(){
		//组件销毁后，设置treeData为[]
		this.props._rolesAddRoleHandle({
			treeData:[]
		})
	}

	
    render(){
        return(
            <div className="height100p">
        		<CenterTopNav title={this.props.addRole.operationType!="add"?"编辑角色":"新增角色"} parentList={this.props.addRole.parentList} leaveCallBack={this.signOutBack.bind(this)} />
	            <div className="height100pY add-role-content clearfix">
	            	<div className="left-content" >
						<CreatTree treeData={this.props.addRole.treeData} checkShow={this.checkShow.bind(this)} showCall={this.showCall.bind(this)} />
	            	</div>
	            	<div className="right-content">
	            		<p>
	            			<span className="lable">角色名称:</span>
	            			<input type="text" className="w500" maxLength="20" value={this.props.addRole.roleName} onBlur={this.roleNameOnchange.bind(this)} onChange={this.roleNameOnchange.bind(this)} />
	            		</p>
	            		<p>
	            			<span className="lable ff">角色描述:</span>
	            			<textarea  className="w500" maxLength="200" value={this.props.addRole.roleDescribe} onBlur={this.roleDescribeOnchange.bind(this)} onChange={this.roleDescribeOnchange.bind(this)} >
	            			</textarea>
	            		</p>
	            		<div className="table-content">
	            			<span className="lable ff">日志:</span>
	            			<div className="table">
		            			<table>
		            				<thead>
		            					<tr>
		            						<th width="20%">时间</th>
		            						<th width="25%">操作人</th>
		            						<th width="25%">操作功能</th>
		            						<th width="30%">操作内容</th>
		            					</tr>
		            				</thead>
		            				<tbody>
		            					{this.showLogList(this.props.addRole.logListData,this.props.addRole.logListShow)}
		            				</tbody>
		            			</table>
	            			</div>
	            		</div>
	            		<p className="mr30 clearfix">	            			
	            			<span className='btn' onClick={this.signOutBack.bind(this)}>取消</span>
	            			<span className='btn' onClick={this.saveBtnFun.bind(this)}>保存</span>
	            		</p>
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
    	_rolesAddRoleHandle:(options)=>{
            dispatch(rolesAddRoleHandle(options));
        }, 
        
        _rolesGetAddTreeData:(options)=>{
            dispatch(rolesGetAddTreeData(options));
        },
        _rolesEditLoadData:(options)=>{
            dispatch(rolesEditLoadData(options));
        },
        _rolesEditRole:(options)=>{
            dispatch(rolesEditRole(options));
        },
        _rolesAddRole:(options)=>{
            dispatch(rolesAddRole(options));
        },
		_dialogHandle :(options)=>{
			dispatch(dialogHandle(options));
		}
    }
}

const AddRoleIndex = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddRoleMain);

export default  AddRoleIndex;