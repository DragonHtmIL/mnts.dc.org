const listYutong = [
"0000024E","00009835","00011742","00016606"
];
function loadYutong() {
  for(var i = 0; i < listYutong.length; i++) {
    var location = "../Resources/Stickers/Yutong/";
    var format = ".png";
    const list = document.getElementById("YutongSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listYutong[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}