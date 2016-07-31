/**
 * Created by zcRescuer on 2016/8/1.
 */

function Dog(name) {
    this.name = name;
}
Dog.prototype = {
    species: '犬科'
};

var dogA = new Dog("大毛");
var dogB = new Dog("二毛");

fnPrint();
dogA.species = "鸟类";
fnPrint();
//注意：
//下述报错
//只有Function类型的变量，才有prototype属性
//通过typeof方法，来检测
// dogA只是一个object对象
//Dog是一个function
dogA.prototype.species = "猫类";
fnPrint();

function fnPrint() {
    console.log("dogA.species is" + dogA.species);
    console.log("dogB.species is" + dogB.species);
}