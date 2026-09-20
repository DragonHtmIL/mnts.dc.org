const viDwallpapers = [
  // Array of wallpaper image URLs or objects with image URLs
  {url:"00000000"}
  // ... more wallpaper data ...
];

const wallpapersVidPerPage = 10;
let currentVidPage = 1;

function displayVidWallpapers(vidpage) {
  const container = document.getElementById("videoSlistWallpapers");
  const format = ".mp4";
  const location = "index_data/Resources/Wallpapers/Video/";
  container.innerHTML = ""; // Clear existing wallpapers

  const startIndex = (vidpage - 1) * wallpapersVidPerPage;
  const endIndex = startIndex + wallpapersVidPerPage;
  const pageWallpapers = viDwallpapers.slice(startIndex, endIndex);

  pageWallpapers.forEach((viDwallpaper) => {
    const vidContainer = document.createElement("div");
    const vid = document.createElement("video");
    const play = document.createElement("span");
    vidContainer.className = "vid-mini";
    vid.src = location + viDwallpaper.url + format; // or wallpaper
    vid.className = "wallpaper";
    vid.loop = true;
    play.className = "play-mini paused";
    container.appendChild(vidContainer);
    vidContainer.appendChild(vid);
    vidContainer.appendChild(play);
    vid.addEventListener('click', function() {
      showVideo(this);
    });
    play.addEventListener('click', function() {
      if (vid.paused) {
        vid.play();
        play.classList.remove("paused");
        play.classList.add("played");
      } else {
        vid.pause();
        play.classList.remove("played");
        play.classList.add("paused");
      }
    });
  });
}

function displayVidPagination() {
  const pagination = document.getElementById("vidpagination");
  pagination.innerHTML = ""; // Clear existing buttons

  const totalPages = Math.ceil(viDwallpapers.length / wallpapersVidPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("span");
    const element = document.getElementById("videoSlistWallpapers");
    button.className = "pagination-vid";
    button.textContent = i;
    button.setAttribute('id', 'numVid' + [i]);
    button.addEventListener("click", evt => {
      currentVidPage = i;
      if(button.classList.contains('active')) {
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"});
      }else{
        displayVidWallpapers(currentVidPage);
        activePaginationVid(evt);
      };
    });
    pagination.appendChild(button);
  }
}

function activePaginationVid(evt) {
  var pagination;
  pagination = document.getElementsByClassName("pagination-vid");
  for (i = 0; i < pagination.length; i++) {
    pagination[i].className = pagination[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
}
// Initial display
displayVidWallpapers(currentVidPage);
displayVidPagination();