import './Footer.css'


const Logo = () => <img className='logo' src="img/dc-logo-bg.png" alt='Logo' />;



const FooterSectionLink = props => (

    <li><a href={props.link.href}>{props.link.content}</a></li>
);


const FooterSection = props => (

    <section className={props.link.className}>
        <h2>{props.link.title}</h2>
        <ul>
            {props.link.links.map(item => <FooterSectionLink key={item.id} link={item} />)}
        </ul>
    </section>

);



const NavSocialLink = props => (

    <li>
        <a
            href={props.link.href}

        >
            <img
                src={props.link.src}
                alt={props.link.alt}
            >
            </img>
        </a>
    </li>

);

const SignUpButton = () => (
    <button>SIGN-UP NOW!</button>
);



export const Footer = (props) => (
    <footer>
        <div className="footer-top">
            <div className="container">
                <div className="footer-links">

                    {props.linksTop.map(linkTop => <FooterSection key={linkTop.id} link={linkTop} />)}
                </div>
                <Logo />
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <SignUpButton />
                <nav>
                    <ul>
                        <h3><span>FOLLOW US</span></h3>
                        {props.linksBottom.map(linkBottom => <NavSocialLink key={linkBottom.id} link={linkBottom} />)}
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
);



