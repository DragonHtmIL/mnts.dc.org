const listIori = [
"00005268","00005653_0","00006386","00008106","00008532","00008880","00014563","00014974","00016058","00016405",
"00016808","00017074_0"
];
function loadIori() {
  for(var i = 0; i < listIori.length; i++) {
    var location = "index_data/Resources/Stickers/Iori/";
    var format = ".png";
    const list = document.getElementById("IoriSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listIori[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}