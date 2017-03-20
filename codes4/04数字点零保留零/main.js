/**
 * Created by zcRescuer on 2017/2/24.
 */
function hasDot(num) {
    if (!isNaN(num)) {
        return ( (num + '').indexOf('.') != -1 ) ? num : num.toFixed(2);
    }
}

var num = 16;
document.writeln(hasDot(num) + "<br />"); // 16.00

var num2 = 18.01;
document.writeln(hasDot(num2) + "<br />");  //18.01

var num3 = 31.00;
document.writeln(hasDot(num3) + "<br />");  //18.01