define(['avalon', 'text!./bbb.html'], function (avalon, bbb) {
    avalon.templateCache.bbb = bbb;
    // 定义model对象
    var bbbCtrl = avalon.define({
        $id: "bbbCtrl",
        text: "bbb",
        router: ""
    });
    // 监听
    var watch = bbbCtrl.$watch("router", function (router) {
        // 路由和参数变化的回调
        avalon.log(router.$model);
        watch = null;
    });
});