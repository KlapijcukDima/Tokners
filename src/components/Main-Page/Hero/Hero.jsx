import scss from './Hero.module.scss';
import heroImgage from './../../../assets/images/png/hero-photo.png';

export const Hero = hero => {
  return (
    <section className={scss.hero}>
      <div className={scss.hero__container}>
        <div className={[scss.hero__text, scss.hero__text_container].join(' ')}>
          <p className={scss.hero__blue}>At Tokners we are</p>
          <h1 className={scss.hero__heading}>
            Reimagining social media through the power of the blockchain.
          </h1>
          <p className={scss.hero__paragraph}>
            We are creating social media 3.0 with influencers, celebrities and
            creators being able to launch their own digital currency by simply
            creating a profile with media content posted as Non fungible Tokens
            that can be owned and traded on the Tknrs network
          </p>
          <button className={scss.hero__button} type="button">
            Learn More
          </button>
        </div>
        <div className={scss.hero__image_container}>
          <img className={scss.hero__image} src={heroImgage} alt="Hero Prohe" />
        </div>
      </div>
    </section>
  );
};
