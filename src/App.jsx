import { useState } from 'react'
import './App.css'
import cyberpunkImage from './assets/cyberpunkimage.jpg'
import zeldaImage from './assets/Zelda Tears of the Kingdom.jpg'
import fortniteImage from './assets/fortniteiamge.jpg'
import godOfWarImage from './assets/God of War Ragnarök.jpg'
import stardewImage from './assets/Stardew Valley.jpg'
import valorantImage from './assets/Valorant.jpeg'

const games = [
  { id: 1, name: 'Cyberpunk 2077', platform: 'PC, PS5, Xbox', theme: 'Sci‑fi / RPG', image: cyberpunkImage },
  { id: 2, name: 'Zelda: Tears of the Kingdom', platform: 'Nintendo Switch', theme: 'Aventura / Fantasía', image: zeldaImage },
  { id: 3, name: 'Fortnite', platform: 'PC, PlayStation, Xbox', theme: 'Battle Royale / Multijugador', image: fortniteImage },
  { id: 4, name: 'God of War Ragnarök', platform: 'PS5, PS4', theme: 'Acción / Mitología', image: godOfWarImage },
  { id: 5, name: 'Stardew Valley', platform: 'PC, Switch, Mobile', theme: 'Simulación / Relax', image: stardewImage },
  { id: 6, name: 'Valorant', platform: 'PC', theme: 'Shooter / Competitivo', image: valorantImage },
]

function App() {
  const [favorites, setFavorites] = useState([])

  const favoriteGames = games.filter((game) => favorites.includes(game.id))

  function toggleFavorite(gameId) {
    setFavorites((actual) => {
      if (actual.includes(gameId)) {
        return actual.filter((id) => id !== gameId)
      }
      return [...actual, gameId]
    })
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">GameHub</div>
        <nav className="topbar-nav">
          <a href="#inicio">Inicio</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#favoritos">Favoritos</a>
        </nav>
      </header>

      <main className="page-content">
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">Bienvenido</p>
            <h1>GameHub</h1>
            <p className="hero-text">
              Encuentra juegos para jugar, explorar y guardar en tus favoritos.
            </p>
            <div className="hero-actions">
              <a href="#catalogo" className="primary-btn">Catálogo</a>
              <a href="#favoritos" className="secondary-btn">Favoritos</a>
            </div>
          </div>
        </section>

        <section className="catalog-section" id="catalogo">
          <h2>Juegos destacados</h2>

          <div className="catalog-grid">
            {games.map((game) => {
              const isFavorite = favorites.includes(game.id)

              return (
                <article key={game.id} className="game-card">
                  <div className="game-cover">
                    <img src={game.image} alt={game.name} />
                  </div>

                  <div className="game-info">
                    <div className="game-header">
                      <h3>{game.name}</h3>
                      <button
                        type="button"
                        className={isFavorite ? 'favorite-btn active' : 'favorite-btn'}
                        onClick={() => toggleFavorite(game.id)}
                      >
                        {isFavorite ? '★ Favorito' : '☆ Favorito'}
                      </button>
                    </div>

                    <p>Plataforma: {game.platform}</p>
                    <p>Tema: {game.theme}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <aside className="favorites-panel" id="favoritos">
          <div className="favorites-header">
            <h3>Lista de favoritos</h3>
            <span className="favorites-count">{favoriteGames.length}</span>
          </div>

          {favoriteGames.length === 0 ? (
            <p className="empty-state">Aún no agregas ningún juego.</p>
          ) : (
            <ul className="favorites-list">
              {favoriteGames.map((game) => (
                <li key={game.id}>{game.name}</li>
              ))}
            </ul>
          )}
        </aside>
      </main>

      <footer className="credits">
        <p>© 2026 GameHub</p>
      </footer>
    </div>
  )
}

export default App
