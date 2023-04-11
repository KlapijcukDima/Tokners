import scss from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/images/svg/logo.svg';
import { ReactComponent as Menu } from '../../assets/images/svg/burger-menu.svg';

export const Header = () => {
  return (
    <section className={scss.section}>
    <div className={[scss.main__block, scss.container].join(' ')}>
        <div className={scss.left__block}>
          <div className={scss.header__block}>
            <Logo className={scss.logo}/>
           </div>

            <div className={scss.header__right_block}>
              <ul className={scss.header__list}>
                <li className={scss.header__items}>Our team</li>
                <li className={scss.header__items}>Tokens</li>
                <li className={scss.header__items}>Connect wallet</li>
                <li className={scss.header__items}>Lightpaper</li>
              </ul>
            </div>
        </div>


          <div className={scss.header__button}>
            <button className={scss.button}>Sign In</button>
            <button className={scss.button__sing_up}>Sign Up</button>
            <button type='button'  className={scss.header__menu}><Menu/></button>
          </div>
    </div>
    </section>
  );
};
