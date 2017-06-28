var router = require('koa-router')();
var mySql  = require('../../utils/mysql');
var showdown  = require('showdown');
var converter = new showdown.Converter();//MARKDOWN插件
var moment = require('moment');//时间插件

/* 栏目列表 */
router.post('/columnList', async function (ctx, next) {
  var sql="select * from `column` order by sort asc";
  let result = await mySql.query(sql);
  ctx.body = {
    code:200000,
    list:result
  }
});

/*首页最新发布*/
router.post('/newPush', async function (ctx, next) {
  var page = {
    curPage:ctx.request.body.page,
    pageSize:ctx.request.body.pageSize
  };
  var sql="select * from `article` where isHot=0 order by time desc LIMIT "+
          (page.curPage-1)*page.pageSize+','+page.pageSize;
  let result = await mySql.query(sql);
  let rows = await mySql.query("select count(id) as total from `article`");
  ctx.body = {
    code:200000,
    total:rows[0]["count(id)"],
    count:Math.ceil(rows[0]["count(id)"]/page.pageSize),
    list:result
  }
});

/* 列表页 */
router.post('/list', async function (ctx, next) {
  var page = {
    columnId:ctx.request.body.columnId,
    curPage:ctx.request.body.page,
    pageSize:ctx.request.body.pageSize
  };
  var sql="select * from `article` where columnId="+page.columnId+" and isHot=0 order by time desc LIMIT "+
          (page.curPage-1)*page.pageSize+','+page.pageSize;
  let result = await mySql.query(sql);
  if(result.length>0){
    for(var i=0;i<result.length;i++){
      result[i].time=moment(result[i].time).format("YYYY-MM-DD");
    }
  }
  let rows = await mySql.query("select count(id) from `article`");
  if(result.length>0){
    ctx.body = {
      code:200000,
      total:rows[0]["count(id)"],
      count:Math.ceil(rows[0]["count(id)"]/page.pageSize),
      list:result,
      columnName:result[0].columnName
    }
  }else{
    //没有数据去查询栏目名称
    var sqlColumn="select * from `column` where id="+page.columnId;
    let rs = await mySql.query(sqlColumn);
    ctx.body = {
      code:200000,
      total:rows[0]["count(id)"],
      count:Math.ceil(rows[0]["count(id)"]/page.pageSize),
      list:result,
      columnName:rs[0].title
    }
  }

});

/* 内容页 */
router.post('/page', async function (ctx, next) {
  var page = {
    id:ctx.request.body.id
  };
  var sql="SELECT * FROM `article` WHERE id="+page.id;
  let result = await mySql.query(sql);
  if(result.length===1){//判断是否一行
    result[0].time=moment(result[0].time).format("YYYY-MM-DD");
    result[0].content=converter.makeHtml(result[0].content);//MARKDOWN语法转HTML
    ctx.body = {
      code:200000,
      list:result,
      tips:"查询文章成功"
    }
  }else{
    ctx.body = {
      code:400000,
      tips:"查询文章失败"
    }
  }
});


/* 学习文档 */
router.post('/studyLinks', async function (ctx, next) {
  var sql="select * from `study` order by sort desc";
  let result = await mySql.query(sql);
  ctx.body = {
    code:200000,
    list:result
  }
});

/* 友情链接 */
router.post('/friendLinks', async function (ctx, next) {
  var sql="select * from `link` order by sort desc";
  let result = await mySql.query(sql);
  ctx.body = {
    code:200000,
    list:result
  }
});

module.exports = router;
