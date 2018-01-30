/**
 * 时间：2017/12/26
 * 作者：张超
 * 功能：检验一下fun.apply方法是否可以接受非数组参数？
 */
function test(name, age) {
    console.log(name + "今年" + age + "岁");
}

test.apply(
    {
        name: "zc",
        age: 12
    },
    {
        name: "zc",
        age: 12
    },
    {
        name: "zc",
        age: 12
    });
test.apply(
    {
        name: "zc",
        age: 12
    },
    ["zc", 12]
);

/*
* fun.apply(thisArg,[argsArray])
* 这种用法有一个缺点，就是必须传入一个数组才会被识别！
* 如果是其他的类型，将被忽略
*
* 因为这个原因，我对apply方法没有什么好感
* */