import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faTwitter,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons';
import './styles.scss';

function Slider(props) {
  return (
    <Row className="slider-bg row-margin-off">
      <Col xl="11" lg="1" md="11" sm="12" xs="12">
        <div className="name-tag-div">
          <h3 className="name-tag-title">Hello this is Surjeet</h3>

          <div className="name-tag-position">
            <div className="name-tag-line"></div>
            &nbsp;&nbsp;Software Engineer
          </div>
        </div>
        <img
          src="/img/slide1-left.png"
          width="540"
          height="540"
          className="slider-img"
          alt="surjeet-bhadauriya"
        />
      </Col>
      <Col>
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
            href="https://twitter.com/catchme822"
            target="blank"
          >
            <FontAwesomeIcon className="slider-icon" icon={faTwitter} />
          </a>
          <br />
          <br />
          <a
            href="https://in.linkedin.com/in/surjeet-bhadauriya-b26a1183"
            target="blank"
          >
            <FontAwesomeIcon className="slider-icon" icon={faLinkedinIn} />
          </a>
        </div>
      </Col>
    </Row>
  );
}

export default Slider;
