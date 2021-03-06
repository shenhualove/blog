var router = require('koa-router')();
var moment = require('moment');
var mySql  = require('../../utils/mysql');
var multer = require('koa-multer');
var upload = multer({ dest: 'temp_upload/' });
var fs     = require('fs');
var path   = require('path');
var md5    = require('md5');


router.get('/admin', async function (ctx, next) {
    await ctx.render('admin');
});

//登录接口
router.post('/admin/accountLogin', async function (ctx, next) {
    let sql  = "select * from `admin` where userName = '"+ctx.request.body.accountName+"' and passWord = '"+md5(ctx.request.body.password)+"' ";
    let list = await mySql.query(sql);
    if(list.length>0){
        ctx.session.login = "神话";
        ctx.body = {
            status:1,
            data:{
                userName:"神话"
            },
            message:'登录成功'
        }
    }else{
        ctx.body = {
            status:2,
            data:{},
            message:'请输入正确的用户名或密码'
        }
    }

});

//退出登录
router.post('/admin/loginOut', async function (ctx, next) {
    ctx.body = {
        status:1,
        message:'退出登录成功'
    }
});

//上传图片
router.post('/admin/upload',upload.single('file'),async function (ctx, next) {
    let fileName = md5(ctx.req.file.originalname+ctx.req.file.size)+'.'+ctx.req.file.mimetype.split('/')[1];
    let _src     = path.join(__dirname,'../../',ctx.req.file.path);
    let _dst     = path.join(__dirname,'../../','uploads/'+fileName);
    try {
        // 创建读取流
        let readable = fs.createReadStream(_src);
        // 创建写入流
        let writable = fs.createWriteStream(_dst);
        // 通过管道来传输流
        readable.pipe(writable);
        //返回数据
        ctx.body = {
            status:1,
            data:{
                fileName:fileName
            },
            message:"上传成功"
        }
    } catch (e) {
        console.log(e);
        //返回数据
        ctx.body = {
            status:2,
            data:{
                fileName:""
            },
            message:"上传失败"
        }
    }
    //删除临时文件
    fs.unlink(ctx.req.file.path);
});

//获取栏目列表
router.post('/admin/getColumnList', async function (ctx, next) {
    console.log(ctx.session.login)
    let sql  = "select * from `column` order by  `sort` desc";
    let list = await mySql.query(sql);
    let count = await mySql.query("select count(id) as total from `column`");
    ctx.body = {
        status:1,
        data:list,
        count:count[0].total,
        message:'查询成功'
    }
});

//查询栏目
router.post('/admin/getColumn', async function (ctx, next) {
    let id   = ctx.request.body.id;
    let sql  = "select * from `column` where  `id` = "+id;
    let list = await mySql.query(sql);
    ctx.body = {
        status:1,
        data:list[0],
        message:'登录成功'
    }
});

//新增栏目
router.post('/admin/addColumn', async function (ctx, next) {
    let postData={
        title:ctx.request.body.title,
        keyWord:ctx.request.body.keyWord,
        sort:ctx.request.body.sort,
        caption:ctx.request.body.caption,
    };
    let sql="INSERT INTO `column`(`id`, `title`, `keyWord`, `sort`, `caption`, `time`) VALUES (NULL,'"+postData.title+"','"+postData.keyWord+"','"+postData.sort+"','"+postData.caption+"',CURRENT_TIMESTAMP)";
    let result = await mySql.query(sql);
    if(result.affectedRows===1){//判断是否影响一行
        ctx.body = {
            status:1,
            message:'添加栏目成功'
        }
    }else{
        ctx.body = {
            status:2,
            message:'添加栏目失败'
        }
    }
});

//更新栏目
router.post('/admin/updateColumn', async function (ctx, next) {
    let postData={
        id:ctx.request.body.id,
        title:ctx.request.body.title,
        keyWord:ctx.request.body.keyWord,
        sort:ctx.request.body.sort,
        caption:ctx.request.body.caption,
    };
    let sql="UPDATE  `column` SET  `title` = '"+postData.title+"', `keyWord` = '"+postData.keyWord+"'," +
            " `sort` = '"+postData.sort+"', `caption` = '"+postData.caption+"' WHERE `id` = "+postData.id;
    let result = await mySql.query(sql);
    if(result.affectedRows===1){//判断是否影响一行
        ctx.body = {
            status:1,
            message:'修改栏目成功'
        }
    }else{
        ctx.body = {
            status:2,
            message:'修改栏目失败'
        }
    }
});

//删除栏目
router.post('/admin/deleteColumn', async function (ctx, next) {
    let id   = ctx.request.body.id;
    let sql  = "DELETE FROM `column`  WHERE `id`="+id;
    let result = await mySql.query(sql);
    if(result.affectedRows===1){//判断是否影响一行
        ctx.body = {
            status:1,
            message:'删除栏目成功'
        }
    }else{
        ctx.body = {
            status:2,
            message:'删除栏目失败'
        }
    }
});


//获取文章列表
router.post('/admin/getArticleList', async function (ctx, next) {
    var page = {
        curPage:ctx.request.body.curPage,
        pageSize:ctx.request.body.pageSize
    };
    var sql  = "select * from `article` order by id desc LIMIT "+
               (page.curPage-1)*page.pageSize+','+page.pageSize;
    let list = await mySql.query(sql);
    let count = await mySql.query("select count(id) as total from `article`");
    ctx.body = {
        status:1,
        data:list,
        count:count[0].total,
        message:'成功'
    }
});

//查询文章
router.post('/admin/viewArticle', async function (ctx, next) {
    let id   = ctx.request.body.id;
    let sql  = "select * from `article` where  `id` = "+id;
    let list = await mySql.query(sql);
    ctx.body = {
        status:1,
        data:list[0],
        message:'查询成功'
    }
});

//更新文章
router.post('/admin/updateArticle', async function (ctx, next) {
    let postData={
        id:ctx.request.body.id,
        title:ctx.request.body.title,
        keyWord:ctx.request.body.keyWord,
        caption:ctx.request.body.caption,
        imgUrl:ctx.request.body.imgUrl,
        content:ctx.request.body.content,
        columnId:ctx.request.body.columnId,
        columnName:ctx.request.body.columnName,
        author:ctx.request.body.author,
        source:ctx.request.body.source,
        totalReView:ctx.request.body.totalReView,
        totalViews:ctx.request.body.totalViews,
        time:ctx.request.body.time,
        isHot:ctx.request.body.isHot?1:0
    };
    let sql="UPDATE  `article` SET  `title` = '"+postData.title+"', `keyWord` = '"+postData.keyWord+"'," +
            " `caption` = '"+postData.caption+"', `imgUrl` = '"+postData.imgUrl+"', `content` = '"+postData.content+"',"+
            " `columnId` = '"+postData.columnId+"', `columnName` = '"+postData.columnName+"', `author` = '"+postData.author+"',"+
            " `source` = '"+postData.source+"', `totalReview` = '"+postData.totalReView+"', `totalViews` = '"+postData.totalViews+"',"+
            " `time` = '"+postData.time+"', `isHot` = '"+postData.isHot+"' WHERE `id` = "+postData.id;
    let result = await mySql.query(sql);
    if(result.affectedRows===1){//判断是否影响一行
        ctx.body = {
            status:1,
            message:'修改文章成功'
        }
    }else{
        ctx.body = {
            status:2,
            message:'修改文章失败'
        }
    }
});

//新增文章
router.post('/admin/addArticle', async function (ctx, next) {
    let postData={
        title:ctx.request.body.title,
        keyWord:ctx.request.body.keyWord,
        caption:ctx.request.body.caption,
        imgUrl:ctx.request.body.imgUrl,
        content:ctx.request.body.content,
        columnId:ctx.request.body.columnId,
        columnName:ctx.request.body.columnName,
        author:ctx.request.body.author,
        source:ctx.request.body.source,
        totalReView:ctx.request.body.totalReView,
        totalViews:ctx.request.body.totalViews,
        time:ctx.request.body.time,
        isHot:ctx.request.body.isHot?1:0
    };
    let sql="INSERT INTO `article`(`id`, `title`, `keyWord`, `caption`, `imgUrl`,`content`,`columnId`,`columnName`,`author`,`source`,`totalReview`,`totalViews`,`time`, `isHot`) VALUES (NULL,'"+
             postData.title+"','"+postData.keyWord+"','"+postData.caption+"','"+
             postData.imgUrl+"','"+postData.content+"','"+postData.columnId+"','"+
             postData.columnName+"','"+postData.author+"','"+postData.source+"','"+
             postData.totalReView+"','"+postData.totalViews+"','"+postData.time+"','"+
             postData.isHot+"')";
    let result = await mySql.query(sql);
    if(result.affectedRows===1){//判断是否影响一行
        ctx.body = {
            status:1,
            message:'添加文章成功'
        }
    }else{
        ctx.body = {
            status:2,
            message:'添加文章失败'
        }
    }
});

//获取全部栏目
router.post('/admin/getColumnAll', async function (ctx, next) {
    let sql  = "select * from `column`";
    let list = await mySql.query(sql);
    ctx.body = {
        status:1,
        data:list,
        message:'成功'
    }
});

//删除文章
router.post('/admin/deleteArticle', async function (ctx, next) {
    let id   = ctx.request.body.id;
    let sql  = "DELETE FROM `article`  WHERE `id`="+id;
    let result = await mySql.query(sql);
    if(result.affectedRows===1){//判断是否影响一行
        ctx.body = {
            status:1,
            message:'删除文章成功'
        }
    }else{
        ctx.body = {
            status:2,
            message:'删除文章失败'
        }
    }
});

//获取链接列表
router.post('/admin/getLinkList', async function (ctx, next) {
    var page = {
        curPage:ctx.request.body.curPage,
        pageSize:ctx.request.body.pageSize,
        columnId:ctx.request.body.columnId
    };
    let tableName = page.columnId == 1?"link":"study";//1为link,2为study
    var sql  = "select * from `"+tableName+"` order by id desc LIMIT "+
        (page.curPage-1)*page.pageSize+','+page.pageSize;
    let list = await mySql.query(sql);
    let count = await mySql.query("select count(id) as total from `"+tableName+"`");
    ctx.body = {
        status:1,
        data:list,
        count:count[0].total,
        message:'成功'
    }
});

//新增链接
router.post('/admin/addLink', async function (ctx, next) {
    let postData={
        name:ctx.request.body.columnId==1?'link':'study',
        title:ctx.request.body.title,
        url:ctx.request.body.url,
        sort:ctx.request.body.sort,
    };
    let sql="INSERT INTO `"+postData.name+"`(`id`, `title`, `url`, `sort`, `creatTime`) VALUES (NULL,'"+postData.title+"','"+postData.url+"','"+postData.sort+"',CURRENT_TIMESTAMP)";
    let result = await mySql.query(sql);
    if(result.affectedRows===1){//判断是否影响一行
        ctx.body = {
            status:1,
            message:'添加链接成功'
        }
    }else{
        ctx.body = {
            status:2,
            message:'添加链接失败'
        }
    }
});

//查询链接
router.post('/admin/viewLink', async function (ctx, next) {
    let id   = ctx.request.body.id;
    let name = ctx.request.body.name==1?'link':'study';
    let sql  = "select * from `"+name+"` where  `id` = "+id;
    let list = await mySql.query(sql);
    ctx.body = {
        status:1,
        data:list[0],
        message:'查询成功'
    }
});

//更新链接
router.post('/admin/updateLink', async function (ctx, next) {
    let postData={
        id:ctx.request.body.id,
        title:ctx.request.body.title,
        url:ctx.request.body.url,
        sort:ctx.request.body.sort,
        name:ctx.request.body.columnId==1?'link':'study'
    };
    let sql="UPDATE  `"+postData.name+"` SET  `title` = '"+postData.title+"', `url` = '"+postData.url+"'," +
        " `sort` = '"+postData.sort+"' WHERE `id` = "+postData.id;
    let result = await mySql.query(sql);
    if(result.affectedRows===1){//判断是否影响一行
        ctx.body = {
            status:1,
            message:'修改链接成功'
        }
    }else{
        ctx.body = {
            status:2,
            message:'修改链接失败'
        }
    }
});

//删除链接
router.post('/admin/deleteLink', async function (ctx, next) {
    let id   = ctx.request.body.id;
    let columnId = ctx.request.body.columnId;
    let tableName = columnId == 1?"link":"study";//1为link,2为study
    let sql  = "DELETE FROM `"+tableName+"`  WHERE `id`="+id;
    let result = await mySql.query(sql);
    if(result.affectedRows===1){//判断是否影响一行
        ctx.body = {
            status:1,
            message:'删除链接成功'
        }
    }else{
        ctx.body = {
            status:2,
            message:'删除链接失败'
        }
    }
});




//定位到后台首页
router.get('/admin/*', async function (ctx, next) {
    await ctx.render('admin');
});

//定位到前台首页
router.get('/*', async function (ctx, next) {
    await ctx.render('index');
});

module.exports = router;