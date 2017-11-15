//方案1
// function Penguin(name, id) {
//     //如果写到这里，每次new的时候，都会新建一个Animal的实例变量
//     //但是，这种绑定具有延时的效果，不能绑定到本次的new中
//     //如果不同实例都使用不同的原型，那么使用原型来达到共享目的、减少重复代码的目的，就不存在了吧
//     this.__proto__ = new Animal(name, id);
// }
//
// //下述这个没有意义，只是为了让jsdoc进行识别？
// Penguin.prototype = Animal.prototype;


//方案2
//下述这种方式是不构成继承的！
// function Penguin(name, id) {
//     var o = new Object();
//     o.__proto__ = new Animal(name, id);
//     return o;
// }

//方案3：不希望再看到__proto__
function Penguin(opts) {
    this.opts = {};
    this.opts.name = opts.name;
    this.opts.id = opts.id
}

//直接这样一句话，就构成了继承？
Penguin.prototype = Animal.prototype;
