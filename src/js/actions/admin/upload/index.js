/**
 * Created by apple on 17/6/13.
 */
import Fetch from '../../../utils/common/fetch';
import {dialogHandle,ajaxErrorLog} from '../dialog';

//触发action
export function handle(data){
    return {
        type:"UPLOAD_HANDLE",
        data
    }
}

//添加链接
export function uploadFile(options){
    return dispatch=>{
        dispatch(handle({
            load:true
        }));
        Fetch({
            url:"upload",
            contentType:"multipart/form-data",
            data:{data:options.data},
            success:function(data){
                if(data.status==1){
                    dispatch(handle({
                        fileUrl:data.data.fileName
                    }));
                    dispatch(dialogHandle({
                        show:true,
                        type:"tips",
                        tipsType:"success",
                        content:data.message
                    }));
                    typeof options.success === 'function' && options.success(data.data.fileName);
                }else{
                    dispatch(dialogHandle({
                        show:true,
                        type:"tips",
                        tipsType:"fail",
                        content:data.message
                    }))
                }
                dispatch(handle({
                    load:false
                }));
            },
            error:function(){
                dispatch(handle({
                    load:false
                }));
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}