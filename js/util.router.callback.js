// 用于定义不同类型的ajax请求
define([
    'avalon'
], function (avalon) {
    return function (that, jsPath, pagePath, callback) {
        var params = that.params;
        // 处理带有时间的参数
        if ("time" in params) {
            params.time = avalon.filters.date(params.time, "yyyy年M月dd日")
        }
        // 挂载路由信息
        avalon.vmodels.root.router = {
            path: that.path,
            params: params,
            query: that.query
        };

        // avalon.log(avalon.vmodels.root.router.$model);

        require([jsPath], function () {
            avalon.vmodels.root.content = pagePath;
            callback && callback();
        });

    }
});