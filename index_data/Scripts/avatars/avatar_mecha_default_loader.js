const listmDefavatar = [
"Akashic","Alborada","Andromeda","Arthur","Aurora","Boltus","Caramel","Death Knell","Doomlight","Dreadwolf",
"Firefox","Firestar","Flamenco","Gabriel","Gaia","Guerilla Hunter","Hotsteel","Hurricane","Jojo","Lancelot",
"Mechael","Moon Rabbit","Nebula","Neutron Star","Northern Knight","Pulsar","Ranger","Raven","Shiranui","Skyfall",
"Skyfire","Skylark","Snow Mirage","Tempest","Trio of Enders","Twilight","Ventorus"
];
function loadmDef() {
  for(var i = 0; i < listmDefavatar.length; i++) {
    var location = "index_data/Resources/Avatars/mDef/";
    var format = ".png";
    const list = document.getElementById("mDefSlist");
    const asset = document.createElement('img');
    asset.className = "avatar";
    asset.src = location + listmDefavatar[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}