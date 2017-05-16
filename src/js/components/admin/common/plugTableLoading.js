/**
 * Created by ex-wangxin on 2017/4/20.
 *
 * 例子：<PlugTableLoading status={_that.props.customerInfoLoanQuery.tbodyList} colSpanCount='7' classNameEnter=""/>;
 * status ajax 加载状态   loading 加载中  success加载成功  fail 加载失败  nothing暂无数据
 * colSpanCount 合并列数
 * classNameEnter 传入的class 名称    可为空
 *
 */
import React from 'react';

class PlugTableLoading extends React.Component {
    creatInnerHtml(status){
        let innerHtml=[];
        //loading 加载中  success加载成功  fail 加载失败  nothing暂无数据
        if(status=='loading'){
            innerHtml.push(
                <td key="0" colSpan={this.props.colSpanCount}><span></span></td>
            );
        }else if(status=='fail'){
            innerHtml.push(
                <td key="0" className="fail-color" colSpan={this.props.colSpanCount}>数据请求失败</td>
            )
        }else if(status=='nothing'){
            innerHtml.push(
                <td key="0" className="fail-color" colSpan={this.props.colSpanCount}>暂无数据</td>
            )
        }
        return innerHtml;
    }

    render() {
        return (
            <tr className={'plug-table-loading '+this.props.classNameEnter}>
                {this.creatInnerHtml(this.props.status)}
            </tr>
        )
    }
}

export default  PlugTableLoading;