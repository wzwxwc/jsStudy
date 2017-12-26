/**
 * 时间：2017/12/26
 * 作者：张超
 * 功能：
 */
function test() {
    console.log(this.name);
}

test.call({name: 123});