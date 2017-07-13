/**
 * Created by zcG460 on 2016/9/20.
 */

//这应该是一个“接口”类
//只负责定义接口，而不负责实现！
function Animal() {
    this.shout = function () {
        console.log("")
    }
}


/*
 我的思路
 我想定义一个Animal的类
 然后，定义狗、猫来实现继承
 并且狗也支持继承来生成：牧羊犬、金毛、哈巴狗
 * */