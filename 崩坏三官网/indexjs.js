//新闻列表
var new1 = document.getElementById("new");
var news = document.getElementById("news");
var gg = document.getElementById("gg");
var hd = document.getElementById("hd");
var gl = document.getElementById("gl");
var ul1 = document.getElementById("ul1");
var ul2 = document.getElementById("ul2");
var ul3 = document.getElementById("ul3");
var ul4 = document.getElementById("ul4");
var ul5 = document.getElementById("ul5");
function new_show() {
    new1.className = "bottom-bg-news-nav-li-show";
    news.className = "bottom-bg-news-nav-li-hide";
    gg.className = "bottom-bg-news-nav-li-hide";
    hd.className = "bottom-bg-news-nav-li-hide";
    gl.className = "bottom-bg-news-nav-li-hide";
    ul1.className = "bottom-bg-news-ul-show";
    ul2.className = "bottom-bg-news-ul-hide";
    ul3.className = "bottom-bg-news-ul-hide";
    ul4.className = "bottom-bg-news-ul-hide";
    ul5.className = "bottom-bg-news-ul-hide";
}

function news_show() {
    new1.className = "bottom-bg-news-nav-li-hide";
    news.className = "bottom-bg-news-nav-li-show";
    gg.className = "bottom-bg-news-nav-li-hide";
    hd.className = "bottom-bg-news-nav-li-hide";
    gl.className = "bottom-bg-news-nav-li-hide";
    ul1.className = "bottom-bg-news-ul-hide";
    ul2.className = "bottom-bg-news-ul-show";
    ul3.className = "bottom-bg-news-ul-hide";
    ul4.className = "bottom-bg-news-ul-hide";
    ul5.className = "bottom-bg-news-ul-hide";
}

function gg_show() {
    new1.className = "bottom-bg-news-nav-li-hide";
    news.className = "bottom-bg-news-nav-li-hide";
    gg.className = "bottom-bg-news-nav-li-show";
    hd.className = "bottom-bg-news-nav-li-hide";
    gl.className = "bottom-bg-news-nav-li-hide";
    ul1.className = "bottom-bg-news-ul-hide";
    ul2.className = "bottom-bg-news-ul-hide";
    ul3.className = "bottom-bg-news-ul-show";
    ul4.className = "bottom-bg-news-ul-hide";
    ul5.className = "bottom-bg-news-ul-hide";
}

function hd_show() {
    new1.className = "bottom-bg-news-nav-li-hide";
    news.className = "bottom-bg-news-nav-li-hide";
    gg.className = "bottom-bg-news-nav-li-hide";
    hd.className = "bottom-bg-news-nav-li-show";
    gl.className = "bottom-bg-news-nav-li-hide";
    ul1.className = "bottom-bg-news-ul-hide";
    ul2.className = "bottom-bg-news-ul-hide";
    ul3.className = "bottom-bg-news-ul-hide";
    ul4.className = "bottom-bg-news-ul-show";
    ul5.className = "bottom-bg-news-ul-hide";
}

function gl_show() {
    new1.className = "bottom-bg-news-nav-li-hide";
    news.className = "bottom-bg-news-nav-li-hide";
    gg.className = "bottom-bg-news-nav-li-hide";
    hd.className = "bottom-bg-news-nav-li-hide";
    gl.className = "bottom-bg-news-nav-li-show";
    ul1.className = "bottom-bg-news-ul-hide";
    ul2.className = "bottom-bg-news-ul-hide";
    ul3.className = "bottom-bg-news-ul-hide";
    ul4.className = "bottom-bg-news-ul-hide";
    ul5.className = "bottom-bg-news-ul-show";
}
//轮播窗

var angel = document.getElementById("angel");
var zmb = document.getElementById("zmb");
var smzc = document.getElementById("smzc");

var angel_dian = document.getElementById("angel_dian");
var zmb_dian = document.getElementById("zmb_dian");
var smzc_dian = document.getElementById("smzc_dian");

var angel_left_value = angel.style.left;

function lbt(eleid, left_value, left_num) {
    var ele = document.getElementById(eleid);
    var timezmb1 = setInterval(function () {
        var ele_value = ele.style.left;
        if (ele_value == left_value) {
            clearInterval(timezmb1);
        }
        else {
            var ele_num = parseInt(ele_value, 10);
            ele_num = ele_num - left_num;
            ele.style.left = ele_num + "px";
        }
    }, 1)
}

function zmb1() {
        lbt("angel", "-474px", 3);
        lbt("zmb", "0px", 3);
        lbt("smzc", "474px", 3)
        angel_dian.setAttribute("class", "");
        zmb_dian.setAttribute("class", "on");
        smzc_dian.setAttribute("class", "");
    };

function smzc1() {
    lbt("angel", "-948px", 3);
    lbt("zmb", "-474px", 3);
    lbt("smzc", "0px", 3);
    angel_dian.setAttribute("class", "");
    zmb_dian.setAttribute("class", "");
    smzc_dian.setAttribute("class", "on");
}

function angel1() {
    lbt("angel", "0px", -6);
    lbt("zmb", "474px", -6);
    lbt("smzc", "948px", -6);
    angel_dian.setAttribute("class", "on");
    zmb_dian.setAttribute("class", "");
    smzc_dian.setAttribute("class", "");
}

function lbc() {
    var angel_value = angel.style.left;
    if (angel_value == "0px") {
        zmb1();
    }
    else if (angel_value == "-474px") {
        smzc1();
    }
    else if (angel_value == "-948px") {
        angel1();
    }
}
setInterval("lbc()", 3000);