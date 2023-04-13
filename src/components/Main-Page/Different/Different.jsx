import scss from './Different.module.scss';

export const Different = props => {
  return (
    <section className={scss.different}>
      <div className={scss.different__colorful}></div>

      <div className={scss.different__white}>
        <div className={scss.text}>
          <h1 className={scss.text__heading}>{props.different[0].title}</h1>
          <p className={scss.text__paragraph_dark}>
            {props.different[0].launchPermission}
          </p>
          <div className={scss.text__paragraph_container}>
            <p className={scss.text__paragraph}>
              {props.different[0].socialInfluencers}
            </p>
            <p className={scss.text__paragraph}>
              {props.different[0].fanDrivenEconomy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
