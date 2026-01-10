const listVanessa = [
"00001815","00001983","00007942","00009543","00010275"
];
function loadVanessa() {
  for(var i = 0; i < listVanessa.length; i++) {
    var location = "index_data/Resources/Stickers/Vanessa/";
    var format = ".png";
    const list = document.getElementById("VanessaSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listVanessa[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}