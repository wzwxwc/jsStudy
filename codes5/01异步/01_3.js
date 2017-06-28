/**
 * Created by zc on 2017/6/27.
 */
'use strict';
var promiseCount = 0;

function testPromise() {
    var thisPromiseCount = ++promiseCount;

    var log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Started (<small>Sync code started</small>)<br/>');

    // 新建一个Promise对象
    var p1 = new Promise(
        function (resolve, reject) {
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Promise started (<small>Async code started</small>)<br/>');
            // 模拟异步代码
            window.setTimeout(
                function () {
                    // 填充（fulfilled））promise
                    // resolve(thisPromiseCount);
                    reject(thisPromiseCount);
                }, Math.random() * 12 + 1000);
        }
    );

    // 通过调用then方法，我们定义了当promise被成功解析（resolved）/填充（fulfilled）时要执行的代码,
    // 而catch()方法则定义了当promise被拒绝（rejected）时要执行的代码.
    p1.then(
        // 记录被填充的值
        function (val) {
            log.insertAdjacentHTML('beforeend', "________________" + val +
                ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
        })
        .catch(
            // 记录被拒绝的理由（异常信息）
            function (reason) {
                log.insertAdjacentHTML('beforeend', "________________" + reason +
                    ') Promise rejected (<small>Async code terminated</small>)<br/>');
            });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Promise made (<small>Sync code terminated</small>)<br/>');
}