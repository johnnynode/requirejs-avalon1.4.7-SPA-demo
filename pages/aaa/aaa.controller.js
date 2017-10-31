define(['avalon', 'text!./aaa.html'], function (avalon, aaa) {
    avalon.templateCache.aaa = aaa;
    // 定义model对象
    var aaaCtrl = avalon.define({
        $id: "aaaCtrl",
        text: "aaa",
        router: ""
    });
    // 监听
    var watch = aaaCtrl.$watch("router", function (router) {
        // 路由和参数变化的回调
        avalon.log(router.$model);
        watch = null;
    });
});
