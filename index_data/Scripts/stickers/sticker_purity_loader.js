const listPurity = [
"00010414"
];
function loadPurity() {
  for(var i = 0; i < listPurity.length; i++) {
    var location = "../Resources/Stickers/Purity/";
    var format = ".png";
    const list = document.getElementById("PuritySlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listPurity[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}