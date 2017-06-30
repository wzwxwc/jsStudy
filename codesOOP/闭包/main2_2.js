/**
 * Created by zc on 2017/6/29.
 */
function test() {
    this.a = 123;
    //换成return一个具体的值，就可以保住new的结果了
    return 22;
}

var c = new test();
console.log(c);
console.log(c.a);

var b = test();
console.log(b);