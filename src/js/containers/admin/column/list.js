/**
 * Created by apple on 17/5/16.
 */
import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import CenterTopNav from '../../../components/admin/common/centerTopNav';
import Pagination from '../../../components/admin/common/pagination';
import {dialogHandle} from '../../../actions/admin/dialog';
import Table from '../../../components/admin/common/table';
import * as actions from '../../../actions/admin/column/list';

class List extends React.Component{

    pageNavClick(curPage,pageSize){
        this.getData(curPage,pageSize);
    }

    //请求数据
    getData(){
        this.props._getColumnList({
            curPage:this.props.columnList.curPage,
            pageSize:this.props.columnList.pageSize
        })
    }

    //修改栏目
    changeBtn(id){
        browserHistory.push('/admin/column/update/'+id);
    }

    //删除栏目
    deleteBtn(id){
        this.props._dialogHandle({
            show:true,
            type:"tips",
            tipsType:"confirm",
            content:"确定要删除这个栏目？",
            success:function(){
                this.props._deleteColumn(id,this.getData.bind(this))
            }.bind(this)
        })
    }

    componentDidMount(){
        //绑定修改按钮事件
        this.props.columnList.titleList[5].htmlType[0].callBack=this.changeBtn.bind(this);
        //绑定删除按钮事件
        this.props.columnList.titleList[5].htmlType[1].callBack=this.deleteBtn.bind(this);
        this.getData();
    }

    render(){
        return(
            <div className="height100p">
                <CenterTopNav title="栏目列表" parentList={[{name:"栏目管理"}]} />
                <div className="height100pY plr26">
                    {/*content begin*/}
                    <div className="form-content-wrap">
                        <div className="form-table-wrap">
                            <Table
                                colspan={6}
                                status={this.props.columnList.status}
                                dataList={this.props.columnList.listData}
                                titleList={this.props.columnList.titleList}
                             />
                        </div>
                        <Pagination
                            curPage={this.props.columnList.curPage}
                            totalNumber={this.props.columnList.totalSize}
                            pageLimt={this.props.columnList.pageSize}
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
         _getColumnList:(options)=>{
             dispatch(actions.getColumnList(options))
         },
         _dialogHandle:(options)=>{
             dispatch(dialogHandle(options));
         },
         _deleteColumn:(id,callBack)=>{
             dispatch(actions.deleteColumn(id,callBack))
         }
    }
}

const columnList = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

export default columnList;