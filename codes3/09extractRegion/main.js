/**
 * Created by zcRescuer on 2016/11/24.
 */
$.ajax({
    type: "get",
    url: "./data/streetAple.json",
    dataType: "json",
    success: function (result) {
        var onlyRegionArray = [];
        for (var i = 0; i < result.length; i++) {
            var oneRegionAndIntoArray = result[i];
            onlyRegionArray.push(oneRegionAndIntoArray[0]);
        }
        fnConvertToQXJformat(onlyRegionArray);
        fnConsoleTheLength(onlyRegionArray);
        document.write(JSON.stringify(onlyRegionArray));
    },
    error: function (err) {
        console.error(err);
    }
})

//转换成气象局使用的
function fnConvertToQXJformat(regionArray) {
    for (var i = 0; i < regionArray.length; i++) {
        var oneRegion = regionArray[i];
        oneRegion.id = oneRegion.id.replace(new RegExp(",", "gm"), " ");
    }
}

//显示出每个array的point的长度
function fnConsoleTheLength(regionArray) {
    for (var i = 0; i < regionArray.length; i++) {
        console.log(regionArray[i].name + " points length is " + regionArray[i].id.length);
    }
}