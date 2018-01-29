/**
 * 时间：2018/1/18
 * 作者：张超
 * 功能：
 */
var canvas = document.getElementById("test");
var ctx = canvas.getContext("2d");

canvas.onclick = function (e) {
    // ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 20, 0, 2 * Math.PI);
    ctx.stroke();
};