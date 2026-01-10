const listVita = [
"0000024E","00002267","00006207","00008378","00009100","00010264","00019389"
];
function loadVita() {
  for(var i = 0; i < listVita.length; i++) {
    var location = "../Resources/Stickers/Vita/";
    var format = ".png";
    const list = document.getElementById("VitaSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listVita[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}