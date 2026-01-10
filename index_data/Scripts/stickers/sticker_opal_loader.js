const listOpal = [
"00004977","00007315_0","00012520"
];
function loadOpal() {
  for(var i = 0; i < listOpal.length; i++) {
    var location = "../Resources/Stickers/Opal/";
    var format = ".png";
    const list = document.getElementById("OpalSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listOpal[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}