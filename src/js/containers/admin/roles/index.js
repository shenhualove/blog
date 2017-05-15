/**
 * Created by gaolei on 2017/3/8.
 */
import React from 'react';
import {connect} from 'react-redux';
import CenterTopNav from '../../components/public/centerTopNav';
import {browserHistory } from 'react-router';
import {publicFun} from '../../untils/publicFun';
import {setRolesState, rolesUserList,deleteRolesUser} from "../../actions/roles/roles";
import {rolesAddRoleHandle} from "../../actions/roles/add";
import Pagination from '../../components/public/pagination';
import PlugTableLoading from '../../components/public/plugTableLoading';
import {dialogHandle} from '../../actions/dialog';

class RoleManagerMain extends React.Component {
	

    componentDidMount() {
    	this.props._setRolesState({
            submitFlag: true
        });
        //let currentTopMenu = this.props.login.Jurisdiction.System;
        //let currentTopMenu = 'System';
        //let pathName = this.props.location.pathname.replace("/", "");
        //let pathName = 'RoleManager';
        /*this.props._setRolesState({
            loadPageFlag: true            
        });*/
        let btnsList=new publicFun(this.props);
        //获得用户角色权限
        this.props._setRolesState({
            btnList: btnsList.getJurisdiction()
        });        
        this.loadBtn(btnsList.getJurisdiction());
        
    }
    
    componentWillUnmount(){
		this.props._setRolesState({ 			
	        loadPageFlag:true,//加载分页标识  true:加载  false:不加载
	        curPage:1,//当前页
	        totalSize:0,//总数据条数
	        list:[],
	        tableList:true,
	        selectList:[],
	        tableHead:true,
	        searchBtnShow:true,//查询按钮权限
	        addBtnShow:false,//添加按钮权限
	        editBtnShow:false,//编辑按钮权限
	        deleteBtnShow:false,//删除按钮权限
	        btnList:"",//按钮权限字符串
	        nullData:"",
	        tbodyList: 'loading'//表格加载控件
      });		
	}
    
    

    //文本框改变事件
    roleNameChange(event) {
        this.props._setRolesState({
            roleName: event.target.value
        });
    }
    //加载按钮
    loadBtn(btnList) {
        //let btnList=this.props.roles.btnList.split(",");
        
        
        btnList = (btnList=="" || btnList==undefined)?[]:btnList.split(',');
        let searchFlag = false,
            addFlag = false,
            editFlag = false,
            deleteFlag = false;
        btnList.map((item, index)=> {
            let type = item.split(":")[1];
            if (type == "add") {
                addFlag = true;
            } else if (type == "edit") {
                editFlag = true;
            } else if (type == "search") {
                searchFlag = true;
            } else if (type == "del") {
                deleteFlag = true;
            }
        });
        //初始化用户角色权限
        this.props._setRolesState({
            addBtnShow: addFlag,//添加按钮权限
            editBtnShow: editFlag,//编辑按钮权限
            deleteBtnShow: deleteFlag//删除按钮权限
        });

        let options={
        	searchText: this.props.roles.searchText,
            curPage: this.props.roles.curPage,
            pageSize: this.props.roles.pageLimit,
            errorCallback:()=>{this.errorCallback()}
        }
        
        this.loadData(options);
    }
    
    showThead(){
    	let tableHead = "";
        if (!this.props.roles.editBtnShow && !this.props.roles.deleteBtnShow) {
            tableHead = (
                <tr>
                    <th width="50%">角色名称</th>
                    <th width="50%">角色描述</th>
                </tr>
            )

        } else {
            tableHead = (
                <tr>
                    <th width="30%">角色名称</th>
                    <th  width="50%">角色描述</th>
                    <th width="20%">操作</th>
                </tr>
            )
        }
        return tableHead;       
    }
    

    //加载数据
    loadData(options) {
    	this.props._setRolesState({
			tbodyList:"loading"
		});
        this.props._rolesUserList(options);
    }
    errorCallback(){
		this.props._setRolesState({
            list:[],
            totalSize:0,
            tbodyList:"fail"
       });
	}
    //添加角色
    addRole() {
        this.props._rolesAddRoleHandle({
            operationType:"add",
            roleCode:"",
            roleId:"",
            logListShow:[],
            logListData:[],
            treeData:[],
            roleName:"",//角色名称
    		roleDescribe:"",//角色描述
        });
        
       browserHistory.push('/System/addRole/'+"add");
    }


   


    //调用分页加载
    pageNavClick(n,pageSize){
        
        this.props._setRolesState({
            curPage: n,
            pageLimit:pageSize

        });
        let options={
        	searchText: this.props.roles.searchText,
            curPage: n,
            pageSize: pageSize,
            errorCallback:()=>{this.errorCallback()}
        }       
        this.loadData(options);
    }

    //查询按钮
    searchBtn() {
    	 this.props._setRolesState({
            searchText: this.props.roles.roleName,
            curPage:1,
            totalSize: 0
       });        
    	let options={
        	searchText: this.props.roles.roleName,
            curPage: 1,
            pageSize: this.props.roles.pageLimit,
            errorCallback:()=>{this.errorCallback()}
        }
        this.loadData(options);
    }

    //编辑
    editFun(roleCode, id) {
        this.props._rolesAddRoleHandle({
        	operationType:"edit",            
            roleCode:roleCode,
            roleId:id
        });
        browserHistory.push('/System/addRole/'+roleCode);
        //this.props.history.pushState(null, "addRole", {type: "edit", roleCode: roleCode, roleId: id});

    }

    //删除
    deleteFun(id,roleName) {
    	console.log(this.props.roles.submitFlag);
    	if(!this.props.roles.submitFlag){
			this.props._dialogHandle({
				show:true,
				type:"loading",
				content:"提交中"
			})
			return false;
		}
    	
    	let options={
        	searchText: this.props.roles.searchText,
            curPage: this.props.roles.curPage,
            pageSize: this.props.roles.pageLimit,
            errorCallback:()=>{this.errorCallback()}
        }
    	
        let _that=this;
        this.props._dialogHandle({
            show:true,
            content:'你确定要删除该角色吗？',
            type:"tips",
            tipsType:"confirm",
            success:function(){
            	_that.props._setRolesState({
		            submitFlag: false
		        });
                _that.props._deleteRolesUser({
                    id:id,
                    roleName:roleName,
                    callBack:()=>{
                    	_that.props._setRolesState({
				            submitFlag: true
				        });
                        _that.loadData(options);
                    }
                });
                return true;
                
            },fail:function(){
				_that.props._setRolesState({
					submitFlag:true
				});
			}.bind(_that)
        });
    }
    
    showTbody(list,type){
    	let resultTable = [];
        let _that = this;
    	if(type=="success"){
			list.map((item,i)=>{
				if (!this.props.roles.editBtnShow && !this.props.roles.deleteBtnShow){
					resultTable.push(
						<tr key={i}>
		                    <td>{item.roleName}</td>
		                    <td>{item.roleDesc}</td>
		                </tr>
					);
				}else{
					if (item.roleName == "超级管理员" || item.roleName == "普通用户") {
						resultTable.push(
							<tr key={i}>
			                    <td>{item.roleName}</td>
		                            <td>{item.roleDesc}</td>
		                            <td>
		
		
		                            </td>
			                </tr>
						);
					}else{
						resultTable.push(
							<tr key={i}>
			                    <td>{item.roleName}</td>
	                            <td>{item.roleDesc}</td>
	                            <td>
	                                <span className="btn"
	                                      style={{display: this.props.roles.editBtnShow ? "inline-block" : "none"}}
	                                      onClick={this.editFun.bind(this, item.roleCode, item.id)}>编辑</span>
	                                <span className="btn"
	                                      style={{display: this.props.roles.deleteBtnShow ? "inline-block" : "none"}}
	                                      onClick={this.deleteFun.bind(this, item.id,item.roleName)}>删除</span>
	
	                            </td>
			                </tr>
						);
					}					
				}
				
			});
		}else{	
			if (!this.props.roles.editBtnShow && !this.props.roles.deleteBtnShow){
				resultTable=(					
		            <PlugTableLoading status={type} colSpanCount='2' classNameEnter=""/>	                
				);
			}else{
				resultTable=(					
		            <PlugTableLoading status={type} colSpanCount='3' classNameEnter=""/>	                
				);
			}
		}
        
        /*if(this.props.roles.list=="数据请求中"){
        	resultTable.push(
				<tr key="0"><td colSpan="3"></td></tr>
			)
        }else{
        	if(this.props.roles.list.length>0){
				this.props.roles.list.map((item, i)=> {
		            if (!this.props.roles.editBtnShow && !this.props.roles.deleteBtnShow) {//编辑按钮和删除按钮都没有权限 直接删除按钮列
		                resultTable.push(
		                    <tr key={i}>
		                        <td>{item.roleName}</td>
		                        <td>{item.roleDesc}</td>
		                    </tr>
		                )
		            } else {
		                if (item.roleName == "超级管理员" || item.roleName == "普通用户") {
		                    resultTable.push(
		                        <tr key={i}>
		                            <td>{item.roleName}</td>
		                            <td>{item.roleDesc}</td>
		                            <td>
		
		
		                            </td>
		                        </tr>
		                    )
		                } else {
		                    resultTable.push(
		                        <tr key={i}>
		                            <td>{item.roleName}</td>
		                            <td>{item.roleDesc}</td>
		                            <td>
		                                <span className="btn"
		                                      style={{display: this.props.roles.editBtnShow ? "inline-block" : "none"}}
		                                      onClick={this.editFun.bind(this, item.roleCode, item.id)}>编辑</span>
		                                <span className="btn"
		                                      style={{display: this.props.roles.deleteBtnShow ? "inline-block" : "none"}}
		                                      onClick={this.deleteFun.bind(this, item.id,item.roleName)}>删除</span>
		
		                            </td>
		                        </tr>
		                    )
		                }
		
		            }
		
		        });
			}else{
				if (!this.props.roles.editBtnShow && !this.props.roles.deleteBtnShow) {//编辑按钮和删除按钮都没有权限 直接删除按钮列
	                resultTable.push(
	                    <tr key="0">
	                       <td colSpan="2">暂无数据</td> 
	                    </tr>
	                    
	                )
	            }else{
	            	resultTable.push(
						<tr key="0"><td colSpan="3">暂无数据</td></tr>
					)
	            }
				
			}
     	}*/		
		return resultTable;
    }

    //处理数据
    dealData(data) {

        this.props._setRolesState({
        	tableHead:true,
            tableList: true            
        });

        /*if (this.props.roles.loadPageFlag) {
            this.loadPage();
        }*/
    }

    render() {
        return (
            <div className="height100p">
                <CenterTopNav title="角色管理" parentList={[{name:"系统管理"}]}/>
                <div className="height100pY role-manager-content">
                    <div className="form-content">
                        <span>角色名称:</span>
                        <input type="text" value={this.props.roles.roleName} className="role-name"
                               onChange={this.roleNameChange.bind(this)} onBlur={this.roleNameChange.bind(this)} placeholder="请输入"/>
                    </div>
                    <div className="btn-content">
                        <span className="btn"
                              style={{display: this.props.roles.searchBtnShow ? "inline-block" : "none"}}
                              onClick={this.searchBtn.bind(this)}>查询</span>
                        <span className="btn" style={{display: this.props.roles.addBtnShow ? "inline-block" : "none"}}
                              onClick={this.addRole.bind(this)}>新增</span>

                    </div>

                    <table className="table">
                        <thead>
                        {this.showThead()}
                        </thead>
                        <tbody>
                        {this.showTbody(this.props.roles.list,this.props.roles.tbodyList)}
                        </tbody>
                    </table>
                    <Pagination
                        curPage={this.props.roles.curPage}
                        totalNumber={this.props.roles.totalSize}
                        pageLimt={this.props.roles.pageLimit}
                        pageClick={this.pageNavClick.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}
function mapDispatchToProps(dispatch) {
    return {
        _setRolesState: (options)=> {
            dispatch(setRolesState(options));
        },        
        _rolesUserList: (options)=> {
            dispatch(rolesUserList(options));
        },
        _rolesAddRoleHandle: (options)=> {
            dispatch(rolesAddRoleHandle(options));
        },
        _deleteRolesUser: (options)=> {
            dispatch(deleteRolesUser(options));
        },
        _dialogHandle :(options)=>{
            dispatch(dialogHandle(options));
        }
    }
}
const RoleManager = connect(
    mapStateToProps,
    mapDispatchToProps
)(RoleManagerMain);

export default  RoleManager;