/**
 * Created by zc on 2017/7/18.
 */
function Animal(name, color) {
    this.name = name;
    if (color) this.color = color;
}
Animal.prototype.color = "white";

var cat1 = new Animal("tom");
console.log(cat1.color);

var cat2 = new Animal("jim", "red");
//如果实例属性存在，还是优先显示“实例属性”，而不是“原型属性”
console.log(cat2.color);