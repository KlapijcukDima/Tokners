// import scss from './Comming.module.scss';
// import { ReactComponent as Logo } from '../../../assets/images/svg/only_logo.svg';

// export const Coming = ({ coming }) => {
//   return (
//     <div className={[scss.comming, scss.container].join(' ')}>

//       <div className={scss.comming__child}>
//         {coming.map(
//           ({
//             title,
//             paragraph1,
//             paragraph2,
//             paragraph3,
//             paragraph4,
//             paragraph5,
//             paragraph6,
//             paragraph7,
//             paragraph8,
//             img,
//           }) => {
//             return (
//               <div key={title} className={scss.comming__block}>
//                 <h2 className={scss.heading}>
//                 <Logo width="38" height="32" className={scss.logo} />{title}
//                 </h2>
//                 <p className={`${scss.comming__text_w} ${scss.green}`}>
//                   {paragraph1}
//                 </p>
//                 <p className={scss.comming__text}>{paragraph2}</p>
//                 <p className={scss.comming__text}>{paragraph3}</p>
//                 <p className={`${scss.comming__text} ${scss.green}`}>{paragraph4}</p>
//                 <p className={scss.comming__text}>
//                   {paragraph5}
//                 </p>
//                 <p className={`${scss.comming__text} ${scss.green}`}><span className={scss.labka}>“</span>  "{paragraph6}"</p>
//                 <p className={scss.comming__text}>{paragraph7}</p>
//                 <p className={scss.comming__text}>{paragraph8}</p>
//               </div>
//             );
//           }
//         )}
//       </div>
//       <div className={scss.comming__img_block}>
//         <img
//           src="https://lh3.googleusercontent.com/bi-FFv65o__QzOJ81VzYY-65XGyJIxMq13SdAt48-raWLTYE2JYFLkdL-dYaSPKdVXp4jZ47AvzjBt2p67ngFPY8j0gmnmeDXUazjTGD"
//           alt=""
//           width="891"
//           height="928"
//         />
//       </div>
//     </div>
//   );
// };

// import scss from './Comming.module.scss';
// import { ReactComponent as Logo } from '../../../assets/images/svg/only_logo.svg';
// import { useState } from 'react';

// export const Coming = ({ coming }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpanded = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className={[scss.comming, scss.container].join(' ')}>
//       <div className={scss.comming__child}>
//         {coming.map(
//           ({
//             title,
//             paragraph1,
//             paragraph2,
//             paragraph3,
//             paragraph4,
//             paragraph5,
//             paragraph6,
//             paragraph7,
//             paragraph8,
//             img,
//           }) => {
//             return (
//               <div key={title} className={scss.comming__block}>
//                 <h2 className={scss.heading}>
//                   <Logo width="38" height="32" className={scss.logo} />
//                   {title}
//                 </h2>
//                 <p className={`${scss.comming__text_w} ${scss.green}`}>
//                   {paragraph1}
//                 </p>
//                 <p className={scss.comming__text}>{paragraph2}</p>
//                 {!isExpanded && (
//                   <button onClick={toggleExpanded} className={scss.comming__button}>
//                     Read More
//                   </button>
//                 )}
//                 {isExpanded && (
//                   <>
//                     <p className={scss.comming__text}>{paragraph3}</p>

//                     <p className={`${scss.comming__text} ${scss.green}`}>
//                       {paragraph4}
//                     </p>
//                     <p className={scss.comming__text}>{paragraph5}</p>
//                     <p className={`${scss.comming__text} ${scss.green}`}>
//                       <span className={scss.labka}>“</span>"{paragraph6}"
//                     </p>
//                     <p className={scss.comming__text}>{paragraph7}</p>
//                     <p className={scss.comming__text}>{paragraph8}</p>
//                     <button onClick={toggleExpanded} className={scss.comming__button}>
//                       Hide
//                     </button>
//                   </>
//                 )}
//               </div>
//             );
//           }
//         )}
//       </div>
//       <div className={scss.comming__img_block}>
//         <img
//           src="https://lh3.googleusercontent.com/bi-FFv65o__QzOJ81VzYY-65XGyJIxMq13SdAt48-raWLTYE2JYFLkdL-dYaSPKdVXp4jZ47AvzjBt2p67ngFPY8j0gmnmeDXUazjTGD"
//           alt=""
//           width="891"
//           height="928"
//         />
//       </div>
//     </div>
//   );
// };

import scss from './Comming.module.scss';
import { ReactComponent as Logo } from '../../../assets/images/svg/only_logo.svg';
import { ReactComponent as LogoM } from '../../../assets/images/svg/logo__mibile.svg';
import { useState } from 'react';

export const Coming = ({ coming }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={[scss.comming, scss.container].join(' ')}>
      <div className={scss.comming__child}>
        {coming.map(
          ({
            title,
            paragraph1,
            paragraph2,
            paragraph3,
            paragraph4,
            paragraph5,
            paragraph6,
            paragraph7,
            paragraph8,
            img,
          }) => {
            return (
              <div key={title} className={scss.comming__block}>

                <h2 className={scss.heading}>
                  <Logo width="38" height="32" className={scss.logo} />
                  {title}
                </h2>
                <LogoM className={scss.logo__m}/> 
                <h2 className={scss.heading__mobile}>Weentar is coming</h2>
                <p className={`${scss.comming__text_w} ${scss.green}`}>
                 {paragraph1}
                </p>
                <p className={`${scss.comming__text} ${scss.green} ${scss.comming__shadow}` }>{paragraph2}<div className={scss.shadow__text}></div></p>
                
                {!isExpanded && (
                  <button onClick={toggleExpanded} className={scss.comming__button}>
                    Read More
                  </button>
                )}
                {isExpanded && (
                  <>
                    <p className={scss.comming__text}>{paragraph3}</p>
                    <p className={`${scss.comming__text} ${scss.green}`}>
                      {paragraph4}
                    </p>
                    <p className={scss.comming__text}>{paragraph5}</p>
                    <p className={`${scss.comming__text} ${scss.green}`}>
                      <span className={scss.labka}>“</span>"{paragraph6}"
                    </p>
                    <p className={scss.comming__text}>{paragraph7}</p>
                    <p className={scss.comming__text}>{paragraph8}</p>
                    <button onClick={toggleExpanded} className={scss.comming__button}>
                      Hide
                    </button>
                  </>
                )}
              </div>
            );
          }
        )}
      </div>
      <div className={scss.comming__img_block}>
        <img
          src="https://lh3.googleusercontent.com/bi-FFv65o__QzOJ81VzYY-65XGyJIxMq13SdAt48-raWLTYE2JYFLkdL-dYaSPKdVXp4jZ47AvzjBt2p67ngFPY8j0gmnmeDXUazjTGD"
          alt=""
          width="891"
          height="928"
        />
      </div>
    </div>
  );
} 

