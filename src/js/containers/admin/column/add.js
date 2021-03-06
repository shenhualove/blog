/**
 * Created by apple on 17/5/16.
 */
import React from 'react';
import {connect} from 'react-redux';
import CenterTopNav from '../../../components/admin/common/centerTopNav';
import {dialogHandle} from '../../../actions/admin/dialog';
import * as actions from '../../../actions/admin/column/add';

class Add extends React.Component{
    //监听输入事件
    inputTitle(key,e){
        let obj = {};
        obj[key] = e.target.value;
        this.props._handle(obj);
    }

    //保存
    submitClick(){
        if(this.props.columnAdd.isSave){
            this.props._dialogHandle({
                type: "tips",
                time: 2000,
                content: "正在保存中，请勿重复提交！",
                tipsType: "warning",
                show: true
            })
        }else{
            this.props._addColumn({
                title:this.props.columnAdd.title,
                keyWord:this.props.columnAdd.keyWord,
                caption:this.props.columnAdd.caption,
                sort:this.props.columnAdd.sort,
            })
        }
    }

    render(){
        return(
            <div className="height100p">
                <CenterTopNav title="栏目添加" parentList={[{name:"栏目管理"}]} />
                <div className="height100pY plr26">
                    {/*form content begin*/}
                    <div className="pub-form-top clearfix">
                        <ul>
                            <li>
                                <span>栏目名称:</span>
                                <input type="text" onChange={this.inputTitle.bind(this,"title")} placeholder="请输入栏目名称" value={this.props.columnAdd.title} />
                            </li>
                            <li>
                                <span>栏目关键字:</span>
                                <input type="text" onChange={this.inputTitle.bind(this,"keyWord")} placeholder="请输入栏目关键字" value={this.props.columnAdd.keyWord} />
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>栏目说明:</span>
                                <input type="text" onChange={this.inputTitle.bind(this,"caption")} placeholder="请输入栏目说明" value={this.props.columnAdd.caption} />
                            </li>
                            <li>
                                <span>栏目排序:</span>
                                <input type="text" onChange={this.inputTitle.bind(this,"sort")} placeholder="数字越小越靠前" value={this.props.columnAdd.sort} />
                            </li>
                        </ul>
                        <div className="pub-form-btns clearfix">
                            <div className="left">
                                <button onClick={this.submitClick.bind(this)}>添加</button>
                            </div>
                        </div>

                    </div>
                    {/*form content end*/}
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
        _addColumn:(options)=>{
            dispatch(actions.addColumn(options))
        },
        _dialogHandle:(options)=>{
            dispatch(dialogHandle(options))
        }
    }
}

const columnAdd = connect(
    mapStateToProps,
    mapDispatchToProps
)(Add);

export default columnAdd;