// 用于定义不同类型的ajax请求
define([
    'avalon',
    '../../js/util.router.callback'
], function (avalon, routerCallback) {
    function callback() {
        var jsPath = "pages/ccc/ccc.controller";
        var pagePath = "pages/ccc/ccc.html";
        routerCallback(this, jsPath, pagePath, function () {
            avalon.vmodels.cccCtrl && (avalon.vmodels.cccCtrl.router = avalon.vmodels.root.router);
        });
    }

    return function () {
        avalon.router.get("/ccc/:ccc", callback);
    }
});