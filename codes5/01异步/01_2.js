/**
 * Created by zc on 2017/6/26.
 */
var m = 1;
while (m < 10) {
    $.ajax({
        type: "GET",
        url: "/config/" + m + ".xml",
        async: true,
        dataType: "xml",
        success: function (xml) {

            alert("File Exist");
            m++;
        },
        error: function (xml) {
            alert("File not exist");
            m = 10;
        }
    });
}