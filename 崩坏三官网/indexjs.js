//新闻列表切换开始
var ulList = document.querySelectorAll("ul[class|=bottom-bg-news-ul]")
var newsClass = document.querySelectorAll("li[class|=bottom-bg-news-nav-li]");
var serialNumber = 0;
for (let i = 0; i < newsClass.length; i++) {
    newsClass[i].onclick = new_show;
}
function new_show() {
    //宣传选项卡部分
    for (var i = 0; i < newsClass.length; i++) {
        newsClass[i].className = "bottom-bg-news-nav-li-hide"
    }
    this.className = "bottom-bg-news-nav-li-show";
    serialNumber = this.getAttribute("num");
    //宣传内容部分
    for (var i = 0; i < ulList.length; i++) {
        ulList[i].className = "bottom-bg-news-ul-hide";
    }
    ulList[parseInt(serialNumber)].className = "bottom-bg-news-ul-show";
}
//新闻列表切换结束

//网页弹窗开始
function windown() {
    var windown = document.getElementById("windown");
    windown.className = "alertwindow-none";
}
//网页弹窗结束
//轮播窗开始

var angel = document.getElementById("angel");
var zmb = document.getElementById("zmb");
var smzc = document.getElementById("smzc");

var angel_dian = document.getElementById("angel_dian");
var zmb_dian = document.getElementById("zmb_dian");
var smzc_dian = document.getElementById("smzc_dian");

var angel_left_value = angel.style.left;
//动画过渡效果开始
//判断当前位置和目标位置的大小关系
function lbt(left_value, left_num) {
    var ele = document.getElementById("lbcwindow");  //获取要移动的元素
    var ele_value = ele.style.left;        //获取元素的left值
    if (parseInt(ele_value) < parseInt(left_value) && left_num != -6) {            //如果当前位置小于目标位置
        left_num = -left_num;
    }
    var timezmb1 = setInterval(function () {   //间隔一秒移动一次
        var ele_value = ele.style.left;        //获取元素的left值
        if (ele_value == left_value) {
            clearInterval(timezmb1);
        }
        else {
            var ele_num = parseInt(ele_value, 10);
            ele_num = ele_num - left_num;
            ele.style.left = ele_num + "px";
        };
    }, 1)
};
//动画过渡效果结束
//图片切换开始
function zmb1() {//第二张图片
    lbt("-474px", 3);
    angel_dian.setAttribute("class", "");
    zmb_dian.setAttribute("class", "on");
    smzc_dian.setAttribute("class", "");
};

function smzc1() {//第三张图片
    lbt("-948px", 3);
    angel_dian.setAttribute("class", "");
    zmb_dian.setAttribute("class", "");
    smzc_dian.setAttribute("class", "on");
}

function angel1() {//第一张图片
    lbt("0px", -6);
    angel_dian.setAttribute("class", "on");
    zmb_dian.setAttribute("class", "");
    smzc_dian.setAttribute("class", "");
}
//图片切换结束
//图片切换判断开始
function lbc() {
    var ele = document.getElementById("lbcwindow");  //获取要移动的元素
    var ele_value = ele.style.left;        //获取元素的left值
    if (ele_value == "0px") {
        clearInterval(img_qiehuan);
        zmb1();
        img_qiehuan = setInterval("lbc()", 3000);
    }
    else if (ele_value == "-474px") {
        clearInterval(img_qiehuan);
        smzc1();
        img_qiehuan = setInterval("lbc()", 3000);
    }
    else if (ele_value == "-948px") {
        clearInterval(img_qiehuan);
        angel1();
        img_qiehuan = setInterval("lbc()", 3000);
    }
    else {
        angel.style.left = "0px";
        zmb.style.left = "474px";
        smzc.style.left = "948px";

    }
}
//图片切换结束结束
var win = document.getElementById("lbcwindow").parentElement;
//鼠标停留在图片上时停止切换效果开始
win.onmousemove = function () {
    clearInterval(img_qiehuan);
}
win.onmouseout = function () {
    img_qiehuan = setInterval("lbc()", 3000);
}
//鼠标停留在图片上时停止切换效果结束
var img_qiehuan = setInterval("lbc()", 3000);
//图片轮播窗结束