/**
 * 时间：2018/1/16
 * 作者：张超
 * 功能：
 */
var canvas = document.getElementById("test");
var ctx = null;
if (canvas.getContext) {
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(200,0,0)";
    //void ctx.fillRect(x, y, width, height);
    ctx.fillRect(10, 10, 55, 50);

    // ctx.fillStyle = "rgba(0,0,200,0.5)";
    // ctx.fillRect(30, 30, 55, 50);

    ctx.strokeStyle = "yellow";
    ctx.strokeRect(30, 30, 55, 50);

}

