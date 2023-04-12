import scss from './Comming.module.scss';
import { ReactComponent as Logo } from '../../../assets/images/svg/only_logo.svg';



export const Coming = ({ coming }) => {
  return (
    <div className={[scss.comming, scss.container].join(' ')}>

      <div className={scss.comming__child}>
        {coming.map(
          ({
            title,
            paragraph1,
            paragraph2,
            paragraph3,
            paragraph4,
            paragraph5,
            paragraph6,
            paragraph7,
            paragraph8,
            img,
          }) => {
            return (
              <div key={title} className={scss.comming__block}>
                <h2 className={scss.heading}> 
                <Logo width="38" height="32" className={scss.logo} />{title}
                </h2>
                <p className={`${scss.comming__text_w} ${scss.green}`}>
                  {paragraph1}
                </p>
                <p className={scss.comming__text}>{paragraph2}</p>
                <p className={scss.comming__text}>{paragraph3}</p>
                <p className={`${scss.comming__text} ${scss.green}`}>{paragraph4}</p>
                <p className={scss.comming__text}>
                  {paragraph5}
                </p>
                <p className={`${scss.comming__text} ${scss.green}`}><span className={scss.labka}>“</span>  "{paragraph6}"</p>
                <p className={scss.comming__text}>{paragraph7}</p>
                <p className={scss.comming__text}>{paragraph8}</p>
              </div>
            );
          }
        )}
      </div>
      <div className={scss.comming__img_block}>
        <img
          src="https://lh3.googleusercontent.com/bi-FFv65o__QzOJ81VzYY-65XGyJIxMq13SdAt48-raWLTYE2JYFLkdL-dYaSPKdVXp4jZ47AvzjBt2p67ngFPY8j0gmnmeDXUazjTGD"
          alt=""
          width="891"
          height="928"
        />
      </div>
    </div>
  );
};


