/**
 * 时间：2018/2/9
 * 作者：张超
 * 功能：
 */
var ohead = document.getElementsByTagName('head')[0];
var oscript = document.createElement('script');
oscript.onload = function () {
    console.log("onload方法被执行");
    console.log(this.readyState);
};
oscript.onreadystatechange = function () {
    console.log("onreadystatechange方法被执行");
    console.log(this.readyState);
};
oscript.type = 'text/javascript';
oscript.src = 'a.js';

ohead.appendChild(oscript);
