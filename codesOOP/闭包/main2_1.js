/**
 * Created by zc on 2017/6/29.
 */
function test() {
    //函数中给this赋值后，使用的时候要小心
    //如果当方法用，那么会“不小心”给window变量上附加了值
    this.a = 123;
    function hehe() {
        console.log(123);
    }
    return hehe;
}

var c = new test();
console.log(c);
//为什么下述c.a没有值？
//如果把上面function中的return hehe去掉
//那么就有c.a了
console.log(c.a);

var b = test();
console.log(b);