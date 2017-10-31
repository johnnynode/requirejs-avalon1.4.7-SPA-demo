define(['avalon', 'text!./ccc.html'], function (avalon, ccc) {
    avalon.templateCache.ccc = ccc;
    // 定义model对象
    var cccCtrl = avalon.define({
        $id: "cccCtrl",
        text: "ccc",
        router: ""
    });
    // 监听
    var watch = cccCtrl.$watch("router", function (router) {
        // 路由和参数变化的回调
        avalon.log(router.$model);
        watch = null;
    });
});