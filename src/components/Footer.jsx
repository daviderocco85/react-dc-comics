import './Footer.css'
import { footerTopLinks } from "../data/footerTopLinks.js";
import { footerBottomNavLinks } from "../data/footerBottomNavLinks.js";

const Logo = () => <img className='logo' src="img/dc-logo-bg.png" alt='Logo' />;



const SignUpButton = () => (
    <button>SIGN-UP NOW!</button>
);


const NavSocial = () => (

    <nav>
        <ul>
            <h3><span>FOLLOW US</span></h3>
            {footerBottomNavLinks.map(footerBottomLink => (
                <li key={footerBottomLink.id}>
                    <a
                        href={footerBottomLink.href}

                    >
                        <img
                            src={footerBottomLink.src}
                            alt={footerBottomLink.alt}
                        >
                        </img>
                    </a>
                </li>
            ))}
        </ul>
    </nav>

);

export const Footer = () => (
    <footer>
        <div className="footer-top">
            <div className="container">
                <div className="footer-links">

                    {footerTopLinks.map(footerTop => (
                        <section key={footerTop.id} className={footerTop.className}>
                            <h2>{footerTop.title}</h2>
                            <ul>
                                {footerTop.links.map(link => (
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
                <NavSocial />
            </div>
        </div>
    </footer>
);