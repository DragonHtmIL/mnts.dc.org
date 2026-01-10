const wallpapers = [
  // Array of wallpaper image URLs or objects with image URLs
  {url:"00000160"},{url:"00000218"},{url:"00000219"},{url:"00000220"},{url:"00000221"},
  {url:"00000222"},{url:"00000225"},{url:"00000226"},{url:"00000359"},{url:"00000392"},
  {url:"00000419"},{url:"00000704"},{url:"00000746"},{url:"00000794"},{url:"00000915"},
  {url:"00001173"},{url:"00001352"},{url:"00001437"},{url:"00001517"},{url:"00001540"},
  {url:"00001547"},{url:"00001690"},{url:"00001705"},{url:"00001786"},{url:"00001846"},
  {url:"00002235"},{url:"00002372"},{url:"00002427"},{url:"00002947"},{url:"00002998"},
  {url:"00003009"},{url:"00003059"},{url:"00003415"},{url:"00003418"},{url:"00003594"},
  {url:"00003787"},{url:"00003850"},{url:"00003943"},{url:"00004022"},{url:"00004206"},
  {url:"00004445"},{url:"00004490"},{url:"00004636"},{url:"00004671"},{url:"00004745"},
  {url:"00004776"},{url:"00004776_0"},{url:"00004858"},{url:"00005463"},{url:"00005521"},
  {url:"00005569"},{url:"00005626"},{url:"00005828"},{url:"00005876"},{url:"00005889"},
  {url:"00005907"},{url:"00006043"},{url:"00006069"},{url:"00006122"},{url:"00006189"},
  {url:"00006240"},{url:"00006416"},{url:"00006452"},{url:"00006456"},{url:"00006525"},
  {url:"00006597"},{url:"00006728"},{url:"00006905"},{url:"00006906"},{url:"00006998"},
  {url:"00007050"},{url:"00007125"},{url:"00007153"},{url:"00007370"},{url:"00007470"},
  {url:"00007529"},{url:"00007854"},{url:"00007914"},{url:"00007934"},{url:"00008138"},
  {url:"00008148"},{url:"00008157"},{url:"00008577"},{url:"00008956"},{url:"00009068"},
  {url:"00009103"},{url:"00009158"},{url:"00009159"},{url:"00009408"},{url:"00009527"},
  {url:"00009576"},{url:"00009631"},{url:"00009648"},{url:"00009743"},{url:"00009758"},
  {url:"00009886"},{url:"00009888"},{url:"00009889"},{url:"00009948"},{url:"00009988"},
  {url:"00010021"},{url:"00010066"},{url:"00010088"},{url:"00010354"},{url:"00010370"},
  {url:"00010445"},{url:"00010481_0"},{url:"00010499"},{url:"00010565"},{url:"00010614"},
  {url:"00010654"},{url:"00010655"},{url:"00010725"},{url:"00010909"},{url:"00010969"},
  {url:"00011089"},{url:"00011122"},{url:"00011166"},{url:"00011168"},{url:"00011227"},
  {url:"00011699"},{url:"00011740"},{url:"00011855"},{url:"00012124"},{url:"00012219"},
  {url:"00012236"},{url:"00012395"},{url:"00012482"},{url:"00012515"},{url:"00012548"},
  {url:"00012570"},{url:"00012896"},{url:"00012897"},{url:"00012981"},{url:"00013124"},
  {url:"00013278"},{url:"00013355"},{url:"00013380"},{url:"00013678"},{url:"00013766"},
  {url:"00013950"},{url:"00013992"},{url:"00013995"},{url:"00014727"},{url:"00014860"},
  {url:"00015153"},{url:"00015158"},{url:"00015190"},{url:"00015249"},{url:"00015441"},
  {url:"00015730"},{url:"00015765"},{url:"00016139"},{url:"00016285"},{url:"00016482"},
  {url:"00016501"},{url:"00016667"},{url:"00016796_0"},{url:"00016807"},{url:"00016880"},
  {url:"00016884"},{url:"00016939"},{url:"00016954"},{url:"00016987"},{url:"00016988"},
  {url:"00017100"},{url:"00017127"},{url:"00017245"},{url:"00017354"},{url:"00017432"},
  {url:"00017563"},{url:"00017796"},{url:"00017946"},{url:"00017946_0"},{url:"00018206"},
  {url:"00018294"},{url:"00018933"},{url:"00019066"},{url:"00019225"},{url:"00020013"},
  {url:"00020233"},{url:"00021106"},{url:"207011004"},{url:"207011006"},{url:"207011007"},
  {url:"207011008"},{url:"207011009"},{url:"207011010"},{url:"207011011"},{url:"207011012"},
  {url:"207011014"},{url:"207011015"},{url:"207011016"},{url:"207011019"},{url:"207011022"},
  {url:"207011023"},{url:"207011024"},{url:"207011026"},{url:"207011030"},{url:"207011032"},
  {url:"207011033"},{url:"207011050"},{url:"207011052"},{url:"207011056"},{url:"207011057"},
  {url:"207011059"},{url:"207011060"},{url:"207011062"},{url:"207011063"},{url:"207011064"},
  {url:"207011066"},{url:"207011067"},{url:"207011069"},{url:"207011070"},{url:"207011071"},
  {url:"207011072"},{url:"207011073"},{url:"207011074"},{url:"207011075"},{url:"207018034"},
  {url:"207018035"},{url:"207018036"},{url:"207018037"}
  // ... more wallpaper data ...
];

const wallpapersPerPage = 10;
let currentPage = 1;

function displayWallpapers(page) {
  const container = document.getElementById("imagesSlist");
  const format = ".png";
  const location = "../Resources/Wallpapers/";
  container.innerHTML = ""; // Clear existing wallpapers

  const startIndex = (page - 1) * wallpapersPerPage;
  const endIndex = startIndex + wallpapersPerPage;
  const pageWallpapers = wallpapers.slice(startIndex, endIndex);

  pageWallpapers.forEach((wallpaper) => {
    const img = document.createElement("img");
    img.src = location + wallpaper.url + format; // or wallpaper
    container.appendChild(img);
    img.addEventListener('click', function() {
      showImage(this);
    });
  });
}

function displayPagination() {
  const pagination = document.getElementById("imgpagination");
  pagination.innerHTML = ""; // Clear existing buttons

  const totalPages = Math.ceil(wallpapers.length / wallpapersPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("span");
    var element = document.getElementById("categories");
    button.className = "pagination";
    button.textContent = i;
    button.setAttribute('id', 'num' + [i]);
    button.addEventListener("click", evt => {
      currentPage = i;
      displayWallpapers(currentPage);
      activePaginationAi(evt);
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    });
    pagination.appendChild(button);
  }
}

function activePaginationAi(evt) {
  var pagination;
  pagination = document.getElementsByClassName("pagination");
  for (i = 0; i < pagination.length; i++) {
    pagination[i].className = pagination[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
}
// Initial display
displayWallpapers(currentPage);
displayPagination();