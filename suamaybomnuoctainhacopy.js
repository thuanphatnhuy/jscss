function FSAddOriginalLink(){
    var body_element = document.getElementsByTagName('body')[0];
    var selection;
    selection = window.getSelection();
    var pagelink = "<br/><br/>VÀO ĐÂY COPY SẺ TỐT CHO SEO NHANH LÊN TOP GOOGLE : <a href='http://dvsuachuanha.com/sua-chua-may-bom-nuoc-tai-nha-tphcm.html'>http://dvsuachuanha.com/sua-chua-may-bom-nuoc-tai-nha-tphcm.html"+document.location.pathname+"</a>";
    var copytext = pagelink;
    var newdiv = document.createElement('div');
    newdiv.style.position='absolute';
    newdiv.style.left='-99999px';
    body_element.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);
    window.setTimeout(function() {
        body_element.removeChild(newdiv);
    },0);
}
document.oncopy = FSAddOriginalLink;