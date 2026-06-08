const listLilliansticker = [
"0000024E","00006052","00009486","00012859"
];
function loadLillian() {
  for(var i = 0; i < listLilliansticker.length; i++) {
    var location = "index_data/Resources/Stickers/Lillian/";
    var format = ".png";
    const list = document.getElementById("LillianSlist");
    const asset = document.createElement('img');
    asset.className = "sticker";
    asset.src = location + listLilliansticker[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}