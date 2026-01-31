const listShinsticker = [
"00005232"
];
function loadShin() {
  for(var i = 0; i < listShinsticker.length; i++) {
    var location = "index_data/Resources/Stickers/Shin/";
    var format = ".png";
    const list = document.getElementById("ShinSlist");
    const asset = document.createElement('img');
    asset.className = "sticker";
    asset.src = location + listShinsticker[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}