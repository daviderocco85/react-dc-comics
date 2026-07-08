import './CardItems.css';


export const CardItems = (props) => (
    <div className="card-items">
        <img src={props.thumb} alt={props.title} />
        <h2>{props.title}</h2>
    </div>
); 