import './Footer.css'
const Logo = () => <img className='logo' src="img/dc-logo-bg.png" alt='Logo' />;
const DcComics = () => (

    <section className='dccomics'>
        <h2>DC Comics</h2>
        <ul>
            <li><a href="#">Characters</a></li>
            <li><a href="#">Comics</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Tv</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Collectibles</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">Fans</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Shop</a></li>
        </ul>

    </section>
);

const Dc = () => (

    <section className='dc'>
        <h2>DC</h2>
        <ul>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Privacy policy(New)</a></li>
            <li><a href="#">Ad Choises</a></li>
            <li><a href="#">Advertising</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Subscriptions</a></li>
            <li><a href="#">Talent Workshops</a></li>
            <li><a href="#">CPSC Certificates</a></li>
            <li><a href="#">Ratings</a></li>
            <li><a href="#">Shop Help</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>

    </section>
);

const Sites = () => (

    <section className='sites'>
        <h2>Sites</h2>
        <ul>
            <li><a href="#">DC</a></li>
            <li><a href="#">MAD Magazine</a></li>
            <li><a href="#">DC Kids</a></li>
            <li><a href="#">DC Universe</a></li>
            <li><a href="#">DC Power Visa</a></li>
        </ul>

    </section>
);


const Shop = () => (
    <section className='shop'>
        <h2>Shop</h2>
        <ul>
            <li><a href="#">Shop DC</a></li>
            <li><a href="#">Shop DC Collectibles</a></li>
        </ul>

    </section>
);

const SignUpButton = () => (
    <button>SIGN-UP NOW!</button>
);


const Social = () => (
    <div className="social">

        <span>FOLLOW US</span>

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
                    <DcComics />
                    <Dc />
                    <Sites />
                    <Shop />
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