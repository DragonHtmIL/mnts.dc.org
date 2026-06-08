const listBoundavatar = [
"Belladonna","Cyrus","Iori","Ivan","Jaka","Jiu Chong","Joanna","Kikina","Kizuna AI","Lillian",
"Mila","Mobius","Nighthalk","Ning","Norma","Opal","Purity","RED","Rom","Serena",
"Shin","Silver Deacon","Vanessa","Villar","Vita","Yutong","Zoe"
];
function loadBound() {
  for(var i = 0; i < listBoundavatar.length; i++) {
    var location = "index_data/Resources/Avatars/Bound/";
    var format = ".png";
    const list = document.getElementById("BoundSlist");
    const asset = document.createElement('img');
    asset.className = "avatar";
    asset.src = location + listBoundavatar[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}