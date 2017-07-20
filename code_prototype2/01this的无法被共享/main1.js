/**
 * Created by zc on 2017/7/18.
 */
function Cat(name, color) {
    this.name = name;
    this.color = color;
}
Cat.prototype.meow = function () {
    console.log('mew, mew, mew...');
};

var cat1 = new Cat('大毛', '白色');
var cat2 = new Cat('二毛', '黑色');

console.log(cat1.meow === cat2.meow);
// true
console.log(cat1.__proto__ === cat2.__proto__);
// true     上述这个为true，很关键！！