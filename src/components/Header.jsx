import './Header.css';

const links = [
    {
        id: 1,
        href: '#',
        content: 'Characters',
        active: false
    },
    {
        id: 2,
        href: '#',
        content: 'Comics',
        active: true
    },
    {
        id: 3,
        href: '#',
        content: 'Movies',
        active: false
    },
    {
        id: 4,
        href: '#',
        content: 'Tv',
        active: false
    },
    {
        id: 5,
        href: '#',
        content: 'Games',
        active: false
    },
    {
        id: 6,
        href: '#',
        content: 'Collectibles',
        active: false
    },
    {
        id: 7,
        href: '#',
        content: 'Videos',
        active: false
    },
    {
        id: 8,
        href: '#',
        content: 'Fans',
        active: false
    },
    {
        id: 9,
        href: '#',
        content: 'News',
        active: false
    },
    {
        id: 10,
        href: '#',
        content: 'Shop',
        active: false
    },
]






const Logo = () => <img className='logo' src="img/dc-logo.png" alt='Logo' />

const Nav = () => (
    <nav>
        <ul>
            {links.map(link => (
                <li key={link.id}>
                    <a
                        href={link.href}
                        className={link.active ? 'active' : undefined}
                    >
                        {link.content}
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