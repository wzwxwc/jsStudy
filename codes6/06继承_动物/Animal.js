function Animal(opts) {
    opts = {
        name: "",
        id: ""
    }
    //因为js的特殊原理，无法在父类中，再继续定义“实例属性”了
    //只能定义实例方法了
}

Animal.prototype.eat = function () {
    console.log(this.opts.name + "正在吃");
};
Animal.prototype.sleep = function () {
    console.log(this.opts.name + "正在睡");
};
Animal.prototype.introduction = function () {
    console.log("大家好，我是" + this.opts.id + "号的" + this.opts.name);
};