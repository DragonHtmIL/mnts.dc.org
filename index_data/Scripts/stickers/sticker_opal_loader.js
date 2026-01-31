const listOpalsticker = [
"00004977","00007315_0","00012520"
];
function loadOpal() {
  for(var i = 0; i < listOpalsticker.length; i++) {
    var location = "index_data/Resources/Stickers/Opal/";
    var format = ".png";
    const list = document.getElementById("OpalSlist");
    const asset = document.createElement('img');
    asset.className = "sticker";
    asset.src = location + listOpalsticker[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}