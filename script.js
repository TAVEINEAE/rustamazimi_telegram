:root {
  --bg: #0a0a0a;
  --text: #f5f5f5;
  --accent: #006400;        /* тёмно-зелёный */
  --gold: linear-gradient(45deg, #d4af37, #ffd700); /* золотой градиент */
  --gray: #1e1e1e;
  --dark: #000000;
  --shadow: 0 10px 30px rgba(0,100,0,0.4); /* зелёное свечение */
}

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  overflow-x: hidden;
}

header {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 60px;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
  border-bottom: 1px solid rgba(212,175,55,0.15);
}

.logo {
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 700;
  background: var(--gold);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
}

.header-icons {
  font-size: 20px;
  color: var(--gold);
}

.hero {
  height: 60vh;
  min-height: 400px;
  background: url('https://picsum.photos/1200/800?random=1') center/cover no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  animation: fadeIn 1.5s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; } to { opacity: 1; }
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(10,10,10,0.9));
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: 4.5rem;
  margin: 0;
  background: var(--gold);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 20px rgba(0,0,0,0.8);
}

.hero p {
  font-size: 1.4rem;
  margin: 12px 0 24px;
  opacity: 0.9;
}

.btn-primary {
  background: var(--accent);
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: var(--shadow);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(0,100,0,0.6);
}

.btn-primary.small {
  padding: 10px 20px;
  font-size: 0.95rem;
  margin-top: 12px;
}

.search-container {
  padding: 80px 20px 20px;
}

.search-container input {
  width: 100%;
  padding: 14px 20px 14px 50px;
  background: var(--gray);
  border: 1px solid var(--accent);
  border-radius: 50px;
  color: var(--text);
  font-size: 1rem;
}

.search-container input::placeholder { color: #aaa; }

.section-title {
  padding: 0 20px;
  margin: 30px 0 16px;
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  background: var(--gold);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.songs-grid, .albums-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  padding: 0 20px;
}

.card {
  background: var(--gray);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s ease;
  box-shadow: var(--shadow);
  cursor: pointer;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0,100,0,0.5);
}

.card-img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
}

.card-body {
  padding: 16px;
  text-align: center;
}

.card-title {
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: var(--gold);
}

.add-to-favorites {
  background: transparent;
  border: 1px solid var(--gold);
  color: var(--gold);
  width: 100%;
  padding: 10px;
  border-radius: 30px;
  margin-top: 12px;
  cursor: pointer;
  transition: all 0.3s;
}

.add-to-favorites:hover {
  background: var(--gold);
  color: var(--dark);
}

.bottom-nav {
  position: fixed;
  bottom: 0; left: 0; right: 0;
  height: 70px;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(12px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid rgba(212,175,55,0.2);
  z-index: 1000;
}

.nav-item {
  color: #aaa;
  font-size: 0.9rem;
  text-align: center;
  cursor: pointer;
  transition: color 0.3s;
}

.nav-item.active, .nav-item:hover {
  color: var(--gold);
}

.badge {
  background: var(--accent);
  color: white;
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 12px;
  position: absolute;
  top: -8px;
  right: -10px;
}

.page { padding: 90px 0 100px; }

.favorite-item {
  display: flex;
  align-items: center;
  background: var(--gray);
  border-radius: 12px;
  margin: 12px 20px;
  padding: 12px;
  gap: 16px;
}

.favorite-img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 8px;
}

.profile-content {
  padding: 0 20px;
  font-size: 1rem;
  line-height: 1.6;
  color: #ddd;
}

.social-links {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.social-links a {
  color: var(--gold);
  text-decoration: none;
  font-weight: 500;
}

.social-links a:hover {
  text-decoration: underline;
}
