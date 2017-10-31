// 用于定义不同类型的ajax请求
define([
    'avalon',
    'mmRouter',
    'mmHistory',
    '../js/util.router.all'
], function (avalon, mmRouter, mmHistory, routerAll) {
    return {
        init:function () {

            /*
             avalon.router.get("/aaa", callback);
             avalon.router.get("/bbb", callback);
             avalon.router.get("/ccc/:ccc", callback);
             avalon.router.get("/ddd/{time:date}/", callback);
             avalon.router.get("/eee/{count:\\d{4}}/", callback);
             avalon.router.get("/fff", callback);
             avalon.router.get("/ggg/:t", callback);
             */

            routerAll();

            // 导航处理
            avalon.router.error(function () {
                avalon.router.navigate("/aaa");
            });

            avalon.history.start({
                basepath: "/",
                hashPrefix: "",
                fireAnchor: true,
                html5Mode: false
            });
            avalon.scan();
        }
    }
});