import "./BlueBar.css";
import { blueBarLinks } from "../data/blueBarLinks.js";



const NavBlue = () => (
    <nav>
        <ul>
            {blueBarLinks.map(blueBarLink => (
                <li key={blueBarLink.id}>
                    <img
                        src={blueBarLink.src}>
                    </img>
                    <a
                        href={blueBarLink.href}
                    >{blueBarLink.content}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
);

export const BlueBar = () => (

    <section className="blue-bar">
        <div className="container blue-content">
            <NavBlue />
        </div>
    </section>

);