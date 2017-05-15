-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 15, 2017 at 02:34 AM
-- Server version: 5.5.36-log
-- PHP Version: 5.5.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `shenhua`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `userName` text NOT NULL COMMENT '用户名',
  `passWord` text NOT NULL COMMENT '密码',
  `nickName` text COMMENT '昵称',
  `ip` text COMMENT '登录ip地址',
  `lastLoginTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '最后登录时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `userName`, `passWord`, `nickName`, `ip`, `lastLoginTime`) VALUES
(1, 'shenhua', 'e10adc3949ba59abbe56e057f20f883e', '神话', '192.168.1.1', '2016-08-02 16:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE IF NOT EXISTS `article` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL COMMENT '文章标题',
  `keyWord` varchar(60) DEFAULT NULL COMMENT '文章关键字',
  `caption` varchar(300) NOT NULL COMMENT '文章说明',
  `imgUrl` varchar(300) DEFAULT NULL COMMENT '文章缩略图',
  `content` text NOT NULL COMMENT '文章内容',
  `columnId` int(6) NOT NULL COMMENT '所属栏目id',
  `columnName` varchar(40) NOT NULL COMMENT '所属栏目名称',
  `author` varchar(30) DEFAULT NULL COMMENT '作者',
  `source` varchar(30) DEFAULT NULL COMMENT '来源',
  `totalReview` int(10) DEFAULT '0' COMMENT '文章评论总数',
  `totalViews` int(10) DEFAULT '0' COMMENT '文章浏览总数',
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '添加/修改时间',
  `isHot` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `columnId` (`columnId`),
  KEY `columnName` (`columnName`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=36 ;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`id`, `title`, `keyWord`, `caption`, `imgUrl`, `content`, `columnId`, `columnName`, `author`, `source`, `totalReview`, `totalViews`, `time`, `isHot`) VALUES
(30, 'node.js爬虫之gbk网页中文乱码解决方案', 'node.js爬虫之gbk网页中文乱码解决方案', '之前在用 node 做爬虫时碰到的中文乱码问题一直没有解决，今天整理下备忘。（PS：网上一些解决方案都已经不行了）\n中文乱码具体是指用 node 请求 gbk 编码的网页，无法正确获取网页中的中文（需要转码），"gbk" 和 "网页中的中文" 两个条件是缺一不可的。可以获取 utf-8 编码的网页中的中文，也可以获取 gbk 编码网页中的英文数字等。', 'fileimg-3c73d4779d50f491f1c8a8b2abc124ca.jpg', '<p>之前在用 node 做爬虫时碰到的中文乱码问题一直没有解决，今天整理下备忘。（PS：网上一些解决方案都已经不行了）</p>\n\n<p>中文乱码具体是指用 node 请求 gbk 编码的网页，无法正确获取网页中的中文（需要转码），"gbk" 和 "网页中的中文" 两个条件是缺一不可的。可以获取 utf-8 编码的网页中的中文，也可以获取 gbk 编码网页中的英文数字等。</p>\n\n<p>举个简单的例子。获取 http://acm.hdu.edu.cn/statistic.php?pid=1000 排名第一的答案的 username，是为 "极光炫影"。刷刷刷写下如下代码：</p>\n\n<pre><code>\nvar cheerio = require("cheerio")\n  , superagent = require("superagent")\n  , express = require("express");\n\nvar url = "http://acm.hdu.edu.cn/statistic.php?pid=1000";\nvar app = express();\n\napp.get("/", function (req, res, next) {\n\n  superagent.get(url)\n    .end(function (err, sres) {\n      var html = sres.text;\n      var $ = cheerio.load(html, {decodeEntities: false});\n      var ans = $(".table_text td a").eq(0).html();\n      res.send(ans);\n    });\n  });\n\napp.listen(3000, function () {\n  console.log("app is listening at port 3000");\n});\n</code></pre>\n\n<p>得到了乱码，如下：</p>\n<pre><code>������Ӱ</code></pre>\n<p>如何获取正确的中文呢？这里提供几个解决方案应急（不关心原理，只是为了应急）。</p>\n<p>方法一：</p>\n<p>使用 superagent-charset 模块。</p>\n<pre><code>var cheerio = require("cheerio")\n  , superagent = require("superagent-charset")\n  , express = require("express");\n\nvar url = "http://acm.hdu.edu.cn/statistic.php?pid=1000";\nvar app = express();\n\napp.get("/", function (req, res, next) {\n\n  superagent.get(url)\n    .charset("gbk")\n    .end(function (err, sres) {\n      var html = sres.text;\n      var $ = cheerio.load(html, {decodeEntities: false});\n      var ans = $(".table_text td a").eq(0).html();\n      res.send(ans);\n    });\n\n});\n\napp.listen(3000, function () {\n  console.log("app is listening at port 3000");\n});</code></pre>\n\n<p>使用非常简单，只需要引入 superagent-charset 模块，且在链式调用时加入 charset 参数即可。superagent-charset 模块包括了 superAgent 模块以及 iconv-lite 模块。</p>\n<p>方法二：</p>\n\n<p>直接用 iconv-lite 模块进行转码。</p>\n\n<p>iconv-lite 是一个进行编码转换的模块（node 默认编码 utf-8）。需要 decode 的编码必须是 Buffer 类型。</p>\n<p>用 http 模块：</p>\n<pre><code>\n http.get(url, function(sres) {\n  var chunks = [];\n\n  sres.on("data", function(chunk) {\n    chunks.push(chunk);\n  });\n\n  sres.on("end", function() {\n    // 将二进制数据解码成 gb2312 编码数据\n    var html = iconv.decode(Buffer.concat(chunks), "gb2312");\n    var $ = cheerio.load(html, {decodeEntities: false});\n    var ans = $(".table_text td a").eq(0).html();\n    res.send(ans);\n  });\n});\n</code></pre>\n<p>用 request 模块：</p>\n<pre><code>\n request({\n  url: url, \n  encoding: null  // 关键代码\n}, function (err, sres, body) {\n  var html = iconv.decode(body, "gb2312")\n  var $ = cheerio.load(html, {decodeEntities: false});\n  var ans = $(".table_text td a").eq(0).html();\n  res.send(ans);\n});\n</code></pre>\n<p>用 iconv 进行 decode 传入的参数必须是 Buffer。</p>\n<p>iconv-lite 模块能配合 http 模块以及 request 模块使用，却不能直接和 superAgent 模块使用。 因为 superAgent 是以 utf8 去取数据，然后再用 iconv 转也是不行的。 页面是 gbk 编码的，sres.text 已经是 decode 过了的结果，也就是说它已经被转换成 utf8 了，再转换成 buffer 出来的结果必须是不正确的。</p>', 22, 'node.js', '神话', '转载', 0, 0, '2016-11-13 16:00:00', 0),
(31, '各种姿势无刷新上传图片', '各种姿势无刷新上传图片', '随着互联网的发展，网站界面越来越注重用户体验，在用户填写表单的时候经常上传图片，而且页面不能刷新。本章内容重点汇总讲解如何无刷新上传图片。', 'fileimg-4fcf64bd257f2eb113cfce1d26e19194.jpg', '<p>随着互联网的发展，网站界面越来越注重用户体验，在用户填写表单的时候经常上传图片，而且页面不能刷新。本章内容重点汇总讲解如何无刷新上传图片。</p>\n\n####过去常用的无刷新上传方式\n1. 建立iframe上传图片，返回结果\n2. 利用flash上传图片\n\n######优点：\n这样做的优点是能兼容所有浏览器，例如万恶的ie6等。\n######缺点：\n需要写很多额外的代码，引入一些插件，维护性差等等。最重要的逼格不够高！！！\n\n####本章所讲的方式是利用html5的FormData属性来进行上传图片\n<p>如今主流浏览器几乎都支持html5，移动端更是不在话下，下面会分别列举用不同的框架库来上传图片。</p>\n1. jquery无刷新上传图片\n2. 原生js无刷新上传图片\n3. fetch无刷新上传图片\n\n######优点：\n代码量少，无需额外的插件配置。充分利用html5的属性，方便扩充功能例如本地预览压缩图片等。\n######缺点：\n对于不支持html5的低版本浏览器无法使用。\n\n######开发人员要根据产品的需求以及覆盖人群来决定到底使用哪种方案或者根据不同浏览器做兼容！\n\n####FormData创建方式有2种\n<pre><code>\n//js创建\nvar formData = new FormData(); \nformData.append("name", "shenhua");\n\n或者使用另一种方式\n//html表单\n<form id="upload"  action="">     \n<input type="text" name="name" value="shenhua">     \n</form>\n//js获取表单，在额外根据需要自行添加要上传的值\nvar formData = new FormData(document.forms["upload"]); \nformData.append("url", "www.shenhua.love");\n</code></pre>\n\n####下面跟我一起建立一个项目实现上传图片整个流程\n首先建立一个test.html\n<pre>\n<code>\n<!DOCTYPE html>\n<html>\n<head lang="en">\n    <meta charset="UTF-8">\n    <title></title>\n</head>\n<body>\n<form id="uploadForm"  method="post" enctype="multipart/form-data">\n    <input  name="fileimg" id="imgUpload"  type="file" />\n    <p id="enter">提交</p>\n</form>\n</body>\n</html>\n</code>\n</pre>\n然后加入js代码\n<pre><code>\n    <script>\n        //引入jq库的代码\n        $(function(){\n            $("#enter").click(function(){\n                var postData= new FormData($("#uploadForm")[0]);\n                $.ajax({\n                    type:"POST",\n                    url:"后台上传地址",\n                    cache:false,\n                    contentType:false,//设置为FALSE\n                    processData: false,//设置为FALSE\n                    data:postData,\n                    success:function(data){\n                        //上传成功 do something\n                    },\n                    error:function(){\n                        //错误\n                    }\n                });\n            });\n        });\n        \n        //使用原生js的代码\n        window.onload=function(){\n                var button=document.getElementById("enter");\n                button.onclick=function(){\n                    var postData= new FormData(document.getElementById("uploadForm"));\n                    var xhr = new XMLHttpRequest();\n                    xhr.open("POST","后台上传地址", true);\n                    xhr.setRequestHeader("Content-type","multipart/form-data");\n                    // 指定通信过程中状态改变时的回调函数\n                    xhr.onreadystatechange = function () {\n                        // 通信成功时，状态值为4\n                        var completed = 4;\n                        if (xhr.readyState === completed) {\n                            if (xhr.status === 200) {\n                                // 上传成功 do something\n                            } else {\n                                // 处理错误\n\n                            }\n\n                        }\n                    };\n                    xhr.send(postData);\n                }\n            \n        }\n       \n       //使用原生js代码并且使用fetch\n            window.onload=function() {\n                var button=document.getElementById("enter");\n                button.onclick=function(){\n                    var postData = new FormData(document.getElementById("uploadForm"));\n                    var url= new Request("后台上传地址");\n                    fetch(url,{\n                        method: "POST",\n                        headers: {\n                            "Content-Type": "multipart/form-data"\n                        },\n                        body:postData\n                    }).then(function(res) {\n                        if (res.ok) {\n                            return res.json().then(function (data) {\n                                //成功 do something\n                            })\n                        }else{\n                            // 处理错误\n                        }\n                    });\n                } \n                \n            }\n    </script>\n</code></pre>\n\n######通过这个小案例，就完成了简单的图片无刷新上传功能。相信聪明的你可以在这个例子扩展图片本地预览，以及压缩编辑等功能。', 20, 'javascript', '神话', '原创', 0, 0, '2016-11-15 16:00:00', 0),
(32, 'express4.x 设置ejs模版为html', 'express4.x 设置ejs模版为html', '打开View 文件发现index.ejs比较不习惯，所以对app.js进行小改动.', 'fileimg-3c73d4779d50f491f1c8a8b2abc124ca.jpg', '<p>打开View 文件发现index.ejs比较不习惯，所以对app.js进行小改动：</p>\n<p>“app.set("view engine", "ejs");” 变成 “app.engine(".html", ejs.__express);app.set("view engine", "html");”</p>\n<p>上一行出现的ejs变量需要require ejs模块，增加代码“var ejs = require("ejs");”</p>\n<p>最终的app.js关键代码如下：</p>\n<pre><code>\nvar ejs=require("ejs");\napp.set("views", path.join(__dirname, "views"));\napp.engine(".html",ejs.__express);\napp.set("view engine", "html");\n</code></pre>', 22, 'node.js', '神话', '原创', 0, 0, '2016-11-21 16:00:00', 0),
(35, 'webview  canvas偶尔加载不出来解决方案', 'webview  canvas偶尔加载不出来解决方案', 'webview  canvas偶尔加载不出来解决方案', 'fileimg-36a304e079dd2e6c2e28a1b6eaa185bf.jpg', '<p>做的是一个抽奖的转盘，其中转盘部分是用h5的canvas写的，测试发现有部分有手机根本加载不出来（联想4.3），有的偶尔加载不出来(vivo5.0);\n后来发现 webview的onPageFinished方法结束时，也就是页面已经加载完了canvas仍然没有渲染完毕，考虑到可能是canvas渲染的过早或过晚，经过测试发现在webview还没开始加载的时候canvas已经渲染完了，所以在canvas渲染的时候可以延迟一些时间即可，虽然webview体验会看到有些延迟，但是暂时鱼和熊掌不可兼得<br />解决代码\n<pre><code>\n$("#canvas").hide();\n\nsetTimeout(function(){$("#canvas").show()，1000);\n</code></pre>\n通过这两句处理过后就能显示了。</p>', 20, 'javascript', '神话', '转载', 0, 0, '2017-01-17 16:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `column`
--

CREATE TABLE IF NOT EXISTS `column` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `title` varchar(40) NOT NULL COMMENT '栏目名称',
  `keyWord` varchar(30) NOT NULL COMMENT '栏目关键字',
  `sort` int(3) NOT NULL COMMENT '栏目排序',
  `caption` text NOT NULL COMMENT '栏目内容',
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=25 ;

--
-- Dumping data for table `column`
--

INSERT INTO `column` (`id`, `title`, `keyWord`, `sort`, `caption`, `time`) VALUES
(18, 'html5', 'html5', 1, 'html5', '2016-11-05 17:59:01'),
(19, 'css3', 'css3', 2, 'css3', '2016-11-05 17:59:11'),
(20, 'javascript', 'javascript', 3, 'javascript', '2016-11-05 17:59:30'),
(21, 'react native', 'react native', 4, 'react native', '2016-11-05 17:59:45'),
(22, 'node.js', 'node.js', 5, 'node.js', '2016-11-05 17:59:55'),
(23, '前端实验室', '前端实验室', 6, '前端实验室', '2016-11-05 18:00:10'),
(24, '神秘花园', '神秘花园', 7, '神秘花园', '2016-11-05 18:00:20');

-- --------------------------------------------------------

--
-- Table structure for table `link`
--

CREATE TABLE IF NOT EXISTS `link` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `url` text NOT NULL,
  `sort` int(11) NOT NULL,
  `creatTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `link`
--

INSERT INTO `link` (`id`, `title`, `url`, `sort`, `creatTime`) VALUES
(5, 'caniuse', 'http://caniuse.com', 6, '2016-11-11 14:21:38'),
(6, 'iconfont', 'http://www.iconfont.cn/plus', 1, '2016-12-06 01:45:02'),
(7, 'npm', 'https://www.npmjs.com', 6, '2016-12-14 01:37:39'),
(8, 'rn组件库', 'https://js.coach/', 8, '2016-12-24 08:51:30'),
(9, 'redux视频', 'http://i.youku.com/i/UNjEzMjQzOTgw/videos', 12, '2016-12-28 02:53:30'),
(10, 'webstorm注册码', 'http://idea.qinxi1992.cn/', 10, '2017-03-02 01:23:13');

-- --------------------------------------------------------

--
-- Table structure for table `study`
--

CREATE TABLE IF NOT EXISTS `study` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `url` text NOT NULL,
  `sort` int(11) NOT NULL,
  `creatTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=25 ;

--
-- Dumping data for table `study`
--

INSERT INTO `study` (`id`, `title`, `url`, `sort`, `creatTime`) VALUES
(2, 'jquery手册', 'http://jquery.cuishifeng.cn/', 999, '2016-11-11 13:58:53'),
(3, 'jquery插件', 'http://www.jq22.com/', 998, '2016-11-11 13:59:15'),
(4, 'zepto手册', 'http://www.wenshuai.cn/Manual/Zepto/', 997, '2016-11-11 13:59:40'),
(5, 'css手册', 'http://www.phpstudy.net/css3/', 996, '2016-11-11 14:00:01'),
(6, 'html手册', 'http://t.mb5u.com/html/', 995, '2016-11-11 14:00:20'),
(7, 'javascript手册', 'http://www.w3school.com.cn/js/index.asp', 994, '2016-11-11 14:00:43'),
(8, 'es6语法', 'http://es6.ruanyifeng.com/', 993, '2016-11-11 14:01:04'),
(9, 'angluar.js', 'http://www.apjs.net/', 992, '2016-11-11 14:01:26'),
(10, 'react.js', 'http://reactjs.cn/react/docs/getting-started.html', 991, '2016-11-11 14:01:47'),
(11, 'react router', 'http://react-guide.github.io/react-router-cn/docs/Introduction.html', 990, '2016-11-11 14:02:11'),
(12, 'redux', 'http://cn.redux.js.org/', 980, '2016-11-11 14:02:34'),
(13, 'react native', 'http://reactnative.cn/', 978, '2016-11-11 14:02:54'),
(14, 'require.js', 'http://www.requirejs.cn/', 976, '2016-11-11 14:03:14'),
(15, 'artTemplate', 'https://github.com/aui/artTemplate', 974, '2016-11-11 14:03:36'),
(16, 'node.js', 'http://nodejs.cn/', 971, '2016-11-11 14:03:56'),
(17, 'express', 'http://www.expressjs.com.cn/', 968, '2016-11-11 14:04:16'),
(18, 'mongodb', 'http://docs.mongoing.com/manual-zh/', 967, '2016-11-11 14:04:37'),
(19, 'fis3', 'http://fis.baidu.com/', 962, '2016-11-11 14:04:55'),
(20, 'echart', 'http://echarts.baidu.com/index.html', 950, '2016-11-11 14:05:25'),
(21, 'highchart', 'http://www.hcharts.cn/', 948, '2016-11-11 14:05:47'),
(22, 'flex布局', 'http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool', 947, '2016-11-11 14:06:14'),
(23, 'css3动画库', 'https://daneden.github.io/animate.css/', 945, '2016-11-11 14:06:33'),
(24, 'realm', 'https://realm.io/', 930, '2016-11-11 14:11:47');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `article_ibfk_1` FOREIGN KEY (`columnId`) REFERENCES `column` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `article_ibfk_2` FOREIGN KEY (`columnName`) REFERENCES `column` (`title`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
