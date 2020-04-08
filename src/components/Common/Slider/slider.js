import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faTwitter,
  faFacebookF,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import './styles.scss';

function Slider(props) {
  return (
    <Row className="slider-bg row-margin-off padding-40-main-div">
      <Col xl="5" lg="5" md="5" sm="12" xs="12">
        <img
          src="/img/slide1-left.png"
          className="slider-img"
          alt="surjeet-bhadauriya"
        />
      </Col>
      <Col className="font-white">
        <h3 className="name-tag-title">Hello this is Surjeet</h3>        
        <div className="name-tag-position">
          <div className="name-tag-line"></div>
          &nbsp;&nbsp;Software Engineer
        </div>
        <br />
        <div className="slider-icon-div">
              <a
                href="https://www.facebook.com/surjeetsingh.bhadauriya"
                target="blank"
              >
                <FontAwesomeIcon className="slider-icon" icon={faFacebookF} />
              </a>
              <a
                className="margin-left-20"
                href="https://www.instagram.com/beingsurjeet"
                target="blank"                
              >
                <FontAwesomeIcon className="slider-icon" icon={faInstagram} />
              </a>
              <a
                className="margin-left-20"
                href="https://twitter.com/catchme822"
                target="blank"                
              >
                <FontAwesomeIcon className="slider-icon" icon={faTwitter} />
              </a>
              <a
                className="margin-left-20"
                href="https://in.linkedin.com/in/surjeet-bhadauriya-b26a1183"
                target="blank"
              >
                <FontAwesomeIcon className="slider-icon" icon={faLinkedinIn} />
              </a>
            </div>
        {/* <div>
          Hello, I'm Surjeet Bhadauriya, a Software Engineer based in India.
          Currently working with TestXpert as Software Engineer. I like to think
          big, but I’m pragmatic in my day-to-day work and can take fast
          decisions on what needs to be done in the short term. JavaScript is
          the core of my expertise. With more than 4 years of experience, I have
          worked/working on NodeJs, Angular, React, MongoDB, PostgresSQL,
          GraphQL, Docker and many more. I have experience managing teams and am
          self-motivated but able to adapt to different team structures. Based
          in India.
        </div> */}
      </Col>
      {/* <Col xl="11" lg="11" md="11" sm="12" xs="12">
        <div className="xl-screen">
          <div className="name-tag-div">
            <h3 className="name-tag-title">Hello this is Surjeet</h3>

            <div className="name-tag-position">
              <div className="name-tag-line"></div>
              &nbsp;&nbsp;Software Engineer
            </div>

            <div className="slider-icon-div">
              <a
                href="https://www.facebook.com/surjeetsingh.bhadauriya"
                target="blank"
              >
                <FontAwesomeIcon className="slider-icon" icon={faFacebookF} />
              </a>
              <br />
              <br />
              <a
                className="mobile-view"
                href="https://twitter.com/catchme822"
                target="blank"
              >
                <FontAwesomeIcon className="slider-icon" icon={faTwitter} />
              </a>
              <br />
              <br />
              <a
                className="mobile-view"
                href="https://in.linkedin.com/in/surjeet-bhadauriya-b26a1183"
                target="blank"
              >
                <FontAwesomeIcon className="slider-icon" icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </Col>
      <Col>
        <div>
          <h5 style={{ textAlign: 'center', color: 'white' }}>
            The site is under construction. Please visit covid19 page only.
          </h5>
        </div>
      </Col> */}
    </Row>
  );
}

export default Slider;
