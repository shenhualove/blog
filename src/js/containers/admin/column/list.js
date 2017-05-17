/**
 * Created by apple on 17/5/16.
 */
import React from 'react';
import {connect} from 'react-redux';
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
    getData(curPage,pageSize){
        this.props._getColumnList({
            curPage:curPage,
            pageSize:pageSize,
        })
    }

    componentDidMount(){
        this.getData(this.props.columnList.curPage,this.props.columnList.pageSize);
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
         }
    }
}

const columnList = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

export default columnList;