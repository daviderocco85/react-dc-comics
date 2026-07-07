import './Footer.css'
const Logo = () => <img className='logo' src="img/dc-logo-bg.png" alt='Logo' />;

const menus = [
    {
        id: 1,
        className: 'dccomics',
        title: 'DC Comics',
        links: [
            { id: 1, href: '#', content: 'Characters' },
            { id: 2, href: '#', content: 'Comics' },
            { id: 3, href: '#', content: 'Movies' },
            { id: 4, href: '#', content: 'Tv' },
            { id: 5, href: '#', content: 'Games' },
            { id: 6, href: '#', content: 'Videos' },
            { id: 7, href: '#', content: 'News' }
        ]

    },
    {
        id: 2,
        className: 'dc',
        title: 'DC',
        links: [
            { id: 1, href: '#', content: 'Term of Use' },
            { id: 2, href: '#', content: 'Privacy policy (New)' },
            { id: 3, href: '#', content: 'Ad Choises' },
            { id: 4, href: '#', content: 'Advertising' },
            { id: 5, href: '#', content: 'Jobs' },
            { id: 6, href: '#', content: 'Subscriptions' },
            { id: 7, href: '#', content: 'Talent Workshops' },
            { id: 8, href: '#', content: 'CPSC Certificates' },
            { id: 9, href: '#', content: 'Ratings' },
            { id: 10, href: '#', content: 'Shop Help' },
            { id: 11, href: '#', content: 'Contact Us' }
        ]

    },
    {
        id: 3,
        className: 'sites',
        title: 'Sites',
        links: [
            { id: 1, href: '#', content: 'DC' },
            { id: 2, href: '#', content: 'MAD Magazine' },
            { id: 3, href: '#', content: 'DC Kids' },
            { id: 4, href: '#', content: 'DC Universe' },
            { id: 5, href: '#', content: 'DC Power Visa' }
        ]

    },
    {
        id: 4,
        className: 'shop',
        title: 'Shop',
        links: [
            { id: 1, href: '#', content: 'Shop DC' },
            { id: 2, href: '#', content: 'Shop DC Collectibles' }
        ]
    }
]









const SignUpButton = () => (
    <button>SIGN-UP NOW!</button>
);


const Social = () => (
    <div className="social">

        <h3><span>FOLLOW US</span></h3>

        <img src="img/footer-facebook.png" alt="" />
        <img src="img/footer-twitter.png" alt="" />
        <img src="img/footer-youtube.png" alt="" />
        <img src="img/footer-pinterest.png" alt="" />
        <img src="img/footer-periscope.png" alt="" />

    </div>
);

export const Footer = () => (
    <footer>
        <div className="footer-top">
            <div className="container">
                <div className="footer-links">

                    {menus.map(menu => (
                        <section key={menu.id} className={menu.className}>
                            <h2>{menu.title}</h2>
                            <ul>
                                {menu.links.map(link => (
                                    <li key={link.id}><a href={link.href}>{link.content}</a></li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>
                <Logo />
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <SignUpButton />
                <Social />
            </div>
        </div>
    </footer>
);