/**
 * Created by apple on 17/5/16.
 */
import Fetch from '../../../utils/common/fetch';
import {dialogHandle,ajaxErrorLog} from '../dialog';

//触发action
export function handle(data){
    return {
        type:"ARTICLE_LIST_HANDLE",
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

//获取文章列表
export function getArticleList(options){
    return dispatch=>{
        dispatch(handle({
            status:"loading",
            curPage:options.curPage,
            pageSize:options.pageSize
        }));

        Fetch({
            url:"getArticleList",
            data:options,
            success:function(data){
                if(data.status=="1"){
                    if(data.data.length>0){
                        dispatch(handle({
                            listData:data.data,
                            totalSize:data.count,
                            status:"success"
                        }));
                    }else{
                        dispatch(handle({
                            listData:data.data,
                            totalSize:data.count,
                            status:"nothing"
                        }));
                    }
                }else{
                    dispatch(handle({
                        status:"fail"
                    }));
                }
            },
            error:function(){
                dispatch(handle({
                    status:"fail"
                }));
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}

export function deleteArticle(id,fn){
    return dispatch=>{
        Fetch({
            url:"deleteArticle",
            data:{
               id:id
            },
            success:function(data){
                if(data.status=="1"){
                    dispatch(dialogHandle({
                        show:true,
                        type:"tips",
                        tipsType:"success",
                        success:function(){
                            return true;
                        },
                        time:2000,
                        content:data.message
                    }))
                    typeof fn == 'function' && fn();
                }else{
                    dispatch(dialogHandle({
                        show:true,
                        type:"tips",
                        tipsType:"fail",
                        success:function(){
                            return true;
                        },
                        time:2000,
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