/**
 * 时间：2018/2/9
 * 作者：张超
 * 功能：
 */


function test() {
    var scriptA = document.getElementById("a");
    scriptA.onload = function () {
        console.log(this.readyState);
    };
    scriptA.onreadystatechange = function () {
        console.log(this.readyState);
    };
}

test();

window.onload = function () {
    test();
};

/*
* 现在这个方法行不通啊！
* 只能通过动态声明变量的方式！
* */