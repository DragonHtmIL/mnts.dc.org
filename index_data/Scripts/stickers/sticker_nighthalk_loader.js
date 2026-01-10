const listNighthalk = [
"00011633"
];
function loadNighthalk() {
  for(var i = 0; i < listNighthalk.length; i++) {
    var location = "../Resources/Stickers/Nighthalk/";
    var format = ".png";
    const list = document.getElementById("NighthalkSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listNighthalk[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}