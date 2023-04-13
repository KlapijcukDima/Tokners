import scss from './Services.module.scss';

import { ReactComponent as ServiceQGreen } from '../../../assets/images/svg/service_q_green.svg';
import { ReactComponent as ServiceQBlue } from '../../../assets/images/svg/service_q_blue.svg';
import { ReactComponent as ServiceQYellow } from '../../../assets/images/svg/service_q_yellow.svg';
import { ReactComponent as ServiceQRed } from '../../../assets/images/svg/service_q_red.svg';

import { ReactComponent as ServiceDot } from '../../../assets/images/svg/service_dot.svg';

export const Services = ({ services }) => {
  return (
    <section className={scss.services}>
      <div className={[scss.container, scss.services__container].join(' ')}>
        {services.map(
          ({ number: itemNumber, year: itemYear, list: itemList }, index) => (
            <div className={scss.services__contents} key={index}>
              <div className={scss.services__images}>
                <h2 className={scss.services__title}>{itemNumber}</h2>
                {index % 6 === 0 ? (
                  <ServiceQGreen />
                ) : index % 6 === 1 ? (
                  <ServiceQBlue />
                ) : index % 6 === 2 ? (
                  <ServiceQYellow />
                ) : (
                  <ServiceQRed />
                )}

                <div className={scss.services__images__container}>
                  {index % 6 === 0 ? (
                    <ServiceDot
                      className={[
                        scss.services__images__dot,
                        scss.services__images__dot__green,
                      ].join(' ')}
                    />
                  ) : index % 6 === 1 ? (
                    <ServiceDot
                      className={[
                        scss.services__images__dot,
                        scss.services__images__dot__blue,
                      ].join(' ')}
                    />
                  ) : index % 6 === 2 ? (
                    <ServiceDot
                      className={[
                        scss.services__images__dot,
                        scss.services__images__dot__yellow,
                      ].join(' ')}
                    />
                  ) : (
                    <ServiceDot
                      className={[
                        scss.services__images__dot,
                        scss.services__images__dot__red,
                      ].join(' ')}
                    />
                  )}

                  <p className={scss.services__text}>{itemYear}</p>
                </div>
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
