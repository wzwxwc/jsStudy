define(function () {
    var temp = {};

    var _getPage = function(){
        return temp.age;
    }


    return {
        getPage:function(){
            return _getPage();
        },
        setPage:function(val){
            Object.defineProperty(temp,"age",{
                value:val,
                writable:true
            })
        }
    }
});