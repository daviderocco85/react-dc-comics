import './Header.css';
import { headerNavLinks } from "../data/headerNavLinks.js";


const Logo = () => <img className='logo' src="img/dc-logo.png" alt='Logo' />

const Nav = () => (
    <nav>
        <ul>
            {headerNavLinks.map(headerNavLink => (
                <li key={headerNavLink.id}>
                    <a
                        href={headerNavLink.href}
                        className={headerNavLink.active ? 'active' : undefined}
                    >
                        {headerNavLink.content}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
);

export const Header = () => (
    <header>
        <div className="container">
            <Logo />
            <Nav />
        </div>
    </header>


);