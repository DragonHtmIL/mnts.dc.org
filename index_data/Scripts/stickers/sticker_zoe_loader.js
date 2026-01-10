const listZoe = [
"00015291"
];
function loadZoe() {
  for(var i = 0; i < listZoe.length; i++) {
    var location = "../Resources/Stickers/Zoe/";
    var format = ".png";
    const list = document.getElementById("ZoeSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listZoe[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}