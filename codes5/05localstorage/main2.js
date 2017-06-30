/**
 * Created by zc on 2017/6/30.
 */
window.onstorage = function (e) {
    console.log(e);
};
if (localStorage.a) {
    delete localStorage.a;
} else {
    localStorage.a = 1;
}
localStorage["b"] = 2;
localStorage.setItem("c", 3);
