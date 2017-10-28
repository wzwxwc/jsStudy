//一切类的新基类
function Class() {
    //typeOld是无法被prototype中的方法访问到的
    var typeOld = "Class";
    this.type = "Class";
}

Class.prototype.getTypeName = function () {
    return this.type;
};

//图形基类
function Geometry() {
}

Geometry.prototype.geometryType = function () {

};


//点类
function Circle(center, radius) {
    this.center = center;
    this.radius = radius;
}

Circle.prototype.draw = function () {
    console.log("开始执行");
};

test();

function test() {
    var cls1 = new Class();
    console.log(cls1.getTypeName());
}

//把2个对象的prototype进行合并
function extend(jsonObj1, jsonObj2) {
    var resultPro = jsonObj1.prototype;
    for (var i in jsonObj1.prototype) {
        var proKey1 = jsonObj1.prototype[i];
        var isNew = false;
        for (var j in jsonObj2.prototype) {
            var proKey2 = jsonObj2.prototype[j];
            if (proKey1 == proKey2) {
                break;
            } else {
                isNew = true;
            }
        }
        if (isNew) {
            resultPro.j = jsonObj2.prototype[j];
        }
    }
}

//下面这个改进版的extend非常棒
function extend2(jsonObj1, jsonObj2) {
    var resultPro = jsonObj1.prototype;
    for (var i in jsonObj2.prototype) {
        if (!jsonObj1.prototype.hasOwnProperty(i)) {
            resultPro[i] = jsonObj2.prototype;
        }
    }
}