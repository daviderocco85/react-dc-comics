import "./BlueBar.css";



const NavBlueLink = props => (

    <li>
        <img
            src={props.link.src}>
        </img>
        <a
            href={props.link.href}
        >{props.link.content}
        </a>
    </li>

);


export const BlueBar = props => (

    <section className="blue-bar">
        <div className="container blue-content">
            <nav>
                <ul>
                    {props.links.map(link => <NavBlueLink key={link.id} link={link} />)}
                </ul>
            </nav>
        </div>
    </section>

);



