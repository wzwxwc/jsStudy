/**
 * 时间：2018/1/18
 * 作者：张超
 * 功能：练习canvas的path路径的使用
 */
var canvas = document.getElementById("test");
var ctx = canvas.getContext("2d");
ctx.beginPath();
var isFirstClick = true;
canvas.onclick = function (e) {
    if (isFirstClick) {
        ctx.moveTo(e.offsetX, e.offsetY);
        isFirstClick = false;
    } else {
        ctx.lineTo(e.offsetX, e.offsetY);
    }
};
canvas.ondblclick = function (e) {
    ctx.stroke();
    // isFirstClick = true;
};
