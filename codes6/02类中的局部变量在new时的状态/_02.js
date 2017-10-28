function Person(name) {
    //isGood是一个局部变量，这个变量在new的时候
    //每个实例都会在内存中新建一个
    //作用域也是js的一个知识点和难点，需要深入学习和理解一下
    var isGood = false;
    this.name = name;
    this.showGood = function () {
        console.log(isGood);
    };
    this.changeGood = function (goodOrBad) {
        isGood = goodOrBad;
    }
}

var p1 = new Person("tom");
var p2 = new Person("jim");
p1.showGood();
p2.showGood();

p1.changeGood(true);

p1.showGood();
p2.showGood();

/*
在java中，公有静态变量是可以被实例访问到的
* */