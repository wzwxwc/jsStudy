/**
 * Created by zcG460 on 2016/9/20.
 */

//接口声明方式
var Animal = new Interface('Animal', ['eat', 'sleep']);

// 定义Person类实现接口Animal接口中的方法
var Person = function () {
};
Person.prototype = {
    eat: function () {
    },
    sleep2: function () {
    }
};

//创建对象_person
var _person = new Person();
//  检验Person类的_person对象是否实现了Animal接口
Interface.ensureImplements(_person, Animal);