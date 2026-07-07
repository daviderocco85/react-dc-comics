import "./BlueBar.css";
import { blueBarlinks } from "../data/blueBarLinks.js";



const NavBlue = () => (
    <nav>
        <ul>
            {blueBarlinks.map(blueBarlink => (
                <li key={blueBarlink.id}>
                    <img
                        src={blueBarlink.src}>
                    </img>
                    <a
                        href={blueBarlink.href}
                    >{blueBarlink.content}
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