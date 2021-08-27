import React from "react";
import HomeCSS from "../cssModules/home.module.css";
import pcgif from "../images/pc.gif";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";

export default function Home() {
  return (
    <section className={HomeCSS.homeContainer}>
      <img src={pcgif} className={HomeCSS.backgroundGif} alt="pc_logo" />
      <div className={HomeCSS.homeDiv}>
        <h1 className={HomeCSS.title}>Production Club</h1>
        <p className={HomeCSS.paragraph}>
          {" "}
          Production Club is a multidisciplinary creative studio specialized in
          designing and producing immersive experiences for the music, tech, and
          gaming industries.
        </p>
      </div>
      <section className={HomeCSS.linksSection}>
        <div className={HomeCSS.linksDiv}>
          <a
            href="https://www.linkedin.com/company/productionclub/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitter" />
          </a>
          <a
            href="https://www.instagram.com/productionclub/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            href="https://www.facebook.com/ProductionClub/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="https://twitter.com/productionclub/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </section>
    </section>
  );
}
