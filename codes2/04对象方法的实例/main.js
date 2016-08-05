/**
 * Created by zcG460 on 2016/8/5.
 */

var g2 = {};
g2.ui = {};
g2.ui.fn1 = function () {
    console.log("fn1");
}
g2.ui.fn2 = function () {
    console.log("fn2");
}
g2.ui.fn3 = function () {
    return this;
}

var a=new g2.ui.fn1();
var c=new g2.ui.fn3();
console.log(c);