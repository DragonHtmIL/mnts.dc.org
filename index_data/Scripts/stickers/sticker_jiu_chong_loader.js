const listJiusticker = [
"0000024E","00005529","00014876"
];
function loadJiu() {
  for(var i = 0; i < listJiusticker.length; i++) {
    var location = "index_data/Resources/Stickers/Jiu/";
    var format = ".png";
    const list = document.getElementById("JiuSlist");
    const asset = document.createElement('img');
    asset.className = "sticker";
    asset.src = location + listJiusticker[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}