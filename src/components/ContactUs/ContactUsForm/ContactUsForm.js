import React from 'react';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../styles.scss';

const ContactUsForm = (props) => {
  return (
    <div className="padding-50-main-div">
      <Row className="row-margin-off">
        <Col>
          <div className="text-align-center font-size-24 main-text-div">
            <div className="contact-vertical-line"></div>
            <br />
            <div className="display-flex margin-top-20" style={{width: '36%', margin: 'auto'}}>
              <a
                href="https://www.facebook.com/surjeetsingh.bhadauriya"
                target="blank"
              >
                <FontAwesomeIcon className="contact-fb-icon" icon={faFacebookF} />
              </a>
              <a
                className="margin-left-20"
                href="https://www.instagram.com/beingsurjeet"
                target="blank"
              >
                <FontAwesomeIcon className="contact-instagram-icon" icon={faInstagram} />
              </a>
              <a
                className="margin-left-20"
                href="https://twitter.com/catchme822"
                target="blank"
              >
                <FontAwesomeIcon className="contact-twitter-icon" icon={faTwitter} />
              </a>
              <a
                className="margin-left-20"
                href="https://in.linkedin.com/in/surjeet-bhadauriya-b26a1183"
                target="blank"
              >
                <FontAwesomeIcon className="contact-linkedin-icon" icon={faLinkedinIn} />
              </a>
            </div>
            <div className="margin-top-20">sbsurjeet66@gmail.com</div>
            <div className="margin-top-5">9173286273</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactUsForm;
