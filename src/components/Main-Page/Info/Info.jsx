import scss from '../Info/Info.module.scss';

import { ReactComponent as ForCreators } from '../../../assets/images/svg/ForCreators.svg';
import { ReactComponent as ForHolders } from '../../../assets/images/svg/ForHolders.svg';

export const Info = ({ info }) => {
  return (
    <section className={scss.info}>
      <div className={[scss.info__container, scss.container].join(" ")}>
        {info.map(({ for: itemFor, info: itemInfo }, index) => (
          <div className={scss.info__contents} key={itemFor}>
            {index % 2 === 0 ? (
              <ForCreators className={scss.info__svg} />
            ) : index % 2 === 1 ? (
              <ForHolders className={scss.info__svg} />
            ) : null}

            <h1 className={scss.info__header}>{itemFor}</h1>
            <p className={scss.info__paragraph}>{itemInfo}</p>

            <button className={scss.info__button}>Learn More</button>

          </div>
        ))}
      </div>
    </section>
  );
};
