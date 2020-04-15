import React from 'react';
import { Row, Col } from 'reactstrap';
import './styles.scss';

const Team = (props) => {
  return (
    <Row className="team-bg row-margin-off padding-40-main-div">
      <Col xl="6" lg="6" md="6" sm="12" xs="12" className="font-white margin-top-20">
        <img
          src="/img/slide1-left.png"
          className="team-img"
          alt="surjeet-bhadauriya"
        />
        <div className="text-align-center margin-top-20">
          <h2>Surjeet bhadauriya</h2>
          <h5>Software Engineer</h5>
          <h6>Voice: +91 91732 86273</h6>
        </div>
      </Col>
      <Col xl="6" lg="6" md="6" sm="12" xs="12" className="font-white margin-top-20">
        <img
          src="/img/team.png"
          className="team-img"
          alt="surjeet-bhadauriya"
        />
        <div className="text-align-center margin-top-20">
          <h3>Jaymin Prajapati</h3>
          <h5>Android App Developer</h5>
          <h6>Voice: +91 74053 51880</h6>
        </div>
      </Col>
    </Row>
  );
};

export default Team;
