import styles from './Contact.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <section className={cx('wrapper')} aria-label="contact-section">
            <h2>Contact Me</h2>
            <form className={cx('content')}>
                <label htmlFor="name-input">Your name:</label>
                <input id={cx('name-input')} type="text" placeholder="Your name" name="name" />
                <label htmlFor="email-input"> Your email: </label>
                <input id={cx('email-input')} type="email" placeholder="Email@mail.com" name="email" />
                <label htmlFor="message-input"> Your message: </label>
                <textarea
                    id={cx('message-input')}
                    type="text"
                    placeholder="Your message ..."
                    name="message"
                    text-align="top"
                ></textarea>

                <div className={cx('wrapper-btn')}>
                    <button className={cx('btn')} type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Contact;
