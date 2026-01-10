const listRom = [
"0000024E","0000024A","00000835","00001919","00002563","00003039","00003129","00003198","00003732","00004091",
"00005316","00005356","00006186","00007051","00008083","00009011","00011334","00011508","00013420","00013605",
"00013669","00014385","00014703","00015075","00015136","00015734","00016536","00016918","00018762"
];
function loadRom() {
  for(var i = 0; i < listRom.length; i++) {
    var location = "index_data/Resources/Stickers/Rom/";
    var format = ".png";
    const list = document.getElementById("RomSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listRom[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}