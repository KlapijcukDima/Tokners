import scss from './Header.module.scss';
import { Modal } from './modal-header';
import { ReactComponent as Logo } from '../../assets/images/svg/logo.svg';

export const Header = () => {
  return (
    <section>
      <div className={[scss.main__block, scss.container].join(' ')}>
        <div className={scss.left__block}>
          <div className={scss.header__block}>
            <Logo className={scss.logo} />
          </div>

          <div className={scss.header__right_block}>
            <ul className={scss.header__list}>
              <li className={scss.header__items}>
                <a href="/" className={scss.header__link}>
                  Our team
                </a>
              </li>
              <li className={scss.header__items}>
                <a href="/" className={scss.header__link}>
                  Tokens
                </a>
              </li>
              <li className={scss.header__items}>
                <a href="/" className={scss.header__link}>
                  Connect wallet
                </a>
              </li>
              <li className={scss.header__items}>
                <a href="/" className={scss.header__link}>
                  Lightpaper
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={scss.header__button}>
          <button type="button" className={scss.button__sign_in}>
            Sign In
          </button>
          <button type="button" className={scss.button}>
            Sign Up
          </button>
          <Modal className={scss.header__menu} />
        </div>
      </div>
    </section>
  );
};
