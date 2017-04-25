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

fis.match('/src/css/**.scss', {
    parser: fis.plugin('node-sass'),
    rExt: '.css'
});//编译Sass

fis.unhook('components'); // fis3 中预设的是 fis-components，这里不需要，所以先关了。
fis.hook('node_modules'); // 使用 fis3-hook-node_modules 插件。

// 设置成是模块化 js, 编译后会被 define 包裹。
fis.match('{/node_modules/**.{js,jsx},/src/js/**.js}', {
    isMod: true,
    optimizer: fis.plugin('uglify-js')
});

fis.match('/src/js/*.js', {
    isMod: false
});

fis.match('{/src/js/mod.js,/node_modules/**.js}', {
    packTo: '/src/js/pkg/lib.js'
});//打包react组件以,MOD.JS

fis.match('/src/js/admin-router.js', {
    packTo: '/src/js/pkg/admin-router.js'
});//后台路由文件打包

fis.match('/src/js/reducers/admin/**.js', {
    packTo: '/src/js/pkg/admin-reducers.js'
});//后台reducer打包

fis.match('/src/js/actions/admin/**.js', {
    packTo: '/src/js/pkg/admin-actions.js'
});//后台action打包

fis.match('/src/js/utils/admin/**.js', {
    packTo: '/src/js/pkg/admin-utils.js'
});//后台utils打包

fis.match('/src/js/{user-router,containers/user/**}.js', {
    packTo: '/src/js/pkg/user-router.js'
});//前台路由文件打包

fis.match('/src/js/reducers/user/**.js', {
    packTo: '/src/js/pkg/user-reducers.js'
});//前台reducer打包

fis.match('/src/js/actions/user/**.js', {
    packTo: '/src/js/pkg/user-actions.js'
});//前台action打包

fis.match('/src/js/utils/user/**.js', {
    packTo: '/src/js/pkg/user-utils.js'
});//前台utils打包

fis.match('/src/js/actions/common/**.js', {
    packTo: '/src/js/pkg/common-actions.js'
});//公用action打包

fis.match('/src/js/reducers/common/**.js', {
    packTo: '/src/js/pkg/common-reducers.js'
});//公用reducer打包

fis.match('/src/js/utils/common/**.js', {
    packTo: '/src/js/pkg/common-utils.js'
});//公用utils打包

fis.match('/src/css/common/**.{css,scss}', {
    packTo: '/src/css/pkg/lib.css'
});//公用css文件打包

fis.match('/src/css/user/**.{css,scss}', {
    packTo: '/src/css/pkg/user.css'
});//前台css文件打包

fis.match('/src/css/admin/**.{css,scss}', {
    packTo: '/src/css/pkg/admin.css'
});//后台css文件打包


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
    'node/**',
    'dist**/**',
    'server/**',
    'node_modules/**',
    '.git/**',
    '.svn/**'
]);
