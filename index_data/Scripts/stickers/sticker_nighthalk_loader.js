const listNighthalksticker = [
"00011633"
];
function loadNighthalk() {
  for(var i = 0; i < listNighthalksticker.length; i++) {
    var location = "index_data/Resources/Stickers/Nighthalk/";
    var format = ".png";
    const list = document.getElementById("NighthalkSlist");
    const asset = document.createElement('img');
    asset.className = "sticker";
    asset.src = location + listNighthalksticker[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}