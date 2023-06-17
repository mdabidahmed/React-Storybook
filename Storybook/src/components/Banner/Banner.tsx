import React, {useState} from 'react';
import infoIcon from '../../assets/react-blue.svg';
import successIcon from '../../assets/react-green.svg';
import warningIcon from '../../assets/react-orange.svg';
import errorIcon from '../../assets/react-red.svg';
import './Banner.css';

export interface BannerProps {
  id?: string;
  title: string;
  css?: string;
  alertType: 'info' | 'success' | 'warning' | 'error';
  visibleTime?: number;
  image?: string;
  bannerIconClass?: string;
  transitionAppearTime?: number;
  transitionTime?: number;
  showBanner?: boolean;
  children?: React.ReactNode;
}

export const Banner: React.FunctionComponent<BannerProps> = ({
  id,
  title,
  css,
  visibleTime,
  image,
  bannerIconClass,
  alertType,
  transitionAppearTime,
  transitionTime,
  showBanner,
  children
}) => {
  //  const [visibleTime, setVisibleTime] = React.useState(0)
  const [show, setShow] = useState(showBanner);
  const alertTypesOptions = [
    {name: 'info', src: infoIcon},
    {name: 'warning', src: warningIcon},
    {name: 'error', src: errorIcon},
    {name: 'success', src: successIcon}
  ];
  const alertName = alertType?.toLowerCase();
  const iconSrcUrl = alertTypesOptions.filter(obj => obj.name === alertName)[0];

  const renderIcon = () => {
    if (alertType && bannerIconClass) {
      return (
        <img
          src={alertType ? iconSrcUrl.src : ''}
          className={`${bannerIconClass} banner-icon`}
        />
      );
    } else if (alertType) {
      return (
        <img src={alertType ? iconSrcUrl.src : ''} className={'banner-icon'} />
      );
    } else {
      return null;
    }
  };

  async function hideBanner(visibleTime: any) {
    if (visibleTime !== undefined && visibleTime > 0) {
      await timeout(1000 + visibleTime);
      setShow(false);
    }
  }

  const timeout = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  if (visibleTime) {
    hideBanner(visibleTime);
  }
  return (
    show && (
      <div className={`banner ${alertType}`}>
        {renderIcon()}
        {/* <img
        className={`${bannerIconClass} banner-icon`}
        src={reactLogo}
        alt={`alert-icon - ${alertType}`}
      /> */}
        <div className='banner-section'>
          <p>{title}</p>
          <p>{children}</p>
        </div>
      </div>
    )
  );
};
