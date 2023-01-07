import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header({ logo }) {
    return (
        <header className={cx('wrapper')}>
            <FontAwesomeIcon className={cx('menu-icon')} icon={faBars} />
            <h1 className={cx('mobile-heading')}>GIAU HUYNH</h1>

            <nav>
                <a href="" className={cx('menu-item')}>
                    Home
                </a>
                <a href="" className={cx('menu-item')}>
                    About
                </a>
                <a href="" className={cx('menu-item')}>
                    Services
                </a>
                <a href="" className={cx('menu-item')}>
                    Tech stack
                </a>
                <a href="" className={cx('menu-item')}>
                    Blogs
                </a>
                <a href="" className={cx('menu-item')}>
                    Contact
                </a>
            </nav>
        </header>
    );
}

export default Header;
