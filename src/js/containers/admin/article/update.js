/**
 * Created by shenhua on 2017/6/4.
 */
import React from 'react';
import {connect} from 'react-redux';
import CenterTopNav from '../../../components/admin/common/centerTopNav';
import SelectBox from '../../../components/admin/common/selectBox';
import {dialogHandle} from '../../../actions/admin/dialog';
import * as actions from '../../../actions/admin/article/update';

class Update extends React.Component{
    //监听输入事件
    inputTitle(key,e){
        let obj = {};
        obj[key] = e.target.value;
        this.props._handle(obj);
    }

    //栏目选择事件
    selectClick(id,val,name){
        if(id==1){
            this.props._handle({
                columnId:val,
                columnName:name
            })
        }else{
            this.props._handle({
                isHot:val
            })
        }
    }

    //获取栏目列表
    showColumn(){
        let temp_arr=[];
        this.props.articleUpdate.columnList.map((val,key)=>{
            temp_arr.push({value:val.id,name:val.title})
        });
        return temp_arr;
    }

    //是否推荐
    showHot(){
        let arr = [{value:true,name:"是"},{value:false,name:"否"}];
        return arr;
    }

    //上传图片
    upload(){

    }

    //保存
    submitClick(){
        let props = this.props.articleUpdate;
        let title = props.title,keyWord = props.keyWord,caption = props.caption,
            imgUrl = props.imgUrl,content = props.content,columnId = props.columnId,
            columnName = props.columnName,author = props.author,source = props.source,
            totalReView = props.totalReView,totalViews = props.totalViews,time = props.time,
            isHot = props.isHot,id = this.props.params.id;

        if(this.props.articleAdd.isSave){
            this.props._dialogHandle({
                type: "tips",
                time: 2000,
                content: "正在保存中，请勿重复提交！",
                tipsType: "warning",
                show: true
            })
        }else{
            this.props._updateArticle({
                id,
                title,
                keyWord,
                caption,
                imgUrl,
                content,
                columnId,
                columnName,
                author,
                source,
                totalReView,
                totalViews,
                time,
                isHot
            })
        }
    }

    componentDidMount(){
        this.props._getColumnAll();
        this.props._viewArticle(this.props.params.id);
    }

    render(){
        return(
            <div className="height100p">
                <CenterTopNav title="文章修改" parentList={[{name:"文章管理"}]} />
                <div className="height100pY plr26">
                    {/*form content begin*/}
                    <div className="pub-form-top clearfix">
                        <ul>
                            <li>
                                <span>文章标题:</span>
                                <input type="text" onChange={this.inputTitle.bind(this,"title")} placeholder="输入文章标题，1-60个字符之间" value={this.props.articleUpdate.title} />
                            </li>
                            <li>
                                <span>文章关键字:</span>
                                <input type="text" onChange={this.inputTitle.bind(this,"keyWord")} placeholder="多个关键字用逗号分割，1-60个字符之间" value={this.props.articleUpdate.keyWord} />
                            </li>
                            <li>
                                <span>所属栏目:</span>
                                <SelectBox
                                    callBack={this.selectClick.bind(this,1)}
                                    value={this.props.articleUpdate.columnId}
                                    list={this.showColumn()}
                                    />
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>文章简介:</span>
                                <textarea  onChange={this.inputTitle.bind(this,"caption")} placeholder="输入文章介绍，1-300个字符之间" value={this.props.articleUpdate.caption} ></textarea>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>文章配图:</span>
                                <form id="articleUploadForm"  method="post" enctype="multipart/form-data">
                                    <input style={{display: "none"}} name="fileimg" id="articleImgUpload" placeholder="上传文章缩略图" accept=".png,.gif,.jpg,.jpeg" type="file" />
                                    <label htmlFor="articleImgUpload" onClick={this.upload.bind(this)} className="lable-upload-btn">点击选择图片</label>
                                </form>
                                <div id="uploadImgWrap" >
                                    <img width="160" height="160" src="/images/upload/admin/" />
                                </div>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>作者:</span>
                                <input type="text" onChange={this.inputTitle.bind(this,"author")} placeholder="输入作者" value={this.props.articleUpdate.author} />
                            </li>
                            <li>
                                <span>来源:</span>
                                <input type="text" onChange={this.inputTitle.bind(this,"source")}  value={this.props.articleUpdate.source} />
                            </li>
                            <li>
                                <span>评论总数:</span>
                                <input type="text" onChange={this.inputTitle.bind(this,"totalReView")}  value={this.props.articleUpdate.totalReView} />
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>浏览总数:</span>
                                <input type="text" onChange={this.inputTitle.bind(this,"totalViews")}  value={this.props.articleUpdate.totalViews} />
                            </li>
                            <li>
                                <span>添加时间:</span>
                                <input  type="text" onChange={this.inputTitle.bind(this,"time")}  value={this.props.articleUpdate.time} />
                            </li>
                            <li>
                                <span>是否推荐:</span>
                                <SelectBox
                                    callBack={this.selectClick.bind(this,2)}
                                    value={this.props.articleUpdate.isHot}
                                    list={this.showHot()}
                                    />
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>文章内容:</span>
                            </li>
                        </ul>
                        <div className="articleContent">
                            <textarea onChange={this.inputTitle.bind(this,"content")} placeholder="仅限于MARKDOWN语法" value={this.props.articleUpdate.content}></textarea>
                        </div>
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
        _updateArticle:(options)=>{
            dispatch(actions.updateArticle(options))
        },
        _viewArticle:(id)=>{
            dispatch(actions.viewArticle(id))
        },
        _getColumnAll:(options)=>{
            dispatch(actions.getColumnAll(options))
        },
        _dialogHandle:(options)=>{
            dispatch(dialogHandle(options))
        }
    }
}

const articleUpdate = connect(
    mapStateToProps,
    mapDispatchToProps
)(Update);

export default articleUpdate;