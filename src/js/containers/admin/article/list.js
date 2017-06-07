/**
 * Created by apple on 17/5/16.
 */
import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import CenterTopNav from '../../../components/admin/common/centerTopNav';
import Pagination from '../../../components/admin/common/pagination';
import {dialogHandle} from '../../../actions/admin/dialog';
import SelectBox from '../../../components/admin/common/selectBox';
import Table from '../../../components/admin/common/table';
import * as actions from '../../../actions/admin/article/list';

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
        this.getData(curPage,pageSize,options?options:this.props.articleList.temp_options);
    }

    //栏目数据加工
    showColumn(){
        let arr=[{value:"",name:"全部"}];
        let temp_arr=[];
        this.props.articleList.columnList.map((val,key)=>{
            temp_arr.push({value:val.id,name:val.title})
        });
        return arr.concat(temp_arr);
    }

    //请求数据
    getData(curPage,pageSize,options){
        this.props._getArticleList({
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
                columnId:''
            }
            //初次进入页面，所有参数初始化
            this.props._handle({
                title:"",
                columnId:'',
                temp_options:options
            });
            //进入页面发起默认请求加载数据
            this.pageNavClick(this.props.articleList.curPage,this.props.articleList.pageSize,options);
        }else{
            //页面未离开，用户正常重置查询条件
            this.props._handle({
                title:"",
                columnId:''
            });
        }
    }

    //查询数据
    submitClick(){
        if(this.props.articleList.status=='loading'){
            this.props._dialogHandle({
                type: "tips",
                time: 2000,
                content: "正在查询中，请耐心等待！",
                tipsType: "warning",
                show: true
            })
        }else{
            let options={
                title:this.props.articleList.title,
                columnId:this.props.articleList.columnId
            }
            this.props._handle({
                temp_options:options
            });
            this.getData(1,this.props.articleList.pageSize,options);
        }
    }

    //修改文章
    changeBtn(id){
        browserHistory.push('/admin/article/update/'+id);
    }

    //删除文章
    deleteBtn(id){
        this.props._dialogHandle({
            show:true,
            type:"tips",
            tipsType:"confirm",
            content:"确定要删除这篇文章？",
            success:function(){
                this.props._deleteArticle(id,this.submitClick.bind(this))
            }.bind(this)
        })
    }

    componentDidMount(){
        //绑定修改按钮事件
        this.props.articleList.titleList[6].htmlType[0].callBack=this.changeBtn.bind(this);
        //绑定删除按钮事件
        this.props.articleList.titleList[6].htmlType[1].callBack=this.deleteBtn.bind(this);
        this.resetData(true);
        this.props._getColumnAll();
    }

    render(){
        return(
            <div className="height100p">
                <CenterTopNav title="文章列表" parentList={[{name:"文章管理"}]} />
                <div className="height100pY plr26">
                    {/*form content begin*/}
                    <div className="pub-form-top clearfix">
                        <ul>
                            <li>
                                <span>文章标题:</span>
                                <input type="text" onChange={this.inputTitle.bind(this)} placeholder="请输入文章标题" value={this.props.articleList.title} />
                            </li>
                            <li>
                                <span>所属栏目:</span>
                                <SelectBox
                                    callBack={this.selectClick.bind(this)}
                                    value={this.props.articleList.columnId}
                                    list={this.showColumn()}
                                />
                            </li>
                        </ul>
                        <div className="pub-form-btns clearfix">
                            <div className="left">
                                <button onClick={this.submitClick.bind(this)}>查询</button>
                                <button onClick={this.resetData.bind(this)}>重置</button>
                            </div>
                        </div>

                    </div>
                    {/*form content end*/}
                    {/*content begin*/}
                    <div className="form-content-wrap">
                        <div className="form-table-wrap">
                            <Table
                                colspan={7}
                                status={this.props.articleList.status}
                                dataList={this.props.articleList.listData}
                                titleList={this.props.articleList.titleList}
                            />
                        </div>
                        <Pagination
                            curPage={this.props.articleList.curPage}
                            totalNumber={this.props.articleList.totalSize}
                            pageLimt={this.props.articleList.pageSize}
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
        _getColumnAll:(options)=>{
            dispatch(actions.getColumnAll(options))
        },
        _getArticleList:(options)=>{
            dispatch(actions.getArticleList(options))
        },
        _dialogHandle:(options)=>{
            dispatch(dialogHandle(options));
        },
        _deleteArticle:(id,callBack)=>{
            dispatch(actions.deleteArticle(id,callBack));
        }
    }
}

const articleList = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

export default articleList;