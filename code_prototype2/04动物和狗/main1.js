/**
 * 直接给__proto__赋值来继承
 * Created by zc on 2017/7/19.
 */
function Animal(opts) {
    //通过对__proto__的赋值，无法继承父类的实例属性
    this.opts = opts;
}
Animal.prototype.walk = function () {
    console.log("动物行走");
};
// Dog.prototype=new Animal();
function Dog(name, birth) {
    this.name = name || "未命名";
    this.birth = birth || "未知时间";
}
Dog.prototype.type = "狗";
Dog.prototype.bark = function () {
    console.log("汪汪。。。");
};

//硬生生的通过下述方式，来使得Dog和Animal之间实现继承
//是否合适？
Dog.prototype.__proto__ = Animal.prototype;
var dog1 = new Dog("tom");

/*
 * 在继承时，需要考虑下面的内容：
 * 1、参数合并
 * 2、方法中含有回调函数
 *
 *
 * */
