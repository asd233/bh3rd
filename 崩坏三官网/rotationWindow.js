//轮播窗开始
var angel_dian = document.getElementById("angel_dian");
var zmb_dian = document.getElementById("zmb_dian");
var smzc_dian = document.getElementById("smzc_dian");
var ele = document.getElementById("lbcwindow");
//轮播图的自动切换
function timingSwitch() {
    var eleValue = parseInt(ele.style.transform.substring(10));
    angel_dian.className = "";
    zmb_dian.className = "";
    smzc_dian.className = "";
    if (eleValue == 0) {
        ele.style.transform = "translate(-475px)";
        zmb_dian.className = "on";
    } else if (eleValue == -475) {
        ele.style.transform = "translate(-950px)";
        smzc_dian.className = "on";
    } else if (eleValue == -950) {
        ele.style.transform = "translate(0px)";
        angel_dian.className = "on";

    }
}
var timer = setInterval(timingSwitch, 5000);
//轮播图的手动切换
function switchImg() {
    var value;
    if (this == angel_dian) {
        value = "0px";
    } else if (this == zmb_dian) {
        value = "-475px";
    } else if (this == smzc_dian) {
        value = "-950px";
    }
    clearInterval(timer);
    angel_dian.className = "";
    zmb_dian.className = "";
    smzc_dian.className = "";
    this.className = "on";
    ele.style.transform = "translate(" + value + ")";
    timer = setInterval(timingSwitch, 5000);
}
angel_dian.onclick = switchImg;
zmb_dian.onclick = switchImg;
smzc_dian.onclick = switchImg;
//图片轮播窗结束