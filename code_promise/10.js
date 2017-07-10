/**
 * Created by zc on 2017/6/26.
 */

function fnAjax(sucess, err) {
    var a = $.ajax({
        type: "get",
        url: "./data/test.txt",
        success: sucess,
        err: err
    });
    console.log(a);
}

var p1 = new Promise(fnAjax);
var p2 = p1.then(function (result) {
    console.log(result);
});
var p3 = p2.catch(function (err) {
    console.log(err);
});