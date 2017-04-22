/**
 * Created by shenhua on 2017/4/22.
 *
 * 文章详情页
 */
import Fetch from '../../utils/common/fetch';

export function pageHandle(type,data){
    return {
        type,
        data
    }
}


//获取内容
export function getPage(id){
    return dispatch=>{
        Fetch({
            url:"page",
            data:{
                id:id
            },
            success:function(data){
                if(data.code===200000&&data.list.length>0){
                    dispatch(pageHandle("GET_NEW",data.list))
                }
            }
        });
    }
}