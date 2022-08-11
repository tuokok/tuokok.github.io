var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?d712b3a68b12ef67cffba42e1a5ae1f1";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
//禁止右键菜单
window.oncontextmenu = function () {
    return false;
};
/*禁止键盘操作*/
document.onkeydown = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e.keyCode === 67){
        return false;
    }
    if ((e.keyCode === 123) || (e.ctrlKey) || (e.ctrlKey) && (e.keyCode === 85)) {
        return false;
    }
    if (e.keyCode === 86 || e.keyCode === 13){
        return true;
    }
};