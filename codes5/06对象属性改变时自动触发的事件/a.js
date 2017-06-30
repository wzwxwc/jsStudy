/**
 * Created by zc on 2017/6/30.
 */
window.onload = function () {
    var div = document.querySelector("div");
    //下述这个事件绑定，没有什么用！！不起作用！
    div.onpropertychange = function (e) {
        console.log(e);
    }
    setTimeout(function () {
        div.setAttribute("data-user", "abc");
    }, 3000)
};
