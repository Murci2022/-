'use client';
import { GiCancel, GiHamburgerMenu } from 'react-icons/gi';
import { images } from '../../constants';
import LanguageSelector from './LanuageSelector'; // Importing the LanguageSelector component
import Image from 'next/image';

import './Navbar1.css';
import { useState } from 'react';
import { useTranslation } from '@/app/i18n/client';
import { defaultNS } from '@/app/i18n/settings';
import { useRouter } from 'next/navigation';

const Navbar = ({ lng }: { lng: string }) => {
  const { t, i18n } = useTranslation(lng, defaultNS);
  const [toggleMenu, setToggleMenu] = useState(false);
  const { push } = useRouter();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    push(`/${lang}`);
  };

  return (
    <header>
      <nav className='navbar'>
        <div className='navbar-logo-holder'>
          <Image
            src={images.logo}
            alt='mate-kamaras-logo'
            width={70}
          />
        </div>
        <ul className='navbar-links'>
          <li className='p__opensans'>
            <a href='#home'>{t('nav.home')}</a>
          </li>
          <li className='p__opensans'>
            <a href='#about'>{t('nav.about')}</a>
          </li>
          <li className='p__opensans'>
            <a href='#shop'>{t('nav.shop')}</a>
          </li>
          <li className='p__opensans'>
            <a href='#contact'>{t('nav.contact')}</a>
          </li>
        </ul>

        {/* Integrate the LanguageSelector component */}
        <div className='navbar-language-selector'>
          <LanguageSelector
            onChange={handleLanguageChange}
            lang={lng}
          />
        </div>

        {/* Hamburger menu for small screens */}
        <div className='navbar-smallscreen'>
          <GiHamburgerMenu
            className='navbar_hamburger-icon'
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className='navbar-smallscreen_overlay flex__center slide-bottom'>
              <GiCancel
                fontSize={12}
                onClick={() => setToggleMenu(false)}
                className='overlay__close'
              />
              <ul className='navbar-smallscreen-links'>
                <li className='p__opensans'>
                  <a
                    href='#home'
                    onClick={() => setToggleMenu(false)}
                  >
                    {t('nav.home')}
                  </a>
                </li>
                <li className='p__opensans'>
                  <a
                    href='#about'
                    onClick={() => setToggleMenu(false)}
                  >
                    {t('nav.about')}
                  </a>
                </li>
                <li className='p__opensans'>
                  <a
                    href='#shop'
                    onClick={() => setToggleMenu(false)}
                  >
                    {t('nav.shop')}
                  </a>
                </li>
                <li className='p__opensans'>
                  <a
                    href='#contact'
                    onClick={() => setToggleMenu(false)}
                  >
                    {t('nav.contact')}
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
