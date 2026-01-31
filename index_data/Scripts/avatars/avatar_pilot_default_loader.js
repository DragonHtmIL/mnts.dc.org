const listpDefavatar = [
"Aya","Belladona","Cyrus","Fran","Furanku","Iori","Ivan","Jaka","Jiu Cong","Joanna",
"Kije","Kikina","Kizuna Ai","Lillian","Lysa","Matilda","Mia","Mila","Mobius","Nighthalk",
"Ning","Norma","Opal","Purity","Red","Riko","Rom","Serena","Shin","Silver Deacon",
"Tarantula","Vanessa","Villar","Vita","Yang","Yulia","Yutong","Zoe"
];
function loadpDef() {
  for(var i = 0; i < listpDefavatar.length; i++) {
    var location = "index_data/Resources/Avatars/pDef/";
    var format = ".png";
    const list = document.getElementById("pDefSlist");
    const asset = document.createElement('img');
    asset.className = "avatar";
    asset.src = location + listpDefavatar[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}