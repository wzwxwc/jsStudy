/**
 * Created by zc on 2017/7/18.
 */
function Cat(name, color) {
    this.name = name;
    this.color = color;
    this.meow = function () {
        console.log('mew, mew, mew...');
    };
}

var cat1 = new Cat('大毛', '白色');
var cat2 = new Cat('二毛', '黑色');

console.log(cat1.meow === cat2.meow);
// false
console.log(cat1.__proto__ === cat2.__proto__);
// true     上述这个就是一个“真理”！任何时候都是成立的