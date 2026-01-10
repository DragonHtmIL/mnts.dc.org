const listVillar = [
"00002462"
];
function loadVillar() {
  for(var i = 0; i < listVillar.length; i++) {
    var location = "index_data/Resources/Stickers/Villar/";
    var format = ".png";
    const list = document.getElementById("VillarSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listVillar[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}