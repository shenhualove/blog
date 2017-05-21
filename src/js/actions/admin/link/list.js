/**
 * Created by apple on 17/5/16.
 */
import Fetch from '../../../utils/common/fetch';
import {dialogHandle,ajaxErrorLog} from '../dialog';

//触发action
export function handle(data){
    return {
        type:"LINK_LIST_HANDLE",
        data
    }
}

//获取文章列表
export function getLinkList(options){
    return dispatch=>{
        dispatch(handle({
            status:"loading",
            curPage:options.curPage,
            pageSize:options.pageSize
        }));

        Fetch({
            url:"getLinkList",
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

export function deleteLink(id,cid,fn){
    return dispatch=>{
        Fetch({
            url:"deleteLink",
            data:{
                id:id,
                columnId:cid
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
                    console.log(fn)
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