let accessToken;
document.addEventListener("DOMContentLoaded", function () {
    initialApp();
    setupSearchListener();
});
let searchTimeOut;
function setupSearchListener() {
  const inputSearch = document.getElementById("input-search");
  inputSearch.addEventListener("input", (e) => {
    const querry = e.target.value.trim();
    clearTimeout(searchTimeOut);
    //debounce
    searchTimeOut = setTimeout(async () => {
      if (querry) {
        const response = await getPopularTrack(querry);
        resetTrack();
        displayTrack(response.tracks.items);
      }
    }, 500);
  });
}

function resetTrack() {
    const trackSection = document.getElementById("track-section");
    trackSection.innerHTML = "";
}

async function initialApp() {
    accessToken = await getSpotifyToken();
    if (accessToken) {
        const response = await getPopularTrack();
        displayTrack(response.tracks.items);

    }
}

function playTrack (id, name, artistName){
  const iframe = document.getElementById("iframe");
  iframe.src = `https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`;
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  const modalname = document.getElementById("modal-name");
  modalname.innerHTML = name;
}

function handelClose(){
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function displayTrack(data) {
    console.log(data);
    data.forEach((item) => {
        // console.log(item.id);
        const imageUrl = item.album.images[0].url;
        const name = item.name;
        const artistName = item.artists.map((item) => item.name).join(", ");
        console.log(artistName);
        //tao ra div
        const element = document.createElement("div");
        //gan class cho the div do
        element.className = "track-card";
        //gan noi dung cho the div
        element.innerHTML = ` <div class="track-card-container">
    <img src="${imageUrl}" 
    alt="">
    <h3>${name}</h3>
    <p>${truncateText(artistName, 25)}</p>
    </div>
    </div>`;

        //them evenlistener de phat nhac
        element.addEventListener("click", () => {
            playTrack(item.id, name, artistName);
        });

        //gan the div do vao track-section
        const trackSection = document.getElementById("track-section")
        trackSection.appendChild(element);
    });
}


function truncateText(text, number) {
    return text.length > number ? text.slice(0, number) + "..." : text;
}

async function getPopularTrack(querry = "tlinh") {
    try {
        const response = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                q: querry,
                type: "track",
                limit: "12",
            },
        });

        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


async function getSpotifyToken() {
    try {
        const credentials = btoa(
            `${SPOTIFY_CONFIG.CLIENT_ID}:${SPOTIFY_CONFIG.CLIENT_SECRET}`
        );
        const response = await axios.post(
            "https://accounts.spotify.com/api/token",
            "grant_type=client_credentials",
            {
                headers: {
                    Authorization: `Basic ${credentials}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        return response.data.access_token;
    } catch (error) {
        console.error("Error getting token:", error);
        return null;
    }
}


