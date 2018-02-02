var g2 = {};
g2.util = {};

Object.defineProperty(g2.util, "wktUtil", {
    get: function () {
        console.log("get方法被执行");
        // define(["module1"], function (module1) {
        //     return module1;
        // })
        var module1 = require("module1");
        return module1;
    },
    set: function (v) {

    }
});

