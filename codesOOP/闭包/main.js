/**
 *
 * Created by zc on 2017/6/29.
 */
function test() {
    var a = 123;
    console.log(a);
    //函数外没有任何方法可以改变a的值！！
}
//没法访问函数内部定义的变量，但是！我们的目的是交互
//要不然写一堆没人能访问的，有何意义
console.log(a);
