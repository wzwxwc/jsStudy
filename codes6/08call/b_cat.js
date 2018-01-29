/**
 * 时间：2018/1/29
 * 作者：张超
 * 功能：
 * 参考：https://www.zhihu.com/question/20289071
 */
function Cat() {
}

Cat.prototype = {
    food: "fish",
    say: function () {
        console.log("I love " + this.food);
    }
};
var blackCat = new Cat();
blackCat.say();

var whiteDog = {food: "bone"};
blackCat.say.call(whiteDog);
blackCat.say.apply(whiteDog);
Cat.prototype.say.call(whiteDog);

//并没有让whiteDog具有了say这个方法
// whiteDog.say();