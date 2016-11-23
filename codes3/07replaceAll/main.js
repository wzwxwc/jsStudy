/**
 * Created by zcRescuer on 2016/10/28.
 */

var str="@@name是一个很好的人。@@name是一个非常不错的人";

//正确1
// str=str.replace(/@@name/g,"张超");

//错误方式1
//str=str.replace("/name/g","张超");

//正确2
str=str.replace(new RegExp("@@name","gm"),"张超");


document.write(str);