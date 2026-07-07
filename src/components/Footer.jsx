import './Footer.css'
import { footerTopLinks } from "../data/footerTopLinks.js";
const Logo = () => <img className='logo' src="img/dc-logo-bg.png" alt='Logo' />;



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
                <Social />
            </div>
        </div>
    </footer>
);