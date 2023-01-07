import styles from './About.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AboutSection({ aboutImg }) {
    return (
        <section className={cx('wrapper')} aria-label="about-section">
            <div className={cx('content')} aria-label="about-section">
                <h1 className={cx('heading')}>My portfolio</h1>
                <p className={cx('intro')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor, odio eu consectetur
                    adipiscing elit. Integer porttitorvulputate dignissim, enim libero Lorem ipsum dolor sit amet,
                    consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit elitvehicula neque,
                    nec suscipit sem felis in risus.
                </p>
            </div>
            <img src={aboutImg} alt="owner" />
        </section>
    );
}

export default AboutSection;
