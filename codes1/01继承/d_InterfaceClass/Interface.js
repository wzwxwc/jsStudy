/**
 * 接口功能类——这个类模拟出“接口”
 * Created by zcG460 on 2016/9/20.
 */
var Interface = function (name, method) {
    if (arguments.length != 2) {
        throw new Error("接口中传递的参数个数报Error");
    }
    this.name = name;
    this.method = [];
    for (var i = 0, len = method.length; i < len; i++) {
        if (typeof method[i] !== "string") {
            throw new Error("接口类中定义的抽象方法格式不正确");
        }
        this.method.push(method[i]);
    }
};

Interface.ensureImplements = function (object) {
    if (arguments.length < 2) {
        throw new Error("Function Interface.ensureImplements called with " +
            arguments.length + " arugments;but expected at leats 2");
    }
    for (var i = 1, len = arguments.length; i < len; i++) {
        var interface = arguments[i];
        if (interface.constructor !== Interface) {
            throw new Error("没有实现");
        }
        for (var j = 0, len = interface.method.length; j < len; j++) {
            var method = interface.method[j]
            if (!object[method] || typeof object[method] !== "function") {
                throw new Error("Function Interface.ensureImplements: object is not implements the " +
                    interface.name + " Interface,Metbod " + method + " was not found");
            }
        }
    }
}