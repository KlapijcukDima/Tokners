import scss from './Services.module.scss';

import { ReactComponent as ServiceQ } from '../../../assets/images/svg/service_q.svg';
import { ReactComponent as ServiceDot } from '../../../assets/images/svg/service_dot.svg';

export const Services = ({ services }) => {
  return (
    <section className={scss.services}>
      <div className={scss.container}>
        {services.map(
          ({ number: itemNumber, year: itemYear, list: itemList }, index) => (
            <div className={scss.services__container} key={index}>
              <div className={scss.services__images}>
                <ServiceQ />
                <ServiceDot />
                <p className={scss.services__text}>{itemYear}</p>
              </div>

              <div className={scss.services__contents}>
                <ol className={scss.services__list}>
                  <li className={scss.services__item}>{itemList.one}</li>
                  <li className={scss.services__item}>{itemList.two}</li>
                  {itemList.three && (
                    <li className={scss.services__item}>{itemList.three}</li>
                  )}
                  {itemList.four && (
                    <li className={scss.services__item}>{itemList.four}</li>
                  )}
                  {itemList.five && (
                    <li className={scss.services__item}>{itemList.five}</li>
                  )}
                </ol>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
