/**
 * Created by apple on 17/5/16.
 */
import React from 'react';
import {connect} from 'react-redux';
import CenterTopNav from '../../../components/admin/common/centerTopNav';
import Pagination from '../../../components/admin/common/pagination';
import {dialogHandle} from '../../../actions/admin/dialog';
import SelectBox from '../../../components/admin/common/selectBox';
import Table from '../../../components/admin/common/table';
import * as actions from '../../../actions/admin/link/list';

class List extends React.Component{
    //输入标题事件
    inputTitle(e){
        this.props._handle({
            title:e.target.value
        })
    }

    //栏目选择事件
    selectClick(val,name){
        this.props._handle({
            columnId:val
        })
    }

    //分页点击事件
    pageNavClick(curPage,pageSize,options){
        this.getData(curPage,pageSize,options?options:this.props.linkList.temp_options);
    }


    //请求数据
    getData(curPage,pageSize,options){
        this.props._getLinkList({
            curPage:curPage,
            pageSize:pageSize,
            title:options.title,
            columnId:options.columnId
        })
    }

    //重置数据
    resetData(bool){
        if(bool===true){
            let options={
                title:"",
                columnId:1
            }
            //初次进入页面，所有参数初始化
            this.props._handle({
                title:"",
                columnId:1,
                temp_options:options
            });
            //进入页面发起默认请求加载数据
            this.pageNavClick(this.props.linkList.curPage,this.props.linkList.pageSize,options);
        }else{
            //页面未离开，用户正常重置查询条件
            this.props._handle({
                title:"",
                columnId:1
            });
        }
    }

    //查询数据
    submitClick(){
        if(this.props.linkList.status=='loading'){
            this.props._dialogHandle({
                type: "tips",
                time: 2000,
                content: "正在查询中，请耐心等待！",
                tipsType: "warning",
                show: true
            })
        }else{
            let options={
                title:this.props.linkList.title,
                columnId:this.props.linkList.columnId
            }
            this.props._handle({
                temp_options:options
            });
            this.getData(1,this.props.linkList.pageSize,options);
        }
    }

    //修改文章
    changeBtn(id){

    }

    //删除文章
    deleteBtn(id){
        this.props._dialogHandle({
            show:true,
            type:"tips",
            tipsType:"confirm",
            content:"确定要删除这条链接？",
            success:function(){
                this.props._deleteLink(id,this.props.linkList.temp_options.columnId,this.submitClick.bind(this));
            }.bind(this)
        })
    }

    componentDidMount(){
        //绑定修改按钮事件
        this.props.linkList.titleList[4].htmlType[0].callBack=this.changeBtn.bind(this);
        //绑定删除按钮事件
        this.props.linkList.titleList[4].htmlType[1].callBack=this.deleteBtn.bind(this);
        this.resetData(true);
    }

    render(){
        return(
            <div className="height100p">
                <CenterTopNav title="链接列表" parentList={[{name:"链接管理"}]} />
                <div className="height100pY plr26">
                    {/*form content begin*/}
                    <div className="pub-form-top clearfix">
                        <ul>
                            <li>
                                <span>链接名称:</span>
                                <input type="text" onChange={this.inputTitle.bind(this)} placeholder="请输入链接名称" value={this.props.linkList.title} />
                            </li>
                            <li>
                                <span>所属栏目:</span>
                                <SelectBox
                                    callBack={this.selectClick.bind(this)}
                                    value={this.props.linkList.columnId}
                                    list={this.props.linkList.columnList}
                                />
                            </li>
                        </ul>
                        <div className="pub-form-btns clearfix">
                            <div className="left">
                                <button key="query" onClick={this.submitClick.bind(this)}>查询</button>
                                <button key="reset" onClick={this.resetData.bind(this)}>重置</button>
                            </div>
                        </div>

                    </div>
                    {/*form content end*/}
                    {/*content begin*/}
                    <div className="form-content-wrap">
                        <div className="form-table-wrap">
                            <Table
                                colspan={5}
                                status={this.props.linkList.status}
                                dataList={this.props.linkList.listData}
                                titleList={this.props.linkList.titleList}
                            />
                        </div>
                        <Pagination
                            curPage={this.props.linkList.curPage}
                            totalNumber={this.props.linkList.totalSize}
                            pageLimt={this.props.linkList.pageSize}
                            pageClick={this.pageNavClick.bind(this)}
                        />
                    </div>
                    {/*content end*/}
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
        _handle:(options)=>{
            dispatch(actions.handle(options))
        },
        _getLinkList:(options)=>{
            dispatch(actions.getLinkList(options))
        },
        _dialogHandle:(options)=>{
            dispatch(dialogHandle(options));
        },
        _deleteLink:(id,cid,callBack)=>{
            dispatch(actions.deleteLink(id,cid,callBack));
        }
    }
}

const linkList = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

export default linkList;
