import scss from './Buy.module.scss';
import { ReactComponent as BuyArrowGreen } from '../../../assets/images/svg/buy_arrow_green.svg';
import { ReactComponent as BuyArrowYellow } from '../../../assets/images/svg/buy_arrow_yellow.svg';

export const Card = data => {
  return (
    <div className={scss.card}>
      <div className={scss.card__container}>
        <p className={scss.card__number}>{data.data.number}</p>
        <p className={scss.card__text}>{data.data.text}</p>
      </div>
      {data.index < 2 ? (
        <div className={scss.card__icon_container}>
          {data.index % 2 === 0 ? (
            <div className={scss.card__icon}>
              <BuyArrowGreen />
            </div>
          ) : data.index % 2 === 1 ? (
            <div className={scss.card__icon}>
              <BuyArrowYellow />
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
