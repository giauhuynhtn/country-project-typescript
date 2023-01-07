import styles from './TechStack.module.scss';
import classNames from 'classnames/bind';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faJs } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function TechStack() {
    return (
        <section className={cx('tech-content')} aria-label="tech-stack-section">
            <h2>Tech stack</h2>
            <div className={cx('tech-logo-list')}>
                <i className={cx('tech-logo-item fab fa-js')} aria-hidden="true"></i>
                <i className={cx('tech-logo-item fab fa-html5')} aria-hidden="true"></i>
                <i className={cx('tech-logo-item fab fa-react')} aria-hidden="true"></i>
                <i className={cx('tech-logo-item fab fa-sass')} aria-hidden="true"></i>
                <i className={cx('tech-logo-item fab fa-css3')} aria-hidden="true"></i>
            </div>
        </section>
    );
}

export default TechStack;
