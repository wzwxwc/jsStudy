/**
 * Created by zc on 2017/6/30.
 */
console.log(localStorage);
var obj = {
    "aa": 123,
    cc: 123
};
localStorage.setItem("aa", JSON.stringify(obj));
console.log(localStorage);