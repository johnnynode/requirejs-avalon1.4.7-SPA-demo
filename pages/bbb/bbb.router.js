// 用于定义不同类型的ajax请求
define([
    'avalon',
    '../../js/util.router.callback'
], function (avalon, routerCallback) {
    function callback() {
        var jsPath = "pages/bbb/bbb.controller";
        var pagePath = "pages/bbb/bbb.html";
        routerCallback(this, jsPath, pagePath, function () {
            avalon.vmodels.bbbCtrl && (avalon.vmodels.bbbCtrl.router = avalon.vmodels.root.router);
        });
    }

    return function () {
        avalon.router.get("/bbb", callback);
    }
});