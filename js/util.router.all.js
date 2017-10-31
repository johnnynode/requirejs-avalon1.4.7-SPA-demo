// 用于定义不同类型的ajax请求
define([
    '../pages/aaa/aaa.router',
    '../pages/bbb/bbb.router',
    '../pages/ccc/ccc.router',
], function (aaaRouter, bbbRouter, cccRouter) {
    return function () {
        aaaRouter(); // aaa 路由处理
        bbbRouter(); // bbb 路由处理
        cccRouter(); // ccc 路由处理
    }
});