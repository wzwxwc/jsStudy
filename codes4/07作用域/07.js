/**
 * Created by zc on 2017/6/9.
 */
function fnA() {
    var arrData = []
    arrData.push(1);
    arrData.push(2);
    fnC(arrData, fnB);
    function fnB() {
        console.log(arrData.toString());
    }
}
function fnC(arrData, fn) {
    arrData.push(3);
    arrData.push(4);
    fn();
}
fnA();