// Tự động detect URL hiện tại
function getCurrentURL() {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  // Fallback URLs cho các trường hợp phổ biến
  return "http://127.0.0.1:5500";
}

// Spotify API Configuration
const SPOTIFY_CONFIG = {
  CLIENT_ID: "2c831e07ea00425796f367456232ffa9",
  CLIENT_SECRET: "84e2093ddce84e3caa49ed22ace1905d",
  get REDIRECT_URI() {
    return getCurrentURL();
  },

};

console.log(`
🎵 SPORTIFY WEB PLAYER
📝 Cấu hình:
- Client ID: ${SPOTIFY_CONFIG.CLIENT_ID ? "✅" : "❌"}
- Client Secret: ${SPOTIFY_CONFIG.CLIENT_SECRET ? "✅" : "❌"}
- Redirect URI: ${SPOTIFY_CONFIG.REDIRECT_URI}
`);

// <!-- <div class="track-card">
//                         <div class="track-card-container">
//                             <img src="https://i1.sndcdn.com/artworks-XZUgjhLNRpQWbPXa-Kt09hQ-t1080x1080.jpg" alt="">
//                             <h3>Cure</h3>
//                             <p>Till</p>
//                         </div>
//                     </div> -->
//                     <!-- <div class="track-card">
//                         <div class="track-card-container">
//                             <img src="https://i.pinimg.com/originals/1b/ef/e1/1befe1790551b1b34361b1268cf51c08.jpg"
//                                 alt="">
//                             <h3>Black Sorrow</h3>
//                             <p>Ivan</p>
//                         </div>
//                     </div>
//                     <div class="track-card">
//                         <div class="track-card-container">
//                             <img src="https://images6.alphacoders.com/138/1382591.jpg" alt="">
//                             <h3>Ruler Of My Heart</h3>
//                             <p>Luka</p>
//                         </div>
//                     </div>
//                     <div class="track-card">
//                         <div class="track-card-container">
//                             <img src="https://i.scdn.co/image/ab67616d0000b2731578debc0e6bb047dd20a02b" alt="">
//                             <h3>Legends Never Die</h3>
//                             <p>Against The Current</p>
//                         </div>
//                     </div>
//                     <div class="track-card">
//                         <div class="track-card-container">
//                             <img src="https://i1.sndcdn.com/artworks-ykqBcysioifk2nI7-yNkIyg-t500x500.jpg" alt="">
//                             <h3>Star Walkin'</h3>
//                             <p>Lil Nas X</p>
//                         </div>
//                     </div>
//                     <div class="track-card">
//                         <div class="track-card-container">
//                             <img src="https://s.isanook.com/ga/0/ud/236/1180450/lol-worlds-2023-gods-mv-cover.jpg?ip/crop/w670h402/q80/jpg"
//                                 alt="">
//                             <h3>GODS</h3>
//                             <p>NewJeans</p>
//                         </div>
//                     </div>
//                     <div class="track-card">
//                         <div class="track-card-container">
//                             <img src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da845781464e897c5f9eb1f14490"
//                                 alt="">
//                             <h3>Summertime Sadness</h3>
//                             <p>Lana Del Grey</p>
//                         </div>
//                     </div>
//                     <div class="track-card">
//                         <div class="track-card-container">
//                             <img src="https://i1.sndcdn.com/artworks-JiYl4XLJxYsIAmFE-1g33lA-t500x500.jpg" alt="">
//                             <h3>Glimpse Of Us</h3>
//                             <p>Joji</p>
//                         </div>
//                     </div>
//                     <div class="track-card">
//                         <div class="track-card-container">
//                             <img src="https://cdn-images.dzcdn.net/images/cover/2aa6b47b8a8db1a1d50a54eb9ba5902c/1900x1900-000000-80-0-0.jpg"
//                                 alt="">
//                             <h3>Strawberries & Cigarettes</h3>
//                             <p>Troye Sivan</p>
//                         </div>
//                     </div>
//                     <div class="track-card">
//                         <div class="track-card-container">
//                             <img src="https://i.scdn.co/image/ab67616d0000b273a048415db06a5b6fa7ec4e1a" alt="">
//                             <h3>Die For You</h3>
//                             <p>The Weeknd ft. Ariana Grande</p>
//                         </div>
//                     </div>
//                     <div class="track-card">
//                         <div class="track-card-container">
//                             <img src="https://creekhilife.com/wp-content/uploads/2016/01/ONE-DIRECTION.jpg" alt="">
//                             <h3>Night Changes</h3>
//                             <p>One Direction</p>
//                         </div>
//                     </div>
//                     <div class="track-card">
//                         <div class="track-card-container">
//                             <img src="https://i.scdn.co/image/ab67616d0000b27360a89b781c62ffe2136e4396" alt="">
//                             <h3>Memories</h3>
//                             <p>Conan Gray</p>
//                         </div>
//                     </div> -->