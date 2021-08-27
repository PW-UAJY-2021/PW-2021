import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'ASISTEN PRAKTIKUM',
    paragraph:
      'Berikut adalah asisten praktikum yang akan membantu kalian selama mata kuliah Pengembangan Web 2021.',
  };

  return (
    <section id='asisten' {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div className={splitClasses}>
            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-left'
                data-reveal-container='.split-item'>
                <div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
                  JAVASCRIPT & VUE FIREBASE
                </div>
                <h3 className='mt-0 mb-12'>KEVIN GHEBRE</h3>
                <p className='m-0'>
                  <ButtonGroup>
                    <Button
                      tag='a'
                      wideMobile
                      href='http://line.me/ti/p/~kevin_ghebre'
                      style={{
                        backgroundColor: 'transparent',
                        width: 'auto',
                        padding: '0',
                      }}>
                      <Image
                        style={{ width: '100%' }}
                        src={require('./../../assets/images/line.png')}
                        alt='line.png'
                      />
                    </Button>
                    <Button
                      tag='a'
                      wideMobile
                      href='#'
                      style={{
                        backgroundColor: 'transparent',
                        width: 'auto',
                        padding: '0',
                      }}>
                      <Image
                        style={{ width: '100%' }}
                        src={require('./../../assets/images/ig.svg')}
                        alt='ig.png'
                        width={25}
                        height={40}
                      />
                    </Button>
                  </ButtonGroup>
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'>
                <Image
                  src={require('./../../assets/images/kevin.png')}
                  alt='kevin.png'
                />
              </div>
            </div>

            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-right'
                data-reveal-container='.split-item'>
                <div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
                  HTML & REST WEB SERVICE
                </div>
                <h3 className='mt-0 mb-12'>ARKIN ELIEZER JULIJANTO</h3>
                <p className='m-0'>
                  <ButtonGroup>
                    <Button
                      tag='a'
                      wideMobile
                      href='http://line.me/ti/p/~arkin.julianto'
                      style={{
                        backgroundColor: 'transparent',
                        width: 'auto',
                        padding: '0',
                      }}>
                      <Image
                        style={{ width: '100%' }}
                        src={require('./../../assets/images/line.png')}
                        alt='line.png'
                      />
                    </Button>
                    <Button
                      tag='a'
                      wideMobile
                      href='https://www.instagram.com/arkinjulianto'
                      style={{
                        backgroundColor: 'transparent',
                        width: 'auto',
                        padding: '0',
                      }}>
                      <Image
                        style={{ width: '100%' }}
                        src={require('./../../assets/images/ig.svg')}
                        alt='ig.png'
                        width={25}
                        height={40}
                      />
                    </Button>
                  </ButtonGroup>
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'>
                <Image
                  src={require('./../../assets/images/arkin.png')}
                  alt='arkin.png'
                />
              </div>
            </div>

            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-left'
                data-reveal-container='.split-item'>
                <div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
                  CSS & VUE CLI
                </div>
                <h3 className='mt-0 mb-12'>GERARDO LEONEL BLESLY</h3>
                <p className='m-0'>
                  <ButtonGroup>
                    <Button
                      tag='a'
                      wideMobile
                      href='http://line.me/ti/p/~rexion21'
                      style={{
                        backgroundColor: 'transparent',
                        width: 'auto',
                        padding: '0',
                      }}>
                      <Image
                        style={{ width: '100%' }}
                        src={require('./../../assets/images/line.png')}
                        alt='line.png'
                      />
                    </Button>
                    <Button
                      tag='a'
                      wideMobile
                      href='https://www.instagram.com/gerardoblesly'
                      style={{
                        backgroundColor: 'transparent',
                        width: 'auto',
                        padding: '0',
                      }}>
                      <Image
                        style={{ width: '100%' }}
                        src={require('./../../assets/images/ig.svg')}
                        alt='ig.png'
                        width={25}
                        height={40}
                      />
                    </Button>
                    <Button
                      tag='a'
                      wideMobile
                      href='https://twitch.tv/itsblesly'
                      style={{
                        backgroundColor: 'transparent',
                        width: 'auto',
                        padding: '0',
                      }}>
                      <Image
                        style={{ width: '100%' }}
                        src={require('./../../assets/images/twitch.png')}
                        alt='twitch.png'
                        width={25}
                        height={40}
                      />
                    </Button>
                  </ButtonGroup>
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'>
                <Image
                  src={require('./../../assets/images/gerar.png')}
                  alt='gerar.png'
                />
              </div>
            </div>

            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-left'
                data-reveal-container='.split-item'>
                <div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
                  PHP & VUE JS BASIC
                </div>
                <h3 className='mt-0 mb-12'>EZRA AUDIVANO DIRFA</h3>
                <p className='m-0'>
                  <ButtonGroup>
                    <Button
                      tag='a'
                      blank
                      wideMobile
                      href='http://line.me/ti/p/~ezradio3'
                      style={{
                        backgroundColor: 'transparent',
                        width: 'auto',
                        padding: '0',
                      }}>
                      <Image
                        style={{ width: '100%' }}
                        src={require('./../../assets/images/line.png')}
                        alt='line.png'
                      />
                    </Button>
                    <Button
                      tag='a'
                      wideMobile
                      href='https://www.instagram.com/ezradio1'
                      style={{
                        backgroundColor: 'transparent',
                        width: 'auto',
                        padding: '0',
                      }}>
                      <Image
                        style={{ width: '100%' }}
                        src={require('./../../assets/images/ig.svg')}
                        alt='ig.png'
                        width={25}
                        height={40}
                      />
                    </Button>
                  </ButtonGroup>
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'>
                <Image
                  src={require('./../../assets/images/ezra.png')}
                  alt='ezra.png'
                />
              </div>
            </div>

            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-left'
                data-reveal-container='.split-item'>
                <div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
                  LARAVEL MVC & LARAVEL CRUD
                </div>
                <h3 className='mt-0 mb-12'>ARNAWA JUAN IBNUAJI</h3>
                <p className='m-0'>
                  <ButtonGroup>
                    <Button
                      tag='a'
                      wideMobile
                      href='http://line.me/ti/p/~arnawa21'
                      style={{
                        backgroundColor: 'transparent',
                        width: 'auto',
                        padding: '0',
                      }}>
                      <Image
                        style={{ width: '100%' }}
                        src={require('./../../assets/images/line.png')}
                        alt='line.png'
                      />
                    </Button>
                    <Button
                      tag='a'
                      wideMobile
                      href='https://www.instagram.com/arnawaji09'
                      style={{
                        backgroundColor: 'transparent',
                        width: 'auto',
                        padding: '0',
                      }}>
                      <Image
                        style={{ width: '100%' }}
                        src={require('./../../assets/images/ig.svg')}
                        alt='ig.png'
                        width={25}
                        height={40}
                      />
                    </Button>
                  </ButtonGroup>
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'>
                <Image
                  src={require('./../../assets/images/aji.png')}
                  alt='aji.png'
                />
              </div>
            </div>

            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-left'
                data-reveal-container='.split-item'>
                <div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
                  PWA VUE & SERVICE WORKER
                </div>
                <h3 className='mt-0 mb-12'>MILIARWAN DOANKZZ</h3>
                <p className='m-0'>
                  <ButtonGroup>
                    <Button
                      tag='a'
                      wideMobile
                      href='http://line.me/ti/p/~miliarwan_doankzz'
                      style={{
                        backgroundColor: 'transparent',
                        width: 'auto',
                        padding: '0',
                      }}>
                      <Image
                        style={{ width: '100%' }}
                        src={require('./../../assets/images/line.png')}
                        alt='line.png'
                      />
                    </Button>
                    <Button
                      tag='a'
                      wideMobile
                      href='https://www.instagram.com/miliarwan_doankz'
                      style={{
                        backgroundColor: 'transparent',
                        width: 'auto',
                        padding: '0',
                      }}>
                      <Image
                        style={{ width: '100%' }}
                        src={require('./../../assets/images/ig.svg')}
                        alt='ig.png'
                        width={25}
                        height={40}
                      />
                    </Button>
                  </ButtonGroup>
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'>
                <Image
                  src={require('./../../assets/images/mili.png')}
                  alt='mili.png'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
