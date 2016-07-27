define(["jquery", "jquerypage"], function ($) {

    /**
     * 在一个div节点中，增加必要的dom元素
     * @param strDivContainerId
     */
    function fnAppendDiv(strDivContainerId) {
        var $content = $('<div id="result"></div><div id="pager"></div>');
        $("#" + strDivContainerId).append($content);
    }

    /**
     * 检测参数的有效性
     * @param args  参数
     */
    function fnCheckArgsValid(args) {
        if (!args) {
            console.error("参数不能没空")
            return false;
        }
        if (!args.strDivContainerId) {
            console.error("strDivContainerId参数不能为空。");
            return false;
        }
        if (!args.urlData) {
            console.error("urlData参数不能为空！");
            return false;
        }
        return true;
    }


    var temp = function (jsonArgsUser) {
        /*
         jsonArgsUser参数解释：
         strDivContainerId：承载list的div的id属性值——string类型（必填）
         rowCountPerPage：每页含有的记录数——number类型
         pageCountPerScreen：每屏显示的页数——number类型
         urlData:获取数据的url——string类型（必填）
         isShowNumInput:是否显示
         * */
        if (!fnCheckArgsValid(jsonArgsUser)) {
            return;
        }
        var jsonArgs = {
            rowCountPerPage: 13,
            pageCountPerScreen: 5,
            fnCreateList: function (data, index) {
                var listDiv = '<div class="onemaplistContainer"><div><p>突发事件' + index + '</p><p>事故类型：煤矿瓦斯爆炸</p><p>事发时间：2016-07-12 09:33</p></div><div><p>突发事件' + index + '</p><p>事故类型：煤矿瓦斯爆炸</p><p>事发时间：2016-07-12 09:33</p></div><div><p>突发事件' + index + '</p><p>事故类型：煤矿瓦斯爆炸</p><p>事发时间：2016-07-12 09:33</p></div></div>';
                return listDiv;
            },
            isShowNumInput: false
        };
        $.extend(jsonArgs, jsonArgsUser);
        //在这里把jsonArgs和jsonArgsDefault进行融合
        fnAppendDiv(jsonArgs.strDivContainerId);
        init(1);
        //默认加载
        function init(pagenumber) {
            fnGetData(pagenumber, jsonArgs.rowCountPerPage, function (res) {
                $("#pager").pager({
                    pagenumber: pagenumber,
                    pagecount: Math.ceil(res.rowCount / jsonArgs.rowCountPerPage),
                    totalcount: res.rowCount,   //是否需要？
                    isShowNumInput: jsonArgs.isShowNumInput,
                    pageCountPerScreen: jsonArgs.pageCountPerScreen,
                    buttonClickCallback: PageClick
                });
                $("#result").html(jsonArgs.fnCreateList(res.currentPageData, pagenumber));
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
                url: jsonArgs.urlData,
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

    };

    return temp;
});
