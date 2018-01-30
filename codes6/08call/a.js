/**
 * 时间：2017/12/26
 * 作者：张超
 * 功能：
 */
function test(age, sex) {
    console.log(this.name + "是一个" + sex + "生，今年" + age + "岁");
}

test.call({name: "zc"}, 12, "男");

test.call({name: "zc"}, [12, "男"]);


/*
* 当一个数组和字符串相加的时候
* 会直接调用数组的toString()方法，返回结果作为字符串和字符串连接
*
* */