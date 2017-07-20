/**
 * Created by zc on 2017/7/18.
 */
function Animal(name, color) {
    this.name = name;
    if (color) this.color = color;
}
Animal.prototype.color = "white";

var cat1 = new Animal("tom");
var cat2 = new Animal("jim");

console.log(cat1.color);
console.log(cat2.color);

Animal.prototype.color="red";

console.log(cat1.color);
console.log(cat2.color);

