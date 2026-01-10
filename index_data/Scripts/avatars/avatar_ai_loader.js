const listAI = [
"00001","00003","00004","00000","00002","00005"
];
function loadAI() {
  for(var i = 0; i < listAI.length; i++) {
    var location = "index_data/Resources/Avatars/AI/";
    var format = ".png";
    const list = document.getElementById("AISlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listAI[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}