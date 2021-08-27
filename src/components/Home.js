import React from "react";
import HomeCSS from "../cssModules/home.module.css";
import pcgif from "../images/pc.gif";

export default function Home() {
  return (
    <section className={HomeCSS.homeContainer}>
      <img src={pcgif} className={HomeCSS.backgroundGif} />
      <div className={HomeCSS.homeDiv}>
        <h1 className={HomeCSS.title}>Production Club</h1>
        <p className={HomeCSS.paragraph}>
          {" "}
          Production Club is a multidisciplinary creative studio specialized in
          designing and producing immersive experiences for the music, tech, and
          gaming industries.
        </p>
      </div>
    </section>
  );
}
