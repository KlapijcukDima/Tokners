import scss from '../Details/Details.module.scss';
// import { ReactComponent as Background } from '../../../assets/images/png/datails_bgr.png';
import { ReactComponent as ServiceQGreen } from '../../../assets/images/svg/service_q_green.svg';
import { ReactComponent as ServiceQBlue } from '../../../assets/images/svg/service_q_blue.svg';
import { ReactComponent as ServiceQYellow } from '../../../assets/images/svg/service_q_yellow.svg';
import { ReactComponent as NumberOne } from '../../../assets/images/svg/01.svg';
import { ReactComponent as NumberTwo } from '../../../assets/images/svg/02.svg';
import { ReactComponent as NumberThree } from '../../../assets/images/svg/03.svg';

export const Details = ({ details }) => {
  return (
    <section className={scss.container}>
      {/* <Background /> */}
      <div className={scss.details__header__container}>
        <h2 className={scss.details__header}>Presale Details</h2>
      </div>

      <div className={scss.details__contens}>
        {details.map(
          (
            {
              number: itemNumber,
              title: itemTitle,
              data: itemData,
              course: itemCourse,
              softCap: itemSoftCap,
              hardCap: itemHardCap,
            },
            index
          ) => (
            <div className={scss.details__container}>
              <div className={scss.details__container__first} key={index}>
                <p className={[scss.details__text, scss.title__text].join(' ')}>
                  {itemNumber}
                </p>
                {index % 6 === 0 ? (
                  <>
                    <ServiceQGreen className={scss.details__image}/>
                    <NumberOne className={scss.details__number} />
                  </>
                ) : index % 6 === 1 ? (
                  <>
                    <ServiceQBlue className={scss.details__image}/>
                    <NumberTwo className={scss.details__number} />
                  </>
                ) : (
                  <>
                    <ServiceQYellow className={scss.details__image}/>
                    <NumberThree className={scss.details__number} />
                  </>
                )}

                <h4
                  className={[scss.details__caption, scss.title__text].join(
                    ' '
                  )}
                >
                  {itemTitle}
                </h4>
                <p className={[scss.details__text, scss.title__text].join(' ')}>
                  {itemData}
                </p>
              </div>

              <div className={scss.details__container__second}>
                <p
                  className={[scss.details__cource, scss.title__text].join(' ')}
                >
                  {itemCourse}
                </p>
                <p className={[scss.details__text, scss.title__text].join(' ')}>
                  <span className={scss.details__cap}>Soft cap:</span>
                  {itemSoftCap}
                </p>
                <p className={[scss.details__text, scss.title__text].join(' ')}>
                  <span className={scss.details__cap}>Hard cap:</span>
                  {itemHardCap}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
