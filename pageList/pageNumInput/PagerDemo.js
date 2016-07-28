var rowCountPerPage = 3;    //每页含有的记录数
var pageCountPerScreen = 5;   //每屏显示的页数

$(document).ready(function () {
    init(1);
});

//默认加载
function init(pagenumber) {
    fnGetData(pagenumber, rowCountPerPage, function (res) {
        $("#pager").pager({
            pagenumber: pagenumber,
            pagecount: Math.ceil(res.rowCount / rowCountPerPage),
            totalcount: res.rowCount,   //是否需要？
            buttonClickCallback: PageClick
        });
        $("#result").html(fnCreateList(res.currentPageData, pagenumber));
    })
}

//回调函数
PageClick = function (pageclickednumber) {
    init(pageclickednumber);
}

//pagenumber——当前页码（从1开始计算）
//rowCountPerPage——每页的记录数
function fnGetData(pagenumber, rowCountPerPage, fnSucessCallback) {
    $.ajax({
        url: "../datas/data.json",
        type: "post",
        data: {
            currentPageNum: pagenumber,
            rowCount: rowCountPerPage
        },
        success: fnSucessCallback,
        error: function (err) {
            console.log(err);
        }
    })
}

//构造list
function fnCreateList(data, index) {
    var listDiv = '<div class="onemaplistContainer"><div><p>突发事件' + index + '</p><p>事故类型：煤矿瓦斯爆炸</p><p>事发时间：2016-07-12 09:33</p></div><div><p>突发事件' + index + '</p><p>事故类型：煤矿瓦斯爆炸</p><p>事发时间：2016-07-12 09:33</p></div><div><p>突发事件' + index + '</p><p>事故类型：煤矿瓦斯爆炸</p><p>事发时间：2016-07-12 09:33</p></div></div>';
    return listDiv;
}