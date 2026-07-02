import "./BlueBar.css";



const NavBlue = () => (
    <nav>
        <ul>
            <li>
                <img src="img/buy-comics-digital-comics.png" alt="" />
                <a href="#"><span>DIGITAL COMICS</span></a>
            </li>
            <li>
                <img src="img/buy-comics-merchandise.png" alt="" />
                <a href="#"><span>DC MERCHANDISE</span></a>
            </li>
            <li>
                <img src="img/buy-comics-subscriptions.png" alt="" />
                <a href="#"><span>SUBSCRIPTIONS</span></a>
            </li>
            <li>
                <img src="img/buy-comics-shop-locator.png" alt="" />
                <a href="#"><span>COMIC SHOP LOCATOR</span></a>
            </li>
            <li>
                <img src="img/buy-dc-power-visa.svg" className="power-visa" alt="" />
                <a href="#"> <span>DC POWER VISA</span></a>
            </li>
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