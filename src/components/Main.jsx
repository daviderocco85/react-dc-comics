import './Main.css'
import { CardItems } from "./CardItems.jsx"

const Jumbotron = () => <div className="jumbotron"></div>




export const Main = props => (
    <main>
        <Jumbotron />
        <div className='container'>
            <h1>Current series</h1>
            <div className="cards-grid">
                {props.comics.map(comic => <CardItems key={comic.id} thumb={comic.thumb} title={comic.title} />)}
            </div>
            <button className="load-more">LOAD MORE</button>
        </div>
    </main>
);