const listMila = [
"0000024E","00004482","00008360","00009318","00010513","00011165","00014364","00015024","00015301","00015405"
];
function loadMila() {
  for(var i = 0; i < listMila.length; i++) {
    var location = "../Resources/Stickers/Mila/";
    var format = ".png";
    const list = document.getElementById("MilaSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listMila[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}