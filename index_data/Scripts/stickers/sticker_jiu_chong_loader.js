const listJiu = [
"0000024E","00005529","00014876"
];
function loadJiu() {
  for(var i = 0; i < listJiu.length; i++) {
    var location = "../Resources/Stickers/Jiu/";
    var format = ".png";
    const list = document.getElementById("JiuSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listJiu[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}