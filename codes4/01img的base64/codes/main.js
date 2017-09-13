/**
 * Created by zc on 2017/8/3.
 */
var m_jsonResult = {};
var m_length = 0;
function run(input_file, get_data) {
    /*input_file：文件按钮对象*/
    /*get_data: 转换成功后执行的方法*/
    if (typeof(FileReader) === 'undefined') {
        alert("抱歉，你的浏览器不支持 FileReader，不能将图片转换为Base64，请使用现代浏览器操作！");
    } else {
        try {
            m_length = input_file.files.length;
            for (var i = 0; i < input_file.files.length; i++) {
                /*图片转Base64 核心代码*/
                var oneFile = input_file.files[i];
                //这里我们判断下类型如果不是图片就返回 去掉就可以上传任意文件
                if (!/image\/\w+/.test(oneFile.type)) {
                    alert("请确保文件为图像类型");
                    continue;
                }
                fnDealWith(oneFile, get_data);
            }
        } catch (e) {
            alert('图片转Base64出错啦！' + e.toString())
        }
    }
}

function fnDealWith(oneFile, get_data) {
    var reader = new FileReader();
    reader.onload = function () {
        get_data(oneFile.name, this.result);
    };
    reader.readAsDataURL(oneFile);
}

$(function () {
    $("input").change(function () {
        $("#showTable").text("");
        $("textarea").empty();
        m_jsonResult = {};
        m_length = 0;
        run(this, function (name, data) {
            var temp = '<tr><td>' + name + '</td><td><img src="' + data + '" style="max-height: 300px; height: 8em; min-width:8em;"></td></tr>';
            $("#showTable").append(temp);
            m_jsonResult[name] = data;
            m_length--;
            if (m_length <= 0) {
                $("textarea").text(JSON.stringify(m_jsonResult));
            }
        });
    });
});