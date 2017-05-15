/**
 * Created by ex-wangxin on 2017/4/5. 表格插件
 */
import React from 'react';
import {connect} from 'react-redux';
/*import {siteAppicationHandle} from '../../../actions/helpLoan/qualExam/siteAppication';*/

class tableList extends React.Component {

    componentDidMount() {
        //console.log(this.props);//取参数
    }

    tableThead(list, sortList) {
        let thead = [];
        list.map((item, i)=> {
            thead.push(
                <th key={i}>{item[sortList[i]]}</th>
            );
        });
        return thead;
    }

    tableTbody(list, sortList) {
        let tbody = [];
        for (var i = 0; i < list.length; i++) {
            let td = [];
            for (var j = 0; j < sortList.length; j++) {
                if (list[i][sortList[j]] instanceof Object) {
                    if(list[i][sortList[j]].type=='jumpUrl'){//点击跳转类型
                        td.push(
                            <td key={j + i}> {list[i][sortList[j]]}</td>
                        );
                    }else if(list[i][sortList[j]].type=='colors'){//颜色变换类型
                        td.push(
                            <td key={j + i} className={list[i][sortList[j]].colors}>{list[i][sortList[j]].text}</td>
                        );
                    }else if(list[i][sortList[j]].type=='btnDeal'){//添加按钮类型
                        td.push(
                            <td key={j + i}>
                                <a href="javascript:;" className={list[i][sortList[j]].className}
                                   onClick={list[i][sortList[j]].callBack}>
                                    {list[i][sortList[j]].text}
                                </a>
                            </td>
                        );
                    }else{

                    }
                    /*if (sortList[j] == 'deal') {//加 处理按钮
                     td.push(
                     <td key={j + i}>
                     <a href="javascript:;" className={list[i][sortList[j]].className}
                     onClick={list[i][sortList[j]].callBack}>
                     {list[i][sortList[j]].text}
                     </a>
                     </td>
                     );
                     } else if(sortList[j] == 'tableJumpName'){//加 点击跳转链接
                     td.push(
                     <td key={j + i}> {list[i][sortList[j]]}</td>
                     );
                     }else if(sortList[j] == 'tableJumpId'){//加 点击跳转链接
                     td.push(
                     <td key={j + i}> {list[i][sortList[j]]}</td>
                     );
                     }else {//相应字段颜色变化
                     td.push(
                     <td key={j + i} className={list[i][sortList[j]].colors}>{list[i][sortList[j]].text}</td>
                     );
                     }*/
                } else {
                    td.push(
                        <td key={j + i}>{list[i][sortList[j]]}</td>
                    );
                }
            }
            tbody.push(<tr key={i}>{td}</tr>);
        }
        return tbody;
    }

    thead(theadList) {
        let sortList = [];
        for (var i = 0; i < theadList.length; i++) {
            for (var keys in theadList[i]) {
                sortList.push(keys);
            }
        }
        return sortList;
    }

    render() {
        let sortList = this.thead(this.props.dataD.theadList);
        let thead = this.tableThead(this.props.dataD.theadList, sortList);
        let tbody = this.tableTbody(this.props.dataD.tbodyList, sortList);
        return (
            <table className="table-list">
                <thead>
                <tr>{thead}</tr>
                </thead>
                <tbody>{tbody}</tbody>
            </table>
        )
    }
}

export default  tableList;

