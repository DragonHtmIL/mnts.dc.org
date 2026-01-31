const listNormasticker = [
"00010668"
];
function loadNorma() {
  for(var i = 0; i < listNormasticker.length; i++) {
    var location = "index_data/Resources/Stickers/Norma/";
    var format = ".png";
    const list = document.getElementById("NormaSlist");
    const asset = document.createElement('img');
    asset.className = "sticker";
    asset.src = location + listNormasticker[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}