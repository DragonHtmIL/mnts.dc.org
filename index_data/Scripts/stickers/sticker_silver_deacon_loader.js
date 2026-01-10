const listSilver = [
"0000024E","00005085","00005488"
];
function loadSilver() {
  for(var i = 0; i < listSilver.length; i++) {
    var location = "../Resources/Stickers/Silver/";
    var format = ".png";
    const list = document.getElementById("SilverSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listSilver[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}