/**
 * Created by zc on 2017/6/26.
 */
function test(resolve, reject) {
    var timeOut = Math.random() * 2;
    console.log('set timeout to: ' + timeOut + ' seconds.');
    if (timeOut < 1) {
        console.log('call resolve()...');
        resolve('2100 OK');
    }
    else {
        console.log('call reject()...');
        reject('timeout in ' + timeOut + ' seconds.');
    }
}

var p1 = new Promise(test);
var p2 = p1.catch(function (result) {
    console.log('成功：' + result);
});
var p3 = p2.then(function (reason) {
    console.log('失败：' + reason);
});