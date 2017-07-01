/**
 * 设置可读的属性
 * Created by zc on 2017/6/30.
 */

var a = {};
Object.defineProperty(a, "b", {
    writable: false,
    value:"不可写"
});
console.log(a.b);