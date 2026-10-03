import { useState } from "react";
import { featuredSongs, type Song } from "@relapse/shared";
import "./styles.css";

function App() {
  const [selected, setSelected] = useState<Song | null>(null);

  return (
    <main className="shell">
      <nav><strong>relapse<span>°</span></strong><a href="#discover">Discover</a><a href="#memories">My memories</a><button>Sign in</button></nav>
      <section className="hero">
        <p className="eyebrow">MUSIC FOR REMEMBERING</p>
        <h1>Some songs take<br /><em>you back.</em></h1>
        <p className="intro">A space for the songs, stories, and moments you never really left behind.</p>
        <button className="primary" onClick={() => setSelected(featuredSongs[0])}>Start reminiscing <span>→</span></button>
      </section>
      <section id="discover" className="section"><div className="section-heading"><div><p className="eyebrow">CURATED FOR YOU</p><h2>Where do you want to go?</h2></div><a href="#all">View all →</a></div>
        <div className="cards">{featuredSongs.map((song) => <button className="card" key={song.id} onClick={() => setSelected(song)}><div className="art" style={{ background: song.coverColor }}><span>♫</span></div><div className="card-copy"><small>{song.year} · {song.mood.replace("-", " ")}</small><h3>{song.title}</h3><p>{song.artist}</p></div><span className="play">▶</span></button>)}</div>
      </section>
      <section id="memories" className="quote"><p>“Music is the shorthand of emotion.”</p><small>— Leo Tolstoy</small></section>
      {selected && <div className="now-playing"><div><small>NOW PLAYING</small><strong>{selected.title}</strong><span>{selected.artist}</span></div><button onClick={() => setSelected(null)} aria-label="Close player">×</button><button className="player-play">▶</button></div>}
    </main>
  );
}

export default App;
