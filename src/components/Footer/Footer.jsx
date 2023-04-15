import scss from '../Footer/Footer.module.scss';

import { ReactComponent as Logo } from '../../assets/images/svg/logo.svg';
import { ReactComponent as Twitter } from '../../assets/images/svg/twitter.svg';
import { ReactComponent as Telegram } from '../../assets/images/svg/telegram.svg';
import { ReactComponent as Instagram } from '../../assets/images/svg/instagram.svg';
import { ReactComponent as Medium } from '../../assets/images/svg/medium.svg';
import { ReactComponent as Github } from '../../assets/images/svg/github.svg';
import { ReactComponent as Reddit } from '../../assets/images/svg/reddit.svg';

export const Footer = footer => {
  return (
    <footer className={scss.footer}>
      <div className={[scss.footer__container, scss.container].join(' ')}>
        <div>
          <div className={scss.footer__navigation__container}>
            <ul className={scss.footer__navigation}>
              <a href="/">
                <li className={scss.footer__item}>Our team</li>
              </a>
              <li className={scss.decoration}>
                <span>/</span>
              </li>
              <a href="/">
                <li className={scss.footer__item}>Tokens</li>
              </a>

              <li className={scss.decoration}>
                <span>/</span>
              </li>
              <a href="/">
                <li className={scss.footer__item}>Connect wallet</li>
              </a>

              <li className={scss.decoration}>
                <span>/</span>
              </li>
              <a href="/">
                <li className={scss.footer__item}>Lightpaper</li>
              </a>
            </ul>
          </div>

          <div className={scss.contents}>
            <div className={scss.contents__container}>
              <a href="/">
                <Logo className={scss.contents__logo} />
              </a>
            </div>

            <div className={scss.contents__container}>
              <ul className={scss.contents__list}>
                <li className={scss.contents__item}>
                  <a className={scss.contents__link} href="/">
                    <Twitter className={scss.contents__social} />
                  </a>
                </li>
                <li className={scss.contents__item}>
                  <a className={scss.contents__link} href="/">
                    <Telegram className={scss.contents__social} />
                  </a>
                </li>
                <li className={scss.contents__item}>
                  <a className={scss.contents__link} href="/">
                    <Instagram className={scss.contents__social} />
                  </a>
                </li>
                <li className={scss.contents__item}>
                  <a className={scss.contents__link} href="/">
                    <Medium className={scss.contents__social} />
                  </a>
                </li>
                <li className={scss.contents__item}>
                  <a className={scss.contents__link} href="/">
                    <Github className={scss.contents__social} />
                  </a>
                </li>
                <li className={scss.contents__item}>
                  <a className={scss.contents__link} href="/">
                    <Reddit className={scss.contents__social} />
                  </a>
                </li>
              </ul>
            </div>

            <div className={scss.contents__container}>
              <p className={scss.contents__crypting}>
                © 2021 Tokners. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
