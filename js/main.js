// JavaScript Document
document.writeln("<script>");
document.writeln("var _hmt = _hmt || [];");
document.writeln("(function() {");
document.writeln("  var hm = document.createElement(\'script\');");
document.writeln("  hm.src = \'https://hm.baidu.com/hm.js?d712b3a68b12ef67cffba42e1a5ae1f1\';");
document.writeln("  var s = document.getElementsByTagName(\'script\')[0]; ");
document.writeln("  s.parentNode.insertBefore(hm, s);");
document.writeln("})();");
document.writeln("</script>");
document.writeln("");
(function(){
    let appDownloadURL1 = '/url.html' // 线路1
    let appDownloadURL2 = '/urls.html'  // 线路2
    let appDownloadURL3 = '/xiazai.html'  // app下载1
    let appDownloadURL4 = '/xiazai.html'  // app下载2
    let downloadBtnList = document.querySelectorAll('.downloadBtn')
    let urlList = [appDownloadURL1, appDownloadURL2, appDownloadURL3,appDownloadURL4]
    downloadBtnList.forEach((item, i) => {
       item.onclick = function(){
         window.open(urlList[i], '_blank')
       }
    })
    let hostArr = location.hostname.split('.')
    let host = hostArr.length === 2 ? hostArr.join('.') : hostArr.slice(1).join('.')
    document.querySelector('.domain').innerHTML = host
})()
