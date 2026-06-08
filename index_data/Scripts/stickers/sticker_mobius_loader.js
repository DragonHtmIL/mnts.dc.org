const listMobiussticker = [
"00003053"
];
function loadMobius() {
  for(var i = 0; i < listMobiussticker.length; i++) {
    var location = "index_data/Resources/Stickers/Mobius/";
    var format = ".png";
    const list = document.getElementById("MobiusSlist");
    const asset = document.createElement('img');
    asset.className = "sticker";
    asset.src = location + listMobiussticker[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}