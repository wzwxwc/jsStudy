function Person() {
}

//这样定义的就是一个静态属性name吗？
//假如我想在prototype中定义一个方法来修改name属性，该怎么做？
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
    console.log(this.name);
};
var person1 = new Person();
person1.sayName();
person1.name = "zc";
person1.sayName();
var person2 = new Person();
person2.sayName(); //"Nicholas"
console.log(person1.sayName == person2.sayName); //true