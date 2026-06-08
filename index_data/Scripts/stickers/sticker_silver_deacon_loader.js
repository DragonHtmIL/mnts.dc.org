const listSilversticker = [
"0000024E","00005085","00005488"
];
function loadSilver() {
  for(var i = 0; i < listSilversticker.length; i++) {
    var location = "index_data/Resources/Stickers/Silver/";
    var format = ".png";
    const list = document.getElementById("SilverSlist");
    const asset = document.createElement('img');
    asset.className = "sticker";
    asset.src = location + listSilversticker[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}