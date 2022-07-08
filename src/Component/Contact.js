import '../Styles/Contact.css';
import ContactImg from '../Assets/contact.png';
import Phone from '../Assets/phone.svg';
import Message from '../Assets/message.svg';
const Contact = () => {
  return (
    <>
      <section className="main_container b ">
        <h1>Contact Us</h1>
        <div className="contact_wrapper b ">
          <div className="text_wrapper  ">
            <h2>Get In Touch</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
          <div className="internal_wrapper b">
            <div className="contact_img_wrapper">
              <img src={ContactImg} alt="image" />
            </div>
            <div className="contact_info_wrapper">
              <form>
                <p>Full Name</p>
                <div className="contact_info_name">
                  <input type="text" placeholder="Demo Name" required="true" />
                </div>
                <div className="contact_info">
                  <input type="number" placeholder="Phone" required="true" />
                </div>
                <div className="contact_info">
                  <input type="email" placeholder="Email" required="true" />
                </div>
                <div className="contact_info">
                  <textarea
                    cols="40"
                    rows="7"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="btn_wrapper">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="address_wrapper">
          <div className="text_address">
            <h3>Sleek Clothing Co. Limited</h3>
            <p>
              Corporate Office: Lorem, 512, Demo towers, Ipsum Road, Mehrauli,
              New Delhi-110030
            </p>
            <hr />
            <p>
              Registered Office: Lorem, 512, Demo towers, Ipsum Road, Mehrauli,
              New Delhi-110030
            </p>
            <hr />
            <p>
              <img className="phone" src={Phone} alt="phone" />
              +1 415-871-0460, +09124567931
            </p>
            <p>
              <img className="phone" src={Message} alt="message" />{' '}
              customercare@sleek.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
