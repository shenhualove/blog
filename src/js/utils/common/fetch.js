/**
 * Created by shenhua on 2017/4/22.
 */
//接口域名
const host="";
//接口URL集合
const urls={
    /*通用模块开始*/
    studyLinks : "/studyLinks",//文档链接
    friendLinks: "/friendLinks",//友情链接
    columnList: "/columnList",//栏目列表
    /*通用模块结束*/

    /*首页开始*/
    hotRead   : "/hotRead",//推荐集合
    newPush   : "/newPush",//最新发布列表
    /*首页结束*/

    /*列表页开始*/
    list      : "/list",//栏目列表页
    /*列表页结束*/

    /*列表页开始*/
    page      : "/page",//栏目内容页页
    /*列表页结束*/

    //后台
    accountLogin:"/admin/accountLogin",//登录
    getColumnList:"/admin/getColumnList",//获取栏目列表
    getColumnAll:"/admin/getColumnAll",//获取所有栏目
    getArticleList:"/admin/getArticleList",//获取文章列表
    deleteArticle:"/admin/deleteArticle",//删除文章

};

function Fetch(options){

    //请求头部参数
    let sendHeader={
        method: options.type?options.type:"POST",//发送方式
        headers: {
            "Content-Type":options.contentType?options.contentType:"application/x-www-form-urlencoded"
        },//请求头部格式
        body:options.data?sortKey(options.data):'' //发送数据
    }

    //初始化请求
    let sendUrl=new Request(host+urls[options.url]);//构造请求资源
    fetch(sendUrl,sendHeader).then(function(res) {
        if (res.ok) {
            //成功返回数据
            res.json().then(function(data) {
                if(typeof options.success==="function"){options.success(data)};
            });
        } else {
            //返回错误信息
            var errText;
            switch(res.status){
                case 403:
                    errText="服务器禁止访问,请重新登录试试";
                    break;
                case 404:
                    errText="未找到服务器,请重新登录试试";
                    break;
                case 500:
                    errText="服务器未响应,请重新登录试试";
                    break;
                case 503:
                    errText="服务器不可用,请重新登录试试";
                    break;
                case 504:
                    errText="网关超时,请重新登录试试";
                    break;
                default :
                    errText="异常错误，请重新在试";
                    break;
            }
            if(typeof options.error==="function"){options.error(res.status,errText)};
        }
    }, function(e) {
        alert("网络异常，请求错误");
    });

}

//对象转换为key=value&key=value
function sortKey(data){
    let tempData='';
    for(let key in data){
        tempData+=key+'='+data[key]+'&';
    }
    return tempData;
}

export default Fetch;