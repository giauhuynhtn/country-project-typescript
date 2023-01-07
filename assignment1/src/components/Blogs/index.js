import styles from './Blogs.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Blogs({ img }) {
    return (
        <section className={cx('wrapper')} aria-label="blogs-section">
            <h2 className={cx('heading')}>Projects</h2>
            <ul className={cx('blog-list')}>
                <li className={cx('blog-item')}>
                    <img className={cx('blog-img')} src={img} alt="blog img" />
                    <div className={cx('blog-content')}>
                        <h3 className={cx('blog-heading')}>Blog 1</h3>
                        <h4 className={cx('date')}>Published: 01.01.2022</h4>
                        <p className={cx('item-content')}>
                            Morbi in hendrerit eros, et commodo odio. Curabitur ligula eros, feugiat at orci ac,
                            interdum imperdiet dui. Phasellus ex mi, gravida ut efficitur vestibulum, lobortis vitae
                            dolor.
                        </p>
                        <div className={cx('wrapper-btn')}>
                            <button className={cx('item-btn')}>Project page</button>
                        </div>
                    </div>
                </li>

                <li className={cx('blog-item')}>
                    <img className={cx('blog-img')} src={img} alt="blog img" />
                    <div className={cx('blog-content')}>
                        <h3 className={cx('blog-heading')}>Blog 2</h3>
                        <h4 className={cx('date')}>Published: 11.01.2022</h4>
                        <p className={cx('item-content')}>
                            Morbi in hendrerit eros, et commodo odio. Curabitur ligula eros, feugiat at orci ac,
                            interdum imperdiet dui. Phasellus ex mi, gravida ut efficitur vestibulum, lobortis vitae
                            dolor.
                        </p>
                        <div className={cx('wrapper-btn')}>
                            <button className={cx('item-btn')}>Project page</button>
                        </div>
                    </div>
                </li>

                <li className={cx('blog-item')}>
                    <img className={cx('blog-img')} src={img} alt="blog img" />
                    <div className={cx('blog-content')}>
                        <h3 className={cx('blog-heading')}>Blog 3</h3>
                        <h4 className={cx('date')}>Published: 01.04.2022</h4>
                        <p className={cx('item-content')}>
                            Morbi in hendrerit eros, et commodo odio. Curabitur ligula eros, feugiat at orci ac,
                            interdum imperdiet dui. Phasellus ex mi, gravida ut efficitur vestibulum, lobortis vitae
                            dolor.
                        </p>
                        <div className={cx('wrapper-btn')}>
                            <button className={cx('item-btn')}>Project page</button>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Blogs;
