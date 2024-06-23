import SubHeading from "../../components/SubHeading/SubHeading";

import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";

import "./Footer.css";

const Newsletter = () => {
  return (
    <div className="newsletter-container component__bg">
      <div className="newsletter-container_info">
        <SubHeading title="Newsletter" />
        <h1 className="h1__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans text__center">
          and never miss the latest update
        </p>
      </div>
      <div className="newsletter-container_signup flex-center">
        <input
          type="email"
          placeholder="Please enter your email"
          name="email"
          id="email"
        />
        <button type="submit" className="custom__button">
          Subscribe
        </button>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="app__bg section__padding">
      <div className="footer__newsletter">
        <Newsletter />
        <div id="contact" className="footer__links-container ">
          <div className="footer__links">
            <div className="footer__contact">
              <p className="p__cormorant-gold">
                <a href="#">Contact Us</a>
              </p>
            </div>
            <div className="footer__icons-wrapper">
              <div className="footer__icons">
                <a href="https://www.facebook.com">
                  <FaFacebook />
                </a>
                <a href="https://www.tiktok.com">
                  <FaTiktok />
                </a>
                <a href="https://www.instagram.com">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="footer__paintings">
              <p className="p__cormorant-gold">
                <a href="https://www.matekamaras.com/">Mate's paintings</a>
              </p>
            </div>
          </div>
          <div className="footer__copyright">
            <p className="p__opensans">@2024 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
