/**
 * Created by gaolei on 2017/4/17.
 *
 * 用户分配角色页面的选择角色功能
 */
import React from 'react';

class SelectPeople extends React.Component{
    constructor(props){
        super(props);
        console.log('shows')
        console.log(this.props);
        this.state={
            show:false,
            roleOldList:this.props.roleOldList,
            bList:this.props.oldList
        }
    }

    //判断是否在数组里
    inArray(val) {
        let userRoleList = this.state.bList;
        let flag = false;
        for (let i = 0; i < userRoleList.length; i++) {
            if (userRoleList[i].roleCode == val.roleCode) {
                flag = true;
                return flag;
            }
        }
        return flag;
    }

    //取消人员选择
    cancelSelect(id,e){
        e.nativeEvent.stopImmediatePropagation();
        let listArray=this.state.bList;
        for(let i=0;i<listArray.length;i++){
            if(listArray[i].roleCode==id){
                listArray.splice(i,1);
            }
        }

        this.setState({
            bList:listArray
        },()=>{
            this.props.selectCallBack(listArray);
        })
    }

    //选择人员列表点击事件
    selectPeople(id,name,e){

        e.nativeEvent.stopImmediatePropagation();
        let mList = this.state.bList;
        let roleName = name, roleCode = id;
        if (roleName == "请选择") {
            return false;
        } else {
            if (this.inArray(
                    {roleCode: roleCode, roleName: roleName}
                )) {//数组里存在
            } else {
                this.setState({
                    bList: mList.concat({roleCode: roleCode, roleName: roleName})
                });
                //回调函数触发修改外面的PROPS
                this.props.selectCallBack(mList.concat({roleCode: roleCode, roleName: roleName}));
            }
        }
    }
    //显示人员列表
    show(e){
        e.nativeEvent.stopImmediatePropagation();
        this.setState({show:true});
    }
    //返回列表数据
    showList(){

        let optionHtml = [];//<li class="l-item" data-id="请选择">请选择</li>
        let roleOldList = this.state.roleOldList;
        let bList = this.state.bList;
        for (let j = 0; j < roleOldList.length; j++) {
            let choose = false;
            for (let k = 0; k < bList.length; k++) {
                if (roleOldList[j].value == bList[k].roleCode) {
                    choose = true;
                }
            }
            if (roleOldList[j].name == "超级管理员" || roleOldList[j].name == "普通用户") {

            } else {

                if (choose) {
                    optionHtml.push(<li key={roleOldList[j].value} className="l-item choose" onClick={this.selectPeople.bind(this,roleOldList[j].value,roleOldList[j].name)}>{roleOldList[j].name}</li>);
                } else {
                    optionHtml.push(<li key={roleOldList[j].value} className="l-item" onClick={this.selectPeople.bind(this,roleOldList[j].value,roleOldList[j].name)}>{roleOldList[j].name}</li>);
                }
            }
        }
        return optionHtml;
    }

    //显示插入人员列表
    getInsertList(){
        let innerHtml = [];
        if(this.state.bList.length>0){
            this.state.bList.map((item, i)=> {
                if (item.roleName == "超级管理员" || item.roleName == "普通用户") {

                } else {
                    innerHtml.push(<div key={i} className="item" ><span>{item.roleName}</span><span onClick={this.cancelSelect.bind(this,item.roleCode)} className="cancel">X</span></div>)
                }
            });
            return innerHtml;
        }else{
            return '请选择';
        }
    }

    //隐藏列表
    hide(){

        this.setState({
            show:false
        });
    }

    componentDidMount(){
        document.onclick=this.hide.bind(this);
    }

    render(){
        return(
            <div className="a-c">
                <div className="a-left">
                    <span>请选择角色类型：</span>
                </div>
                <div className="a-box" onClick={this.show.bind(this)}>
                    <div className="box">{this.getInsertList()}</div>
                    <div className="a-s-box" style={{display:this.state.show?'block':'none'}}>
                        <ul className="list">
                           {this.showList()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectPeople;