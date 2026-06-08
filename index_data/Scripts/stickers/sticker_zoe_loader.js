const listZoesticker = [
"00015291"
];
function loadZoe() {
  for(var i = 0; i < listZoesticker.length; i++) {
    var location = "index_data/Resources/Stickers/Zoe/";
    var format = ".png";
    const list = document.getElementById("ZoeSlist");
    const asset = document.createElement('img');
    asset.className = "sticker";
    asset.src = location + listZoesticker[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}