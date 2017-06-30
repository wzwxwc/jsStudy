/**
 * 想new就可以new吗？原生的JSON类就无法被new
 * Created by zc on 2017/6/29.
 */
function Test() {
    console.log("我就呵呵了");
}

var a = new Test();
console.log(a);
