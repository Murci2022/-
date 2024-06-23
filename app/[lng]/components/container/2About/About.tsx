/* eslint-disable react/no-unescaped-entities */
import { images } from "@/app/[lng]/constants/images";
import "./About.css";
import Image from "next/image";
/* The Background Image is in the App.css/.app__bg/background:url..... */

const About = () => (
  <section
    className="about__rel app__bg flex__center section__padding"
    id="about">
    <div className="about-overlay flex__center">
      <Image src={images.logogray} alt="logogray" />
    </div>
    <div className="about-content flex__center">
      <article className="about-content_about">
        <h1 className="h1__cormorant">Singer</h1>
        <Image
          src={images.mic}
          alt="image of a golden mic"
          className="mic__img"
        />
        <p className="p__opensans">
          We aim to provide you with a brief overview of Mate's personal
          background, offering insights into where he came from and sharing
          photos that reflect his private history.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </article>
      <div className="about-content_micUp flex__center">
        <Image src={images.micUp} alt="image of a retro mic" />
      </div>
      <article className="about-content_history">
        <h1 className="h1__cormorant">Painter</h1>
        <Image
          src={images.mic}
          alt="image of a golden mic"
          className="mic__img"
        />
        <p className="p__opensans">
          We strive to offer you a brief overview of Mate's professional
          journey, spanning from his beginnings as a performer to his current
          endeavors. Gain insights into his career path.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </article>
    </div>
  </section>
);

export default About;
