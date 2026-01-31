const listYutongsticker = [
"0000024E","00009835","00011742","00016606"
];
function loadYutong() {
  for(var i = 0; i < listYutongsticker.length; i++) {
    var location = "index_data/Resources/Stickers/Yutong/";
    var format = ".png";
    const list = document.getElementById("YutongSlist");
    const asset = document.createElement('img');
    asset.className = "sticker";
    asset.src = location + listYutongsticker[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}