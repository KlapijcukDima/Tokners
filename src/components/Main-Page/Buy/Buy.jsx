import scss from './Buy.module.scss';
import { Card } from './Card';

export const Buy = props => {
  return (
    <section className={scss.buy}>
      <div className={[scss.container, scss.buy__container].join(' ')}>
        <h2 className={scss.buy__heading}>How to buy</h2>
        <div className={scss.buy__cards}>
          {props.buy.map((card, index) => (
            <Card key={index} data={props.buy[index]} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};
