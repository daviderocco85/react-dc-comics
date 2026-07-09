import './Header.css';



const Logo = () => <img className='logo' src="img/dc-logo.png" alt='Logo' />



const NavLink = props => (

    <li>
        <a
            href={props.link.href}
            className={props.link.active ? 'active' : undefined}
        >
            {props.link.content}
        </a>
    </li>

);




export const Header = props => (
    <header>
        <div className="container">
            <Logo />
            <nav>
                <ul>
                    {props.linksNav.map(link => <NavLink key={link.id} link={link} />)}
                </ul>
            </nav>
        </div>
    </header>

);







