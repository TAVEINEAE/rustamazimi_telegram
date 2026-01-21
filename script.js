const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

if (tg.colorScheme === 'dark') document.body.dataset.theme = 'dark';

let favorites = [];
let currentAlbum = null;

const songsData = [
  { id:1, name: "Mastam", year:2025, img:"https://picsum.photos/600/600?random=21", album:"Singles 2025", youtube:"https://www.youtube.com/watch?v=oJCchv9FYYY" },
  { id:2, name: "Chi kunam", year:2025, img:"https://picsum.photos/600/600?random=22", album:"Singles 2025", youtube:"https://www.youtube.com/watch?v=fYIawxF1c34" },
  { id:3, name: "Odate", year:2025, img:"https://picsum.photos/600/600?random=23", album:"Singles 2025", youtube:"https://www.youtube.com/watch?v=_ic4Ns3xLkI" },
  { id:4, name: "Ey dust", year:2025, img:"https://picsum.photos/600/600?random=24", album:"Singles 2025", youtube:"https://www.youtube.com/watch?v=GAyAxfLScD4" },
  { id:5, name: "Shahlo", year:2023, img:"https://picsum.photos/600/600?random=25", album:"Singles 2023", youtube:"https://www.youtube.com/watch?v=utSpSwc0kqA" },
  { id:6, name: "Leyla", year:2019, img:"https://picsum.photos/600/600?random=26", album:"Dili Devona" },
  { id:7, name: "Bevafo", year:2023, img:"https://picsum.photos/600/600?random=27", album:"Singles 2023" },
  { id:8, name: "Ijoza Deh", year:2024, img:"https://picsum.photos/600/600?random=28", album:"Singles 2024" },
  { id:9, name: "Imshab", year:2024, img:"https://picsum.photos/600/600?random=29", album:"Singles 2024" },
  { id:10, name: "Pushaymonam", year:2022, img:"https://picsum.photos/600/600?random=30", album:"Dili Devona" },
  // Добавь ещё 20–50 треков по аналогии (или используй генерацию), чтобы было >100
  // Пример:
  { id:11, name: "Yori Man", year:2026, img:"https://picsum.photos/600/600?random=31", album:"New 2026" },
  // ... и т.д. до 100+ (можно дублировать с разными id/img для теста)
];

const albums = [...new Set(songsData.map(s => s.album))];

function renderSongs(list) {
  const el = document.getElementById('songs');
  el.innerHTML = '';
  list.forEach(s => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img class="card-img" src="${s.img}" alt="${s.name}">
      <div class="card-body">
        <div class="card-title">${s.name} <small>(${s.year})</small></div>
        <button class="add-to-favorites" onclick="addToFavorites(${s.id})">♡ В плейлист</button>
        <button class="btn-primary small" onclick="window.open('${s.youtube || '#'}', '_blank')">Слушать</button>
      </div>
    `;
    el.appendChild(card);
  });
}

function renderAlbums() {
  const el = document.getElementById('albums');
  el.innerHTML = '';
  albums.forEach(alb => {
    const card = document.createElement('div');
    card.className = 'card category-card';
    card.innerHTML = `<div class="card-title">${alb}</div>`;
    card.onclick = () => showAlbum(alb);
    el.appendChild(card);
  });
}

function updateFavorites() {
  document.getElementById('favorites-count').textContent = favorites.length;
  document.getElementById('favorites-badge').textContent = favorites.length;

  const list = document.getElementById('favorites-list');
  list.innerHTML = '';
  favorites.forEach((s, i) => {
    const item = document.createElement('div');
    item.className = 'favorite-item';
    item.innerHTML = `
      <img src="${s.img}" class="favorite-img">
      <div>${s.name} (${s.year}) — ${s.album}</div>
      <button onclick="removeFavorite(${i})">×</button>
    `;
    list.appendChild(item);
  });
}

function addToFavorites(id) {
  const song = songsData.find(s => s.id === id);
  if (song && !favorites.some(f => f.id === id)) {
    favorites.push(song);
    updateFavorites();
    tg.showPopup({title:"Добавлено", message:`${song.name} в вашем плейлисте`});
  }
}

function removeFavorite(index) {
  favorites.splice(index, 1);
  updateFavorites();
}

function showPage(page) {
  document.querySelectorAll('.page, #songs, #hero, .search-container').forEach(e => e.style.display = 'none');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector(`[data-page="${page}"]`).classList.add('active');

  if (page === 'main') {
    document.getElementById('hero').style.display = 'flex';
    document.querySelector('.search-container').style.display = 'block';
    document.getElementById('songs').style.display = 'grid';
    document.getElementById('section-title').textContent = 'Популярные треки';
    renderSongs(songsData.slice(0, 12)); // топ
  } else if (page === 'catalog') {
    document.getElementById('catalog-page').style.display = 'block';
    renderAlbums();
  } else if (page === 'favorites') {
    document.getElementById('favorites-page').style.display = 'block';
    updateFavorites();
  } else if (page === 'profile') {
    tg.showPopup({
      title: "Rustam Azimi",
      message: "Официальный канал:\nInstagram: @rustamazimi\nYouTube: Rustam Azimi\nTelegram: t.me/Rustam_Music",
      buttons: [{type:"ok"}]
    });
  }
}

function showAlbum(album) {
  document.getElementById('catalog-page').style.display = 'none';
  document.getElementById('songs').style.display = 'grid';
  document.getElementById('section-title').textContent = album;
  const filtered = songsData.filter(s => s.album === album);
  renderSongs(filtered);
}

function filterSongs() {
  const q = document.getElementById('search-input').value.toLowerCase();
  const filtered = songsData.filter(s => s.name.toLowerCase().includes(q));
  renderSongs(filtered);
}

// Навигация
document.querySelectorAll('.nav-item').forEach(item => {
  item.onclick = () => showPage(item.dataset.page);
});

// Старт
showPage('main');
