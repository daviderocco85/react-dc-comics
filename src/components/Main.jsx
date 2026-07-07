import './Main.css'
import comics from "../data/comics.js";
const Jumbotron = () => <div className="jumbotron"></div>


export const Main = () => (
    <main>
        <Jumbotron />
        <div className='container'>
            <h1>Current series</h1>
            <div className="cards-grid">
                {comics.map(comic => (
                    <div key={comic.id} className='card-items'>
                        <img src={comic.thumb} alt={comic.title} />
                        <h2>{comic.title}</h2>
                    </div>
                ))}
            </div>
            <button className="load-more">LOAD MORE</button>
        </div>
    </main>
);