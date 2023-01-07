import styles from './Services.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Services() {
    return (
        <section className={cx('wrapper', 'grid', 'wide')} aria-label="services-section">
            <h2 className={cx('heading')}>Services</h2>
            <div className={cx('services-list', 'row')}>
                <div className={cx('services-item', 'col', 'l-4', 'm-12', 'c-12')}>
                    <h3 className={cx('item-heading')}>Service 1</h3>
                    <p className={cx('item-content')}>
                        Cras eleifend mi facilisis ultricies efficitur. Mauris ut dapibus odio. Vestibulum in nibh id
                        tellus tincidunt rhoncus eget et est. Nulla gravida a nisl interdum ornare. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at arcu leo.
                    </p>
                    <div className={cx('btn-wrapper')}>
                        <button className={cx('item-btn')}>More detail</button>
                    </div>
                </div>
                <div className={cx('services-item', 'col', 'l-4', 'm-12', 'c-12')}>
                    <h3 className={cx('item-heading')}>Service 2</h3>
                    <p className={cx('item-content')}>
                        Cras eleifend mi facilisis ultricies efficitur. Mauris ut dapibus odio. Vestibulum in nibh id
                        tellus tincidunt rhoncus eget et est. Nulla gravida a nisl interdum ornare. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at arcu leo.
                    </p>
                    <div className={cx('btn-wrapper')}>
                        <button className={cx('item-btn')}>More detail</button>
                    </div>
                </div>
                <div className={cx('services-item', 'col', 'l-4', 'm-12', 'c-12')}>
                    <h3 className={cx('item-heading')}>Service 3</h3>
                    <p className={cx('item-content')}>
                        Cras eleifend mi facilisis ultricies efficitur. Mauris ut dapibus odio. Vestibulum in nibh id
                        tellus tincidunt rhoncus eget et est. Nulla gravida a nisl interdum ornare. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at arcu leo.
                    </p>
                    <div className={cx('btn-wrapper')}>
                        <button className={cx('item-btn')}>More detail</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
