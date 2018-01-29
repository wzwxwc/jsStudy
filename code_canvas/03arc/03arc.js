/**
 * 时间：2018/1/18
 * 作者：张超
 * 功能：试验arc的功能
 */
var canvas = document.getElementById("test");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(50, 50, 50, 0, 2 * Math.PI, false);
// ctx.fill();
ctx.stroke();