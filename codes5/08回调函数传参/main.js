/**
 * Created by zc on 2017/7/19.
 */
window.onload = function () {
    var btn = document.querySelector("button");
    var index = 12;
    btn.onclick = function (event) {
        //在具体执行的时候，确实可以访问到index
        //但是在执行的时候，应该已经出了index的作用域了吧
        //为什么可以访问到呢？
        //这里应该另有解释
        obj.show(index, event);
    }
};
var obj = {
    show: function (index, event) {
        console.log(index);
        console.log(event);
    }
};