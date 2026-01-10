const aIwallpapers = [
  // Array of wallpaper image URLs or objects with image URLs
  {url:"00001352"}
  // ... more wallpaper data ...
];

const wallpapersAIPerPage = 10;
let currentAIPage = 1;

function displayAIWallpapers(aipage) {
  const container = document.getElementById("AISlist");
  const format = ".png";
  const location = "../Resources/Wallpapers/AI/";
  container.innerHTML = ""; // Clear existing wallpapers

  const startIndex = (aipage - 1) * wallpapersAIPerPage;
  const endIndex = startIndex + wallpapersAIPerPage;
  const pageWallpapers = aIwallpapers.slice(startIndex, endIndex);

  pageWallpapers.forEach((aIwallpaper) => {
    const img = document.createElement("img");
    img.src = location + aIwallpaper.url + format; // or wallpaper
    container.appendChild(img);
    img.addEventListener('click', function() {
      showImage(this);
    });
  });
}

function displayAIPagination() {
  const pagination = document.getElementById("aipagination");
  pagination.innerHTML = ""; // Clear existing buttons

  const totalPages = Math.ceil(aIwallpapers.length / wallpapersAIPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("span");
    var element = document.getElementById("categories");
    button.className = "pagination-ai";
    button.textContent = i;
    button.setAttribute('id', 'numAI' + [i]);
    button.addEventListener("click", evt => {
      currentAIPage = i;
      displayAIWallpapers(currentAIPage);
      activePagination(evt);
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    });
    pagination.appendChild(button);
  }
}

function activePagination(evt) {
  var pagination;
  pagination = document.getElementsByClassName("pagination-ai");
  for (i = 0; i < pagination.length; i++) {
    pagination[i].className = pagination[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
}
// Initial display
displayAIWallpapers(currentAIPage);
displayAIPagination();