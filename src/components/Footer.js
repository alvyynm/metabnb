import React from "react";

import logo2 from "../assets/logos/logo-2.png";

// Social icons
import facebook from "../assets/social-icons/facebook.png";
import twitter from "../assets/social-icons/twitter.png";
import instagram from "../assets/social-icons/instagram.png";

function Footer() {
  return (
    <footer className="bg-backgrounddark text-white">
      <div>
        <div>
          <img src={logo2} alt="black and white metabnb logo" />
          <div>
            <ul>
              <li>
                <a href="#">
                  <img src={facebook} alt="facebook logo icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instagram} alt="instagram logo icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitter} alt="twitter logo icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Community</h3>
          <ul>
            <li>
              <a href="#">NFT</a>
            </li>
            <li>
              <a href="#">Tokens</a>
            </li>
            <li>
              <a href="#">Landlords</a>
            </li>
            <li>
              <a href="#">Discord</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Places</h3>
          <ul>
            <li>
              <a href="#">Castle</a>
            </li>
            <li>
              <a href="#">Farms</a>
            </li>
            <li>
              <a href="#">Beach</a>
            </li>
            <li>
              <a href="#">Learn more</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>About us</h3>
          <ul>
            <li>
              <a href="#">Roadmap</a>
            </li>
            <li>
              <a href="#">Creators</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p>&copy; 2022 Metabnb</p>
      </div>
    </footer>
  );
}

export default Footer;
