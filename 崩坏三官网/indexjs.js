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