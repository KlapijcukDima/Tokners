import scss from '../Info/Info.module.scss';

import { ReactComponent as ForCreators } from '../../../assets/images/svg/ForCreators.svg';
import { ReactComponent as VectorCreators } from '../../../assets/images/svg/vector_creators.svg';

import { ReactComponent as ForHolders } from '../../../assets/images/svg/ForHolders.svg';
import { ReactComponent as VectorHolders } from '../../../assets/images/svg/vector_holders.svg';
import { ReactComponent as ButtonArrow } from '../../../assets/images/svg/arrow-right.svg';

export const Info = ({ info }) => {
  return (
    <section className={scss.info}>
      <div className={[scss.info__container, scss.container].join(' ')}>
        {info.map(({ for: itemFor, info: itemInfo }, index) => (
          <div className={scss.info__contents} key={itemFor}>
            {index % 2 === 0 ? (
              <>
                <ForCreators className={scss.info__svg} />
                <VectorCreators className={scss.info__vector} />
              </>
            ) : index % 2 === 1 ? (
              <>
                <ForHolders className={scss.info__svg} />
                <VectorHolders className={scss.info__vector} />
              </>
            ) : null}

            <h1 className={scss.info__header}>
              For <span className={scss.info__header__color}>{itemFor}</span>
            </h1>
            <p className={scss.info__paragraph}>{itemInfo}</p>

            <button className={scss.info__button}>
              <span className={scss.info__button__underline}>Learn More</span>
              <ButtonArrow className={scss.info__button__arrow} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
