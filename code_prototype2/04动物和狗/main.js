/**
 * 没有继承！
 * Created by zc on 2017/7/19.
 */
function Animal(opts) {
    //抽象类，不需要在这里定义任何私有的属性
}
Animal.prototype.walk = function () {
    console.log("动物行走");
};
function Dog(name, birth) {
    this.name = name || "未命名";
    this.birth = birth || "未知时间";
}
//下述2个属性，因为放到原型中，成为实例的共享
//所以，最好定义为只读!
Dog.prototype.type = "狗";
Dog.prototype.bark = function () {
    console.log("汪汪。。。");
};

var dog1 = new Dog("tom");
