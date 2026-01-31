const listAIavatar = [
"00001","00003","00004","00000","00002","00005"
];
function loadAIAv() {
  for(var i = 0; i < listAIavatar.length; i++) {
    var location = "index_data/Resources/Avatars/AI/";
    var format = ".png";
    const list = document.getElementById("AISlist");
    const asset = document.createElement('img');
    asset.className = "avatar";
    asset.src = location + listAIavatar[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}