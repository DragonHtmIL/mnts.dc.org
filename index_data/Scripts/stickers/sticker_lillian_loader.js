const listLillian = [
"0000024E","00006052","00009486","00012859"
];
function loadLillian() {
  for(var i = 0; i < listLillian.length; i++) {
    var location = "../Resources/Stickers/Lillian/";
    var format = ".png";
    const list = document.getElementById("LillianSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listLillian[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}