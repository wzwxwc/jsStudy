/**
 * Created by zc on 2017/6/30.
 */
var a = {};

//要使得a.b能够进行正常的读写，那么就“必须”在外部引入一个第3方变量
var _a_b;
Object.defineProperty(a, "b", {
    get: function () {
        //return a.b;
        //上述会导致进入死循环
        return _a_b
    },
    set: function (val) {
        _a_b = val;
    }
});
