/**
 * Created by zc on 2017/5/15.
 */
window.onload = function () {
    var label = document.getElementById("test");
    label.onclick = function () {
        console.log("111111");
    };
    var btn = document.getElementById("btn");
    btn.onclick = function () {
        label.onclick = function () {
            console.log("22222");
        }
    };
    
}
;