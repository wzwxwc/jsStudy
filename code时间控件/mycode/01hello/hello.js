/**
 * Created by zcRescuer on 2017/2/19.
 */

window.onload = function () {
    var dateControl = document.getElementById("dateControl");
    dateControl.onfocus = function () {
        WdatePicker({
            isShowWeek: true,
            readOnly: true,
            highLineWeekDay: false,
            isShowClear: false,
            isShowToday: false,
            onpicked: function () {
                //alert($dp.$DV);
            }
        })
    }
    var btnGetCurrentTime = document.getElementById("btnGetCurrentTime");
    btnGetCurrentTime.onclick = function () {

    }
}