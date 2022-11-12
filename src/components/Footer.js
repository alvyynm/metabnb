import React from "react";

import logo2 from "../assets/logos/logo-2.png";

// Social icons
import facebook from "../assets/social-icons/facebook.png";
import twitter from "../assets/social-icons/twitter.png";
import instagram from "../assets/social-icons/instagram.png";

function Footer() {
  return (
    <footer className="bg-backgrounddark text-white">
      <div className="grid md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 pt-[58px] lg:mx-[100px]">
        <div>
          <img
            src={logo2}
            alt="black and white metabnb logo"
            className="mb-4 md:mb-12 lg:mb-24"
          />
          <div>
            <ul className="flex gap-8">
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
          <h3 className="text-lg leading-[1.375rem] font-bold mb-[23px]">
            Community
          </h3>
          <ul>
            <li className="mb-4">
              <a href="#">NFT</a>
            </li>
            <li className="mb-4">
              <a href="#">Tokens</a>
            </li>
            <li className="mb-4">
              <a href="#">Landlords</a>
            </li>
            <li>
              <a href="#">Discord</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg leading-[1.375rem] font-bold mb-[23px]">
            Places
          </h3>
          <ul>
            <li className="mb-4">
              <a href="#">Castle</a>
            </li>
            <li className="mb-4">
              <a href="#">Farms</a>
            </li>
            <li className="mb-4">
              <a href="#">Beach</a>
            </li>
            <li>
              <a href="#">Learn more</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg leading-[1.375rem] font-bold mb-[23px]">
            About us
          </h3>
          <ul>
            <li className="mb-4">
              <a href="#">Roadmap</a>
            </li>
            <li className="mb-4">
              <a href="#">Creators</a>
            </li>
            <li className="mb-4">
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-[35px] pb-[37px] lg:mx-[100px]">
        <p>&copy; 2022 Metabnb</p>
      </div>
    </footer>
  );
}

export default Footer;
