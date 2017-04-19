/**
 * Created by shenhua on 2017/3/11.
 *
 * FIS3  配置文件
 */
fis.hook('commonjs'); // 采用 commonjs 模块化方案。

fis.match('/src/(**)', {
    release: '/$1'
})

fis.match('/src/js/**.js', {
    parser: fis.plugin('babel-5.x', {
        sourceMaps: true
    }),
    rExt: '.js'
});


fis.unhook('components'); // fis3 中预设的是 fis-components，这里不需要，所以先关了。
fis.hook('node_modules'); // 使用 fis3-hook-node_modules 插件。

// 设置成是模块化 js, 编译后会被 define 包裹。
fis.match('{/node_modules/**.{js,jsx},/src/js/**.js}', {
    isMod: true,
    optimizer: fis.plugin('uglify-js')
});

fis.match('/src/js/{admin-router,user-router,utils/common/mod}.js', {
    isMod: false
});

fis.match('{/src/js/untils/common/mod.js,/node_modules/**.js}', {
    packTo: '/src/js/pkg/lib.js'
});//打包react组件以,MOD.JS

fis.match('/src/js/admin-router.js', {
    packTo: '/src/js/pkg/admin-router.js'
});//后台路由文件打包

fis.match('/src/js/user-router.js', {
    packTo: '/src/js/pkg/user-router.js'
});//前台路由文件打包

fis.match('/src/css/common/**.{css,scss}', {
    packTo: '/src/css/pkg/lib.css'
});//公用css文件打包

fis.match('/src/css/**.{css,scss}', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});

fis.match('/src/**.{js,css,scss,png,jpg,gif,jpeg}', {
    useHash: true
});//开启指纹戳


fis.match('::package', {
    postpackager: fis.plugin('loader', {
        useInlineMap: true
    })
});

fis.media('debug').match('/src/**.{css,scss,js}', {
    optimizer: null
})//dug模式


fis.set('project.ignore', [
    'fis-conf.js',
    'build**/**',
    'server/**',
    'src/node_modules/**',
    '.git/**',
    '.svn/**'
]);
