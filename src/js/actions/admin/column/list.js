/**
 * Created by apple on 17/5/16.
 */
import Fetch from '../../../utils/common/fetch';
import {handle} from '../../common';
import {dialogHandle,ajaxErrorLog} from '../dialog';

const handleText="COLUMN_LIST_HANDLE";

//触发action
export function columnListHandle(data){
    return dispatch=>{
        dispatch(handle(handleText,data));
    }
}

//获取栏目列表
export function getColumnList(options){
    return dispatch=>{
        dispatch(handle(handleText,{
            curPage:options.curPage,
            pageSize:options.pageSize
        }));
        
        Fetch({
            url:"getColumnList",
            data:{
                pageSize:options.pageSize,
                curPage:options.curPage
            },
            success:function(data){
                if(data.status=="1"){
                    dispatch(handle("GET_COLUMN_LIST",data.data));
                }else{
                    dispatch(handle(handleText,{
                        errorMsg:data.message,
                        errorShow:true,
                        loginHash:true
                    }));
                }
            },
            error:function(){
                dispatch(handle(handleText,{
                    loginHash:true
                }));
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}