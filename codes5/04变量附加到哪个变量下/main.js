/**
 * Created by zc on 2017/6/29.
 */
var varOfWindow = "abc";
console.log(varOfWindow);

function test() {
    var varOfFunc = 123;
    console.log(this);
    console.log(window.varOfFunc);
}
test();