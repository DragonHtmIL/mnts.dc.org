const listMilasticker = [
"0000024E","00004482","00008360","00009318","00010513","00011165","00014364","00015024","00015301","00015405"
];
function loadMila() {
  for(var i = 0; i < listMilasticker.length; i++) {
    var location = "index_data/Resources/Stickers/Mila/";
    var format = ".png";
    const list = document.getElementById("MilaSlist");
    const asset = document.createElement('img');
    asset.className = "sticker";
    asset.src = location + listMilasticker[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}