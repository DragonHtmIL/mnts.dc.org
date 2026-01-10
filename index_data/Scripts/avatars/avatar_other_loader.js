const listOther = [
"00000121","00001026","00001279","00001861","00001956","00002293","00002406","00002436","00003074","00003219",
"00003326","00003387","00004212","00004229","00004555","00005371","00005575","00005717","00005892","00006174",
"00006804","00006848","00006919","00007509","00007777","00008090","00008155","00008686","00008884","00008913",
"00009033","00009192","00010058","00010202","00010534","00011175","00012529","00013412","00013677","00013778",
"00014641","00014667","00014874","00015124","00016141","00016603","00017368","00018033","00018996","00020498"
];
function loadOther() {
  for(var i = 0; i < listOther.length; i++) {
    var location = "../Resources/Avatars/Other/";
    var format = ".png";
    const list = document.getElementById("OtherSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listOther[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}