/**
 * Created by zc on 2017/7/20.
 */
function Animal(opts) {
    //抽象类，不需要在这里定义任何私有的属性
    this.opts = opts;
}
Animal.prototype.walk = function () {
    console.log("动物行走");
};
var newPrototype = new Animal("test");
newPrototype.constructor = Dog;
Dog.prototype = newPrototype;
function Dog(name, birth) {
    this.name = name || "未命名";
    this.birth = birth || "未知时间";
}
Dog.prototype.type = "狗";
Dog.prototype.bark = function () {
    console.log("汪汪。。。");
};

var dog1 = new Dog("tom");
