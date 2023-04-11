import css from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/images/svg/logo.svg';
import { ReactComponent as Menu } from '../../assets/images/svg/burger-menu.svg';

export const Header = () => {
  return (
    <section className={css.section}>
    <div className={[css.main__block, css.container].join(' ')}>
        <div className={css.left__block}>
          <div className={css.header__block}>
            <Logo className={css.logo}/>
           </div>

            <div className={css.header__right_block}>
              <ul className={css.header__list}>
                <li className={css.header__items}>Our team</li>
                <li className={css.header__items}>Tokens</li>
                <li className={css.header__items}>Connect wallet</li>
                <li className={css.header__items}>Lightpaper</li>
              </ul>
            </div>
        </div>


          <div className={css.header__button}>
            <button className={css.button}>Sign In</button>
            <button className={css.button__sing_up}>Sign Up</button>
            <button type='button'  className={css.header__menu}><Menu/></button>
          </div>
    </div>
    </section>
  );
};
