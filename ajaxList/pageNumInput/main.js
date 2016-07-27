/**
 * Created by zcG460 on 2016/7/27.
 */
require.config({
    baseUrl: "/jsStudy",
    //晕死，下面的paths被我写成了path，结果一直报错
    paths: {
        jquery: "ajaxList/deps/jquery",
        jquerypage: "ajaxList/pageNumInput/jquery.pager",
        list: "ajaxList/pageNumInput/List"
    },
    shim: {
        jquerypage: {
            deps: ["jquery"]
        }
    }
});

require(["list"], function (List) {
    var jsonArgs = {
        strDivContainerId: "listContainer",
        rowCountPerPage: 3,
        // pageCountPerScreen: 5,
        urlData: '../datas/data.json',
        isShowNumInput: false
    }
    var list = new List(jsonArgs);
});