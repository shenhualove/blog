/**
 * Created by shenhua on 2017/5/20.
 */
//初始化state
const initalize = {
    columnId:1,//选择栏目
    columnList:[{value:1,name:"友情链接"},{value:2,name:"学习文档"}],//栏目列表
    title:"",//链接标题
    temp_options:{
        columnId:1,//选择栏目
        title:"",//链接标题
    },//临时搜索条件
    listData:[],//数据列表
    curPage:1,//默认为当前第一页
    pageSize:10,//默认显示多少条
    totalSize:0,//总条数
    status:"loading",//默认请求加载中
    titleList:[
        {title:"链接名称",type:"title"},
        {title:"链接地址",type:"url"},
        {title:"链接排序",type:"sort"},
        {title:"添加时间",type:"creatTime"},
        {title:"操作",htmlType:[
            {type:"button",text:"修改",callBack:null,param:"id"},
            {type:"button",text:"删除",callBack:null,param:"id"}
        ]}
    ]
};

function linkList (state = initalize,action) {
    switch (action.type) {
        case "LINK_LIST_HANDLE"  :
            return Object.assign({},state,action.data);
        default :
            return state;
    }
}

export default linkList;
