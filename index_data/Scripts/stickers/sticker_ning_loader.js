const listNing = [
"0000024E","00000453","00001237","00001288","00002337","00002988","00003101","00003989","00005508","00005603",
"00005696","00005921","00005967","00005998","00006221","00006393","00006577","00006794","00009749","00010000",
"00011171","00011375","00012392","00012576","00012952","00013938","00015961","00016462","00016491","00017640"
];
function loadNing() {
  for(var i = 0; i < listNing.length; i++) {
    var location = "index_data/Resources/Stickers/Ning/";
    var format = ".png";
    const list = document.getElementById("NingSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listNing[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}