/**
 * Created by shenhua on 2017/6/4.
 */
import Fetch from '../../../utils/common/fetch';
import {dialogHandle,ajaxErrorLog} from '../dialog';
import {browserHistory} from 'react-router';
const moment = require('../../../utils/common/moment');

//触发action
export function handle(data){
    return {
        type:"ARTICLE_UPDATE_HANDLE",
        data
    }
}

//获取全部栏目
export function getColumnAll(options){
    return dispatch=>{
        Fetch({
            url:"getColumnAll",
            success:function(data){
                if(data.status=="1"){
                    dispatch(handle({
                        columnList:data.data,
                    }));
                }
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}

//查看文章
export function viewArticle(id,name){
    return dispatch=>{
        Fetch({
            url:"viewArticle",
            data:{
                id,
                name
            },
            success:function(data){
                if(data.status==1){
                    dispatch(handle({
                        title:data.data.title,
                        keyWord:data.data.keyWord,
                        caption:data.data.caption,
                        imgUrl:data.data.imgUrl,
                        content:data.data.content,
                        columnId:data.data.columnId,
                        columnName:data.data.columnName,
                        author:data.data.author,
                        source:data.data.source,
                        totalReView:data.data.totalReview,
                        totalViews:data.data.totalViews,
                        time:moment(data.data.time).format('YYYY-MM-DD'),
                        isHot:data.data.isHot==0?false:true
                    }));
                }else{
                    dispatch(dialogHandle({
                        show:true,
                        type:"tips",
                        tipsType:"fail",
                        content:data.message
                    }))
                }
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}

//更新文章
export function updateArticle(options){
    return dispatch=>{
        dispatch(handle({
            isSave:true
        }));

        Fetch({
            url:"updateArticle",
            data:options,
            success:function(data){
                if(data.status==1){
                    dispatch(dialogHandle({
                        show:true,
                        type:"tips",
                        tipsType:"success",
                        hide:function(){
                            browserHistory.push("/admin/article/list");
                        },
                        time:2000,
                        content:data.message
                    }))
                }else{
                    dispatch(dialogHandle({
                        show:true,
                        type:"tips",
                        tipsType:"fail",
                        content:data.message
                    }))
                }
                dispatch(handle({
                    isSave:false
                }));
            },
            error:function(){
                dispatch(handle({
                    isSave:false
                }));
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}