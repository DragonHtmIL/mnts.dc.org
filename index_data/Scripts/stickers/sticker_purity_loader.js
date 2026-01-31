const listPuritysticker = [
"00010414"
];
function loadPurity() {
  for(var i = 0; i < listPuritysticker.length; i++) {
    var location = "index_data/Resources/Stickers/Purity/";
    var format = ".png";
    const list = document.getElementById("PuritySlist");
    const asset = document.createElement('img');
    asset.className = "sticker";
    asset.src = location + listPuritysticker[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}