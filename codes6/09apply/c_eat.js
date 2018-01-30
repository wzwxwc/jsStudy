/**
 * 时间：2018/1/29
 * 作者：张超
 * 功能：
 */

function Cat() {
    this.name = "猫";
}

Cat.prototype.eat = function (food) {
    //因为加号(+)的优先级大于问号(?)，所以对问号要加括号
    console.log(this.name + "吃了" + (food ? food : "鱼"));
};

var cat1 = new Cat();
cat1.eat();
cat1.eat("馒头");
cat1.eat("水");

var dog1 = {
    name: "狗",
    food: "肉"
};
cat1.eat.call(dog1);
cat1.eat.call(dog1, dog1.food);