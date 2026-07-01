import "./BlueBar.css";

const Item1 = () => (
    <div className="item">
        <img src="img/buy-comics-digital-comics.png" alt="" />
        <span>DIGITAL COMICS</span>
    </div>
);

const Item2 = () => (
    <div className="item">
        <img src="img/buy-comics-merchandise.png" alt="" />
        <span>DC MERCHANDISE</span>
    </div>
);

const Item3 = () => (
    <div className="item">
        <img src="img/buy-comics-subscriptions.png" alt="" />
        <span>SUBSCRIPTIONS</span>
    </div>
);

const Item4 = () => (
    <div className="item">
        <img src="img/buy-comics-shop-locator.png" alt="" />
        <span>COMIC SHOP LOCATOR</span>
    </div>
);

const Item5 = () => (
    <div className="item">
        <img src="img/buy-dc-power-visa.svg" className="power-visa" alt="" />
        <span>DC POWER VISA</span>
    </div>
);

export const BlueBar = () => {
    return (
        <section className="blue-bar">
            <div className="container blue-content">
                <Item1 />
                <Item2 />
                <Item3 />
                <Item4 />
                <Item5 />
            </div>
        </section>
    );
};