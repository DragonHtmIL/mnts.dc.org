const listNorma = [
"00010668"
];
function loadNorma() {
  for(var i = 0; i < listNorma.length; i++) {
    var location = "../Resources/Stickers/Norma/";
    var format = ".png";
    const list = document.getElementById("NormaSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listNorma[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}