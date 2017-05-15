/**
 * Created by ex-wangxin on 2017/3/31.
 */
import React from 'react';
import {connect} from 'react-redux';
import {userHandle, userLoadData, userLoadTree, userChangeRole} from '../../actions/user';
import CenterTopNav from '../../components/public/centerTopNav';
import {publicFun} from '../../untils/publicFun';
import Pagination from '../../components/public/pagination';
import {dialogHandle} from '../../actions/dialog';
import SelectPeople from '../../components/user/selectPeople';
import DepartmentTree from '../../components/public/department';
import SelectBox from '../../components/public/selectBox';
import PlugTableLoading from '../../components/public/plugTableLoading';

class UserManagerMain extends React.Component {

    //加载分页插件
    /*loadPage() {
        this.props._userManager({
            loadPageFlag: false
        });
        this.pageNavClick(1,this.props.user.pageSize);
    }*/

    //调用分页加载
    pageNavClick(n,pageSize) {
        console.log(pageSize);
        let ajaxData = {
            curPage: n,//当前页
            pageSize: pageSize,//每页多少行
            trueName: this.props.user.searchUserName,//姓名
            accountName: this.props.user.searchAccountNumber,//账号
            mobilePhone: this.props.user.searchPhoneNumber,//手机号码
            tcode: this.props.user.searchEmployeeNumber,//部门编号
            roleCode: this.props.user.searchRoleCode,//角色编号
            workingState:this.props.user.searchWorkingState,//在职状态
        };

        this.props._userManager({
            curPage: n,
            pageSize:pageSize,
        });
        this.loadData(ajaxData);
    }


    //加载数据
    loadData(ajaxData) {
        let _that = this;
        let options = {
            curPage: ajaxData.curPage,//当前页
            pageSize: ajaxData.pageSize,//每页多少行
            trueName: ajaxData.trueName,//姓名
            accountName: ajaxData.accountName,//账号
            mobilePhone: ajaxData.mobilePhone,//手机号码
            tcode: ajaxData.tcode,//部门编号
            roleCode: ajaxData.roleCode,//角色编号
            workingState:ajaxData.workingState,

            callBack: function (data) {
                if (data.status == "0000") {
                    if(data.data.data.length>0){
                        _that.props._userManager({
                            totalSize: data.data.count,
                            status:'success',
                            list: data.data.data
                        });
                    }else{
                        _that.props._userManager({
                            totalSize: data.data.count,
                            status:'nothing',
                            list: data.data.data
                        });
                    }

                }else{
                    _that.props._userManager({
                        totalSize: 0,
                        status:'fail',
                    });
                }
                _that.props._userManager({
                    queryCheck: 0,
                    tableList: true
                });
            },
            errorCallBack: function () {
                _that.props._userManager({
                    queryCheck: 0,
                    totalSize: 0,
                    status:'fail',
                });
            }
        };
        _that.props._userManager({
            status:'loading'
        });
        this.props._userManagerLoadData(options);
    }

    //获取部门树形结构数据和角色下拉框
    getTreeData() {
        let _that = this;
        this.props._userManagerLoadTree(
            function (data) {
                if (data.status == "0000") {
                    let companys = data.data.companys;//部门
                    for (let i = 0; i < companys.length; i++) {
                        companys.isChildOpen = false;
                    }
                    _that.props._userManager({
                        departmentData: companys
                    });

                    let roles = data.data.roles;//角色
                    let rolesList = [{value: "", name: "请选择"}];//角色列表
                    for (let j = 0; j < roles.length; j++) {
                        let item = new Object();
                        item.value = roles[j].roleCode;
                        item.name = roles[j].roleName;
                        rolesList.push(item);
                    }
                    _that.props._userManager({
                        roleOldList: rolesList,
                        roleCodeList: true
                    });
                }
            }
        );
    }

    //分配资源按钮
    allocateResources(i) {
        let _that = this;
        let oldList = this.props.user.list;
        this.props._userManager({
            userRoleList: oldList[i].roles
        });
        this.props._dialogHandle({
            show: true,
            type: "confirm",
            title: oldList[i].trueName + ":分配角色",
            width: '600px',
            height: '500px',
            content: <SelectPeople selectCallBack={this.selectCallBack.bind(this)} oldList={oldList[i].roles}
                                   roleOldList={this.props.user.roleOldList}/>,
            success: function () {
                let list = [], allotCheck = this.props.user.allotCheck;
                if (allotCheck == 0) {
                    this.props._userManager({
                        allotCheck: 1
                    });
                    let roleCode = '';
                    let roleNames = [];
                    this.props.user.userRoleList.map((item, i)=> {
                        roleNames.push(item.roleName);
                        if (roleCode == "") {
                            roleCode += item.roleCode;
                        } else {
                            roleCode += ',' + item.roleCode;
                        }
                    });

                    //发送ajax提交修改的角色类型数据
                    this.props._userManagerChangeRole({
                        partyId: oldList[i].partyId,
                        roleCode: roleCode,
                        roleNames: roleNames,
                        trueName: oldList[i].trueName,
                        callBack: function (data) {
                            if (data.status == "0000") {
                                this.props._userManager({
                                    allotCheck: 0
                                });

                                this.props._dialogHandle({
                                    type: "tips",
                                    show: true,
                                    content: '保存成功！',
                                    height: '300px',
                                    hide:function(){
                                        let ajaxData = {
                                            curPage: _that.props.user.curPage,//当前页
                                            pageSize: _that.props.user.pageSize,//每页多少行
                                            trueName: _that.props.user.searchUserName,//姓名
                                            accountName: _that.props.user.searchAccountNumber,//账号
                                            mobilePhone: _that.props.user.searchPhoneNumber,//手机号码
                                            tcode: _that.props.user.searchEmployeeNumber,//部门编号
                                            roleCode: _that.props.user.searchRoleCode,//角色编号
                                            workingState:_that.props.user.searchWorkingState,//在职状态
                                        };
                                        _that.loadData(ajaxData);
                                    },
                                    success: function () {
                                        return true;
                                    },
                                })
                            } else {
                                this.props._userManager({
                                    allotCheck: 0
                                });
                                this.props._dialogHandle({
                                    children: true,
                                    childrenContent: data.message,
                                });
                                return false;
                            }
                        }.bind(this),
                        errorCallBack: function (data) {
                            this.props._userManager({
                                allotCheck: 0
                            });
                        }.bind(this)
                    });
                } else {
                    this.props._dialogHandle({
                        children: true,
                        childrenContent: '提交中',
                    });
                    return false;
                }
            }.bind(this)
        })

    }

    //选择人员回调函数
    selectCallBack(list) {
        this.props._userManager({
            userRoleList: list
        });
    }


    //处理数据
    dealData(oldList, status) {
        let resultTable = [];
        let partyId = this.props.login.account.partyId;//缓存中获取当前登陆人员的的partyId
        if (status == 'success') {
            oldList.map((item, i)=> {
                if (item.partyId == partyId || this.props.user.allocateResourcesBtnShow == false) {
                    resultTable.push(
                        <tr key={i}>
                            <td>{item.trueName}</td>
                            <td>{item.accountName}</td>
                            <td>{item.mobilePhone}</td>
                            <td>{item.companys}</td>
                            <td>{item.roleNames}</td>
                            <td></td>
                        </tr>
                    )
                } else {
                    resultTable.push(
                        <tr key={i}>
                            <td>{item.trueName}</td>
                            <td>{item.accountName}</td>
                            <td>{item.mobilePhone}</td>
                            <td>{item.companys}</td>
                            <td>{item.roleNames}</td>
                            <td><span className="btn" onClick={this.allocateResources.bind(this, i)}>分配角色</span>
                            </td>
                        </tr>
                    )
                }
            });
            return resultTable;
        } else {
            return <PlugTableLoading status={this.props.user.status} colSpanCount='6'
                                     classNameEnter=""/>;
        }

    }

    //加载按钮
    loadBtn(btnList) {
        btnList = (btnList == "" || btnList == undefined) ? [] : btnList.split(',');
        let allocateResourcesBtnShow = false;
        btnList.map((item, index)=> {
            let type = item.split(":")[1];
            if (type == "assignRoles") {//分配权限
                allocateResourcesBtnShow = true;
            }
        });
        this.props._userManager({
            allocateResourcesBtnShow: allocateResourcesBtnShow,//添加按钮权限
        });
        let ajaxData = {
            curPage: 1,//当前页
            pageSize: this.props.user.pageSize,//每页多少行
            trueName: '',//姓名
            accountName: '',//账号
            mobilePhone: '',//手机号码
            tcode: '',//部门编号
            roleCode: '',//角色编号
            workingState:'',//在职状态
            loadPageFlag: true
        };
        this.loadData(ajaxData);
        this.getTreeData();
    }

    componentDidMount() {
        let btnsList = new publicFun(this.props);
        this.props._userManager({
            userName: "",//用户名
            searchUserName: '',//搜索的用户名
            accountNumber: "",//账号
            searchAccountNumber: "",//搜索的账号
            phoneNumber: "",//手机号
            searchPhoneNumber: "",//搜索的手机号
            employeeNumber: "",//部门编号
            employeeText: "请选择",//部门编号对应的文案
            searchEmployeeNumber: "",//搜索的部门编号
            roleCode: "",//角色编码
            searchRoleCode: "",//搜索的角色编号
            workingState:'',//在职状态
            searchWorkingState:'',//用于搜索的在职状态
            checkAll: false,
            status:'loading',//加载状态

            //btnList: this.props.login.Jurisdiction[currentTopMenu].btns[pathName],
            btnList: btnsList.getJurisdiction(),
            loadPageFlag: true,
            curPage: 1,
            totalSize:0,
        });
        let btnList = btnsList.getJurisdiction();
        this.loadBtn(btnList);
    }

    //账号文本框改变事件
    accountNumberChange(event) {
        this.props._userManager({
            accountNumber: event.target.value
        });
    }

    //姓名文本框改变事件
    userNameChange(event) {
        this.props._userManager({
            userName: event.target.value
        });
    }

    //手机号文本框改变事件
    phoneNumberChange(event) {
        this.props._userManager({
            phoneNumber: event.target.value
        });
    }

    //角色 改变事件
    roleCodeChange(roleCode) {
        this.props._userManager({
            roleCode: roleCode
        });
    }

    //点击查询 触发事件
    userManagerQuery(event) {
        let _that = this;
        let queryCheck = this.props.user.queryCheck;
        if (queryCheck == 0) {
            let ajaxData = {
                queryCheck: 1,
                curPage: 1,//当前页
                pageSize: _that.props.user.pageSize,//每页多少行
                trueName: $('#userManagerName').val(),//姓名
                accountName: $('#userManagerAccountNumber').val(),//账号
                mobilePhone: $('#userManagerPhoneNumber').val(),//手机号码
                tcode: _that.props.user.employeeNumber,//部门编号
                roleCode: _that.props.user.roleCode,//角色编号
                workingState:this.props.user.workingState,//在职状态
                loadPageFlag: true
            };
            this.props._userManager({
                queryCheck: 1,
                curPage: 1,//当前页
                pageSize: _that.props.user.pageSize,//每页多少行
                searchUserName: $('#userManagerName').val(),//姓名
                searchAccountNumber: $('#userManagerAccountNumber').val(),//账号
                searchPhoneNumber: $('#userManagerPhoneNumber').val(),//手机号码
                searchEmployeeNumber: _that.props.user.employeeNumber,//部门编号
                employeeText: _that.props.user.employeeText,//部门编号对应的文案
                searchRoleCode: _that.props.user.roleCode,//角色编号
                searchWorkingState:this.props.user.workingState,//在职状态
                totalSize:0,
                loadPageFlag: true
            });
            _that.loadData(ajaxData);
        } else {
            this.props._dialogHandle({
                type: "tips",
                time: 2000,
                content: "正在查询中，请耐心等待！",
                tipsType: "warning",
                show: true
            })
        }

    }

    //点击重置  重置 选择框
    userManagerReset(event) {
        var employeeNumber = $('#department').find('.s-ul').html();
        $('#department').find('.s-ul').html('');
        if (employeeNumber != "") {
            $('#department').append('<label>请选择</label>');
        }

        this.props._userManager({
            userName: "",//用户名
            searchUserName: '',//搜索的用户名
            accountNumber: "",//账号
            searchAccountNumber: "",//搜索的账号
            phoneNumber: "",//手机号
            searchPhoneNumber: "",//搜索的手机号
            employeeNumber: "",//部门编号
            employeeText: "请选择",//部门编号对应的文案
            searchEmployeeNumber: "",//搜索的部门编号
            roleCode: "",//角色编码
            searchRoleCode: "",//搜索的角色编号
            workingState:'',//在职状态
        });
        var date = this.props.user.departmentData;
        for (let i = 0; i < date.length; i++) {
            date[i].isChildOpen = false;
        }
    }

    //获得所选部门
    departmentFun(tcode, text) {
        this.props._userManager({
            employeeNumber: tcode,
            employeeText: text
        });
    }
    //在职状态 输入框修改
    workingStateFun(event){
        this.props._userManager({
            workingState: event,
        });
    }
    render() {

        return (
            <div className="height100p">
                <CenterTopNav title="用户管理" parentList={[{name:"系统管理"}]}/>
                <div className="height100pY user-manager-content clearfix">
                    <div className="form-content">
                        <span>姓名:</span>
                        <input id="userManagerName" type="text" value={this.props.user.userName}
                               className="role-name"
                               onChange={this.userNameChange.bind(this)} onBlur={this.userNameChange.bind(this)}
                               placeholder="请输入姓名"/>
                        <span>帐号:</span>
                        <input id="userManagerAccountNumber" type="text" value={this.props.user.accountNumber}
                               className="role-name"
                               onChange={this.accountNumberChange.bind(this)}
                               onBlur={this.accountNumberChange.bind(this)} placeholder="请输入帐号"/>
                        <span>手机号:</span>
                        <input id="userManagerPhoneNumber" type="text" value={this.props.user.phoneNumber}
                               className="role-name"
                               onChange={this.phoneNumberChange.bind(this)} onBlur={this.phoneNumberChange.bind(this)}
                               placeholder="请输入手机号"/>

                        <div className="sec-cont clearfix">
                            <span className="lable ">部门:</span>
                            <DepartmentTree value={this.props.user.employeeText}
                                            departmentData={this.props.user.departmentData}
                                            callBack={this.departmentFun.bind(this)}/>

                            <span className="lable">角色:</span>
                            <SelectBox className="role-name"
                                       value={this.props.user.roleCode}
                                       list={
                                           this.props.user.roleOldList
                                       }
                                       callBack={this.roleCodeChange.bind(this)}
                            />
                            <span>在职状态:</span>
                            <SelectBox className="role-name"
                                       value={this.props.user.workingState}
                                       list={[
                                           {value: '', name: '请选择'},
                                           {value: '实习', name: '实习'},
                                           {value: '试用', name: '试用'},
                                           {value: '正式', name: '正式'},
                                           {value: '离职', name: '离职'}
                                       ]}
                                       callBack={this.workingStateFun.bind(this)}
                            />

                        </div>
                    </div>
                    <div className="btn-content">
                        <span className="btn" onClick={this.userManagerQuery.bind(this)}>查询</span>
                        <span className="btn" onClick={this.userManagerReset.bind(this)}>重置</span>
                    </div>

                    <table className="table">
                        <thead>
                        <tr>
                            <th>姓名</th>
                            <th>帐号</th>
                            <th>手机号</th>
                            <th>部门</th>
                            <th>角色</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.dealData(this.props.user.list, this.props.user.status)}
                        </tbody>
                    </table>

                    <Pagination
                        curPage={this.props.user.curPage}
                        totalNumber={this.props.user.totalSize}
                        pageLimt={this.props.user.pageSize}
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
        /*user  页面回调方法*/
        _userManager: (options)=> {
            dispatch(userHandle(options));
        },
        _userManagerLoadData: (options)=> {//userManagerLoadData, userManagerLoadTree,userManagerChangeRole
            dispatch(userLoadData(options));
        },
        _userManagerLoadTree: (options)=> {
            dispatch(userLoadTree(options));
        },
        _userManagerChangeRole: (options)=> {
            dispatch(userChangeRole(options));
        },
        _dialogHandle: (options)=> {
            dispatch(dialogHandle(options));
        }
    }
}

const UserManager = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserManagerMain);

export default  UserManager;
