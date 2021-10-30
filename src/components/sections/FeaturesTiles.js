import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'PERATURAN PRAKTIKUM',
    paragraph:
      'Berikut adalah peraturan praktikum untuk mata kuliah Pengembangan Web 2021.',
  };

  return (
    <section id='aturan' {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div className={tilesClasses}>
            <div className='tiles-item reveal-from-bottom'>
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt='Features tile icon 01'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>Peraturan 1</h4>
                  <p className='m-0 text-sm' style={{ textAlign: 'justify' }}>
                    Praktikan harus mengikuti semua acara praktikum secara urut.
                  </p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-bottom'
              data-reveal-delay='200'>
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt='Features tile icon 02'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>Peraturan 2</h4>
                  <p className='m-0 text-sm' style={{ textAlign: 'justify' }}>
                    Pergunakan waktu praktikum sebaik-baiknya.
                  </p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-bottom'
              data-reveal-delay='400'>
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt='Features tile icon 03'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>Peraturan 3</h4>
                  <p className='m-0 text-sm' style={{ textAlign: 'justify' }}>
                    Segala pemberitahuan ataupun pengumuman tambahan dapat
                    dilihat di grup teams masing-masing kelas.
                  </p>
                </div>
              </div>
            </div>

            <div className='tiles-item reveal-from-bottom'>
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt='Features tile icon 04'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>Peraturan 4</h4>
                  <p className='m-0 text-sm' style={{ textAlign: 'justify' }}>
                    Praktikan baru boleh mengikuti praktikum setelah memenuhi
                    persyaratan yang berlaku dan diijinkan oleh Asisten
                    Praktikum.
                  </p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-bottom'
              data-reveal-delay='200'>
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-05.svg')}
                      alt='Features tile icon 05'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>Peraturan 5</h4>
                  <p className='m-0 text-sm' style={{ textAlign: 'justify' }}>
                    Praktikan harus sudah mengerjakan guided dan tugas praktikum
                    sebelumnya sebagai syarat untuk mengikuti praktikum
                    selanjutnya.
                  </p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-bottom'
              data-reveal-delay='400'>
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt='Features tile icon 06'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>Peraturan 6</h4>
                  <p className='m-0 text-sm' style={{ textAlign: 'justify' }}>
                    Batas keterlambatan maksimal 15 menit. Jika terlambat lebih
                    dari 15 menit, praktikan tidak diijinkan mengikuti
                    praktikum.
                  </p>
                </div>
              </div>
            </div>

            <div className='tiles-item reveal-from-bottom'>
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt='Features tile icon 06'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>Peraturan 7</h4>
                  <p className='m-0 text-sm' style={{ textAlign: 'justify' }}>
                    Jika praktikan tidak dapat mengikuti praktikum sesuai
                    kelasnya, praktikan diijinkan pindah kelas dengan
                    menggunakan surat ijin yang ditandatangani oleh Dosen
                    Praktikum. Pindah kelas hanya bisa dilakukan pada minggu
                    yang sama dengan seijin Dosen Praktikum.
                  </p>
                </div>
              </div>
            </div>

            <div className='tiles-item reveal-from-bottom'>
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt='Features tile icon 06'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>Peraturan 8</h4>
                  <p className='m-0 text-sm' style={{ textAlign: 'justify' }}>
                    Batas waktu untuk protes nilai adalah seminggu (7 hari)
                    setelah nilai muncul. Untuk protes nilai bisa menghubungi
                    pemegang modul melalui line atau teams dengan mencantumkan
                    langsung Nama, NPM, Kelas, dan Keluhan.
                  </p>
                </div>
              </div>
            </div>
            <div className='tiles-item reveal-from-bottom'>
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt='Features tile icon 06'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>Peraturan 9</h4>
                  <p className='m-0 text-sm' style={{ textAlign: 'justify' }}>
                    Apabila terdapat hasil pekerjaan yang sama, maka akan
                    diberikan nilai 0 untuk semua pihak yang terlibat. Tidak ada{' '}
                    <span style={{ fontWeight: 'bold', color: 'red' }}>
                      toleransi
                    </span>{' '}
                    untuk pekerjaan yang sama antar praktikan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
