'use client';
import { images } from '@/app/[lng]/constants/images';
import { useTranslation } from '@/app/i18n/client';
import { defaultNS } from '@/app/i18n/settings';
import Image from 'next/image';
import SubHeading from '../../SubHeading/SubHeading';
import './hero.css';

export const Header = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, defaultNS);

  return (
    <section
      className='hero__bg app__wrapper section__padding'
      id='home'
    >
      <article className='app__wrapper_info'>
        <a
          href='#about'
          style={{ color: 'white' }}
        >
          <SubHeading title={t('hero.subhead')} />
        </a>

        <h1 className='hero-h1'>{t('hero.name')}</h1>
        <h1 className='hero-h1'>{t('hero.fname')}</h1>
        <p
          className='p__opensans'
          style={{ margin: '2rem 0' }}
        >
          {t('hero.desc')}
        </p>
        <button
          type='button'
          className='custom__button'
        >
          {t('hero.news')}
        </button>
      </article>
      <figure className='app__wrapper_img'>
        <Image
          src={images.mate_hero}
          alt='hero img'
        />
      </figure>
    </section>
  );
};

export default Header;
