/**
 * Created by zc on 2017/6/26.
 */

var i = 1;
$.ajax({
    type: "get",
    url: "./data/test.txt",
    success: function (data) {
        console.log(data);
        alert(i);
        i = false;
    },
    err: function (err) {
        alert(i);
        i = false;
    }
});

//这个程序不会停止！是因为内存耗尽了，还是说js的解释机制
//不会从while中断，去执行上述的success？？
while (i) {
    i++;
    console.log(i);
}

//zhj的解释是
//只有同步的代码都执行完了，才“有可能”去看看异步的代码是否需要处理
