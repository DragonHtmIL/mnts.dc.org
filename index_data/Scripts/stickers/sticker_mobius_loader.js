const listMobius = [
"00003053"
];
function loadMobius() {
  for(var i = 0; i < listMobius.length; i++) {
    var location = "index_data/Resources/Stickers/Mobius/";
    var format = ".png";
    const list = document.getElementById("MobiusSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listMobius[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}