/**
 *我想知道，到底什么时候用new，什么时候直接执行一个函数
 * Created by zc on 2017/6/29.
 */
function test() {
    function hehe() {
        console.log(123);
    }

    return hehe;
}

var a = new test();
console.log(a);

var b = test();
console.log(b);

//上述得到的a和b有什么区别？