/**
 * 时间：2018/1/16
 * 作者：张超
 * 功能：
 */
var canvas = document.getElementById("test");
var ctx = null;
if (canvas.getContext) {
    ctx = canvas.getContext("2d");
}

var btns = document.getElementsByTagName("button");
for (var i = 0; i < btns.length; i++) {
    var oneBtn = btns[i];
    oneBtn.onclick = function (e) {
        var btn = e.target;
        var classType = btn.className;
        window[classType]();
    }
}

function fillRect() {
    ctx.fillStyle = "rgb(200,0,0)";
    //void ctx.fillRect(x, y, width, height);
    ctx.fillRect(0, 0, 55, 50);
}

function strokeRect() {
    ctx.strokeStyle = "yellow";
    ctx.strokeRect(30, 30, 55, 50);
}

function clearRect() {
    ctx.clearRect(30, 30, 55, 50);
}

function restore() {
    //不起作用
    ctx.restore();
}