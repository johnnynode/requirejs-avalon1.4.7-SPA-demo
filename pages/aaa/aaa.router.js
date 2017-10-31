// 用于定义不同类型的ajax请求
define([
    'avalon',
    '../../js/util.router.callback'
], function (avalon, routerCallback) {
    function callback() {
        var jsPath = "pages/aaa/aaa.controller";
        var pagePath = "pages/aaa/aaa.html";
        routerCallback(this, jsPath, pagePath, function () {
            avalon.vmodels.aaaCtrl && (avalon.vmodels.aaaCtrl.router = avalon.vmodels.root.router);
        });
    }

    return function () {
        avalon.router.get("/aaa", callback);
    }
});