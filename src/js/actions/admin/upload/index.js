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


        Fetch({
            url:"upload",
            contentType:"multipart/form-data",
            data:options,
            success:function(data){
                if(data.status==1){

                }else{

                }
            },
            error:function(){

            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}