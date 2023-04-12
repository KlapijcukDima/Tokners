import scss from './Comming.module.scss';


export const Coming = ({ coming }) => {
    return (
      <div>
        <div>
          {coming.map(({ title, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, paragraph7, paragraph8}) => {
            return (
              <div key={title}>
                <h2 className={scss.heading}>{title}</h2>
                <p>{paragraph1}</p>
                <p>{paragraph2}</p>
                <p>{paragraph3}</p>
                <p>{paragraph4}</p>
                <p>{paragraph5}</p>
                <p>{paragraph6}</p>
                <p>{paragraph7}</p>
                <p>{paragraph8}</p>
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
    );
  };
  