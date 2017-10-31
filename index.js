// 配置
require.config({
    baseUrl: '',
    paths: {
        avalon: ["lib/avalon/avalon"],
        mmHistory: ['lib/avalon/mmRouter/mmHistory'],
        mmRouter: ['lib/avalon/mmRouter/mmRouter'],
        mmState: ['lib/avalon/mmRouter/mmState'],
        mmPromise: ['lib/avalon/mmPromise/mmPromise'],
        text: ['lib/require/text'],
        css: ['lib/require/css'],
        jquery: ['lib/jquery/jquery-1.12.4'],
        jqueryCookie: ['lib/jquery/jquery.cookie-1.4.1'],
        domReady: ['lib/require/domReady'],
        JSON: ['lib/json3/json3'],
        utilHttp: ['js/util.http'],
        utilTool: ['js/util.tool'],
        utilRouter: ['js/util.router'],
        auth: ['js/auth']
    }
});

// 引入路由
require(['avalon', 'utilRouter', 'domReady!'], function (avalon, utilRouter) {
    var root = avalon.define({
        $id: "root",
        content: "",
        router: {
            path: "",
            params: {},
            query: {}
        }
    });

    utilRouter.init();
});

