import React, { useRef } from 'react';
import cx from 'classnames';
import './chapter.scss';
import { useTranslation } from 'react-i18next';
import { Waypoint } from 'react-waypoint';
import LegendIcon from '../icons/legend-icon';

const ALIGNMENTS = {
  left: 'w-full lg:w-1/3 m-left-chapter',
  fully: 'w-full lg:w-1/2 mx-auto',
  right: 'w-full lg:w-1/3 self-end m-right-chapter',
};

function Chapter({
  id,
  theme,
  title,
  image,
  images,
  description,
  currentChapterId,
  legend,
  sources,
  alignment,
  setCurrentChapter,
  setCurrentAction,
}) {
  const { t } = useTranslation();

  const stepClasses = 'step max-w-md opacity-25';
  const classList = id === currentChapterId ? `${stepClasses} active` : stepClasses;
  const renderImage = (img) => (
    <figure key={img.src} className="relative p-1">
      <img
        key={img.src}
        src={img.src}
        alt={title}
        className={cx('image w-full', { 'p-10': !img.title })}
      />
      {img.title && (
        <figcaption
          className={
            'absolute top-0 mt-1 p-1 flex uppercase tracking-wider bg-black bg-opacity-50 text-white text-xs'
          }
        >
          <div className="flex mr-1">{t(img.title)}</div>-
          <div className="font-bold ml-1">{t(img.author)}</div>
        </figcaption>
      )}
    </figure>
  );

  const renderLegend = (legend, sources) => (
    <div className="text-base leading-6">
      {legend.map((l) => (
        <div key={l.title} className="flex items-center gap-4 mb-4">
          {l.icon ? (
            <LegendIcon icon={l.icon} />
          ) : (
            <span
              className="legendItem w-8 h-8 mr-4"
              style={{
                backgroundColor: l.color,
                border: l.border ? `solid 2px ${l.border}` : 'none',
              }}
            />
          )}
          <span>{t(l.title)}</span>
        </div>
      ))}
      {sources && (
        <div className="ml-12">
          {t('Sources')}: {t(sources)}
        </div>
      )}
    </div>
  );

  const onEnter = () => {
    setCurrentChapter(id);
    setCurrentAction('enter');
  };
  const onLeave = () => {
    setCurrentChapter(id);
    setCurrentAction('leave');
  };

  const chapterRef = useRef(null);
  const chapterHeight = chapterRef.current?.offsetHeight;
  // Add some marging to the chapter if it's too small so it works correctly with the scrolling
  const extraHeight = chapterHeight && chapterHeight < 400 ? 'my-40' : '';

  return (
    <div id={id} className={cx(classList, ALIGNMENTS[alignment])}>
      <Waypoint
        onEnter={onEnter}
        onLeave={onLeave}
        topOffset="-20%"
        bottomOffset="40%"
      />
      <div ref={chapterRef} className={cx(theme, 'rounded-lg p-6 space-y-4', extraHeight)}>
        {images &&
          images.filter((i) => i.position === 'top').map((i) => renderImage(i))}
        {title && (
          <div className="text-base leading-6">
            {title && <h3 className="font-lora text-2xl leading-8 pb-4">{t(title)}</h3>}
            {description && <p className="text-base leading-6">{t(description)}</p>}
          </div>
        )}
        {legend && renderLegend(legend, sources)}
        {image && renderImage({ src: image })}
        {images && images.filter((i) => i.position === 'bottom').map((i) => renderImage(i))}
      </div>
    </div>
  );
}

export default Chapter;
