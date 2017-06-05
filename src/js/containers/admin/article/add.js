/**
 * Created by apple on 17/5/16.
 */
import React from 'react';
import {connect} from 'react-redux';
import CenterTopNav from '../../../components/admin/common/centerTopNav';
import {dialogHandle} from '../../../actions/admin/dialog';
import * as actions from '../../../actions/admin/article/add';

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
                <CenterTopNav title="文章添加" parentList={[{name:"文章管理"}]} />
                <div className="height100pY plr26">
                    {/*form content begin*/}
                    <div className="pub-form-top clearfix">
                        <ul>
                            <li>
                                <span>文章标题:</span>
                                <input type="text" onChange={this.inputTitle.bind(this,"title")} placeholder="输入文章标题，1-60个字符之间" value={this.props.columnAdd.title} />
                            </li>
                            <li>
                                <span>文章关键字:</span>
                                <input type="text" onChange={this.inputTitle.bind(this,"keyWord")} placeholder="多个关键字用逗号分割，1-60个字符之间" value={this.props.columnAdd.keyWord} />
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>文章简介:</span>
                                <input type="text" onChange={this.inputTitle.bind(this,"caption")} placeholder="输入文章介绍，1-300个字符之间" value={this.props.columnAdd.caption} />
                            </li>
                            <li>
                                <span>文章配图:</span>
                                <form id="articleUploadForm"  method="post" enctype="multipart/form-data">
                                    <input style="display: none" name="fileimg" id="articleImgUpload" placeholder="上传文章缩略图" accept=".png,.gif,.jpg,.jpeg" type="file" />
                                    <label for="articleImgUpload" class="lable-upload-btn">点击选择图片</label>
                                </form>
                                <input id="articleImgUrl" value="{{item.imgUrl}}" type="hidden" />
                                <div id="uploadImgWrap">
                                    <img width="160" height="160" src="/images/upload/admin/{{item.imgUrl}}" />
                                </div>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>所属栏目:</span>
                                <input type="text" onChange={this.inputTitle.bind(this,"caption")} placeholder="请输入栏目说明" value={this.props.columnAdd.caption} />
                            </li>
                            <li>
                                <span>文章作者:</span>
                                <input type="text" onChange={this.inputTitle.bind(this,"sort")} placeholder="输入作者" value={this.props.columnAdd.sort} />
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>文章来源:</span>
                                <input type="text" onChange={this.inputTitle.bind(this,"caption")} placeholder="输入文章来源" value={this.props.columnAdd.caption} />
                            </li>
                            <li>
                                <span>文章评论总数:</span>
                                <input type="text" onChange={this.inputTitle.bind(this,"sort")} placeholder="数字越小越靠前" value={this.props.columnAdd.sort} />
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>文章浏览总数:</span>
                                <input type="text" onChange={this.inputTitle.bind(this,"caption")} placeholder="请输入栏目说明" value={this.props.columnAdd.caption} />
                            </li>
                            <li>
                                <span>文章添加时间:</span>
                                <input readOnly="readonly" type="text" onChange={this.inputTitle.bind(this,"sort")} placeholder="数字越小越靠前" value={this.props.columnAdd.sort} />
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>是否推荐:</span>
                                <input type="text" onChange={this.inputTitle.bind(this,"caption")} placeholder="请输入栏目说明" value={this.props.columnAdd.caption} />
                            </li>
                            <li>
                                <span>文章添加时间:</span>

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