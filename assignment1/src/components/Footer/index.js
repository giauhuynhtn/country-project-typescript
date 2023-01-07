import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer({ fbLogo, linkedInLogo, twitterLogo }) {
    return (
        <footer className={cx('wrapper')}>
            <p className={cx('text')}>© 2022 Giau Huynh. All rights reserved.</p>
            <div className={cx('icons-list')}>
                <img className={cx('icon')} src={fbLogo} alt="Facebook" />
                <img className={cx('icon')} src={linkedInLogo} alt="LinkedIn" />
                <img className={cx('icon')} src={twitterLogo} alt="Twitter" />
            </div>
        </footer>
    );
}

export default Footer;
