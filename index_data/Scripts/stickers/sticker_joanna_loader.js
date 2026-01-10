const listJoanna = [
"0000024E","00000300","00000640","00001619","00002640","00003786","00005116","00006178","00008137","00008318",
"00008342","00011294","00012362","00015156","00015399","00015544","00015726","00017983"
];
function loadJoanna() {
  for(var i = 0; i < listJoanna.length; i++) {
    var location = "index_data/Resources/Stickers/Joanna/";
    var format = ".png";
    const list = document.getElementById("JoannaSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listJoanna[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}