import './Main.css'
import comics from "../data/comics.js";
import { CardItems } from "./CardItems.jsx"

const Jumbotron = () => <div className="jumbotron"></div>


export const Main = () => (
    <main>
        <Jumbotron />
        <div className='container'>
            <h1>Current series</h1>
            <div className="cards-grid">
                {comics.map(comic => (
                    <CardItems key={comic.id} thumb={comic.thumb} title={comic.title} />
                ))}
            </div>
            <button className="load-more">LOAD MORE</button>
        </div>
    </main>
);

