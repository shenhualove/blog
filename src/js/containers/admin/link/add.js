/**
 * Created by apple on 17/5/16.
 */
import React from 'react';
import {connect} from 'react-redux';
import CenterTopNav from '../../../components/admin/common/centerTopNav';
import SelectBox from '../../../components/admin/common/selectBox';
import {dialogHandle} from '../../../actions/admin/dialog';
import * as actions from '../../../actions/admin/link/add';

class Add extends React.Component{
    //监听输入事件
    inputTitle(key,e){
        let obj = {};
        obj[key] = e.target.value;
        this.props._handle(obj);
    }

    //栏目选择事件
    selectClick(val,name){
        this.props._handle({
            columnId:val
        })
    }

    //保存
    submitClick(){
        if(this.props.linkAdd.isSave){
            this.props._dialogHandle({
                type: "tips",
                time: 2000,
                content: "正在保存中，请勿重复提交！",
                tipsType: "warning",
                show: true
            })
        }else{
            this.props._addLink({
                title:this.props.linkAdd.title,
                url:this.props.linkAdd.url,
                sort:this.props.linkAdd.sort,
                columnId:this.props.linkAdd.columnId,
            })
        }
    }

    render(){
        return(
            <div className="height100p">
                <CenterTopNav title="链接添加" parentList={[{name:"链接管理"}]} />
                <div className="height100pY plr26">
                    {/*form content begin*/}
                    <div className="pub-form-top clearfix">
                        <ul>
                            <li>
                                <span>链接名称:</span>
                                <input type="text" onChange={this.inputTitle.bind(this,"title")} placeholder="链接名称" value={this.props.linkAdd.title} />
                            </li>
                            <li>
                                <span>链接地址:</span>
                                <input type="text" onChange={this.inputTitle.bind(this,"url")} placeholder="链接地址" value={this.props.linkAdd.url} />
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>链接排序:</span>
                                <input type="text" onChange={this.inputTitle.bind(this,"sort")} placeholder="数字越小越靠前" value={this.props.linkAdd.sort} />
                            </li>
                            <li>
                                <span>所属栏目:</span>
                                <SelectBox
                                    callBack={this.selectClick.bind(this)}
                                    value={this.props.linkAdd.columnId}
                                    list={this.props.linkAdd.columnList}
                                    />
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
        _addLink:(options)=>{
            dispatch(actions.addLink(options))
        },
        _dialogHandle:(options)=>{
            dispatch(dialogHandle(options))
        }
    }
}

const linkAdd = connect(
    mapStateToProps,
    mapDispatchToProps
)(Add);

export default linkAdd;