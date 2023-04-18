// import scss from './Year.module.scss';
// import { ReactComponent as YearG } from '../../../assets/images/svg/year__green.svg';
// import { ReactComponent as YearB } from '../../../assets/images/svg/year__blue.svg';
// import { ReactComponent as YearR } from '../../../assets/images/svg/year__red.svg';
// import { ReactComponent as YearY } from '../../../assets/images/svg/year__yellow.svg';


// export const Year = ({ year }) => {
//     return(
//         <section>
//             <div className={[scss.main__block, scss.container].join(' ')}>
//                 {year.map(({year, day, tokensday, tokens}) => {
//                     return(
//                         <div className={scss.year}>
//                             <div className={scss.year__con}>
//                             <YearG className={scss.svg}/>
//                             <h3 className={scss.year__title}>{year}</h3>
//                             </div>
//                             <p className={scss.year__day}>{day}</p>
//                             <p className={scss.year__tokensday}>{tokensday}</p>
//                             <p className={scss.year__tokens}>{tokens}</p>
//                         </div>
//                     )
//                 }
                
//                 )}
//             </div>
//         </section>
//     )
// }


import scss from './Year.module.scss';
import { ReactComponent as YearG } from '../../../assets/images/svg/year__green.svg';
import { ReactComponent as YearB } from '../../../assets/images/svg/year__blue.svg';
import { ReactComponent as YearR } from '../../../assets/images/svg/year__red.svg';
import { ReactComponent as YearY } from '../../../assets/images/svg/year__yellow.svg';


export const Year = ({ year }) => {
    const images = [YearG, YearY, YearB, YearR];
    const colors = ['green', 'yellow', 'blue', 'red'];

    return(
        <section>
            <div className={[scss.main__block, scss.container].join(' ')}>
                {year.map(({year, day, tokensday, tokens}, index) => {

                    const ImageComponent = images[index % images.length];
                    const yearColor = colors[index % colors.length];

                    return(
                        <div className={scss.year}>
                            <div className={[scss.year__con, scss[`year__con--${yearColor}`]].join(' ')}>
                                <ImageComponent className={scss.svg}/>
                                <h3 className={[scss.year__title, scss[`year__title--${yearColor}`]].join(' ')}>{year}</h3>
                            </div>
                            <p className={scss.year__day}>{day}</p>
                            <p className={scss.year__tokensday}>{tokensday}</p>
                            <p className={scss.year__tokens}>{tokens}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}


