import "./BlueBar.css";


const links = [
    {
        id: 1,
        href: '#',
        content: 'DIGITAL COMICS',
        src: "img/buy-comics-digital-comics.png"
    },
    {
        id: 2,
        href: '#',
        content: 'DC MERCHANDISE',
        src: "img/buy-comics-merchandise.png"
    },
    {
        id: 3,
        href: '#',
        content: 'SUBSCRIPTIONS',
        src: "img/buy-comics-subscriptions.png"
    },
    {
        id: 4,
        href: '#',
        content: 'COMIC SHOP LOCATOR',
        src: "img/buy-comics-shop-locator.png"
    },
    {
        id: 5,
        href: '#',
        content: 'DC POWER VISA',
        src: "img/buy-dc-power-visa.svg"
    },

]






const NavBlue = () => (
    <nav>
        <ul>
            {links.map(link => (
                <li key={link.id}>
                    <img
                        src={link.src}>
                    </img>
                    <a
                        href={link.href}
                    >{link.content}
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