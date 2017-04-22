/**
 * Created by shenhua on 2017/4/22.
 *
 * 首页最新文章
 */
import Fetch from '../../utils/common/fetch';

export function homeHandle(type,data){
    return {
        type,
        data
    }
}


//获取新闻
export function getNew(page,pageSize){
    return dispatch=>{
        Fetch({
            url:"newPush",
            data:{
                page:page,
                pageSize:pageSize
            },
            success:function(data){
                if(data.code===200000&&data.list.length>0){
                    dispatch(homeHandle("GET_NEW",data.list))
                }
            }
        });
    }
}
