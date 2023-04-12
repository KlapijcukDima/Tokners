import scss from './Comming.module.scss';
import { ReactComponent as Logo } from '../../../assets/images/svg/only_logo.svg';
// import { ReactComponent as Phone } from '../../../assets/images/png/service_phone.png';

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
                  <Logo width="30" /> {title}
                </h2>
                <p className={scss.comming__text}>{paragraph1}</p>
                <p className={scss.comming__text}>{paragraph2}</p>
                <p className={scss.comming__text}>{paragraph3}</p>
                <p className={scss.comming__text}>{paragraph4}</p>
                <p className={scss.comming__text}>{paragraph5}</p>
                <p className={scss.comming__text}>{paragraph6}</p>
                <p className={scss.comming__text}>{paragraph7}</p>
                <p className={scss.comming__text}>{paragraph8}</p>
              </div>
            );
          }
        )}
      </div>
      <div>
        <img src='https://lh3.googleusercontent.com/bi-FFv65o__QzOJ81VzYY-65XGyJIxMq13SdAt48-raWLTYE2JYFLkdL-dYaSPKdVXp4jZ47AvzjBt2p67ngFPY8j0gmnmeDXUazjTGD' alt="" width="600" height="300" />
      </div>
    </div>
  );
};
