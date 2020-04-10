import React from 'react';
import { Col, Row, Card, CardBody, CardText, CardTitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import '../styles.scss';

const ServiceProvided = (props) => {
  return (
    <div className="padding-50-main-div">
      <Row className="row-margin-off">
        <Col>
          <div className="text-align-center font-size-24 main-text-div">
            <div className="service-vertical-line"></div>
            <div className="margin-top-20 text-uppercase">Service Provided</div>
            <div className="margin-top-20">
              <h2 className="font-weight-800">
                Build brands campaigns & digital projects
              </h2>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="row-margin-off padding-100-50">
        <Col xl="3" lg="3" md="3" sm="12" xs="12" className="margin-top-20">
          <Card className="service-card">
            <CardBody>
              <div className="service-icon-div">
                <FontAwesomeIcon className="service-icon" icon={faLayerGroup} />
              </div>
              <CardTitle className="margin-top-20">
                <h4 className="text-align-center service-div-title">Web Application</h4>
              </CardTitle>
              <CardText className="service-div-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xl="3" lg="3" md="3" sm="12" xs="12" className="margin-top-20">
          <Card className="service-card">
            <CardBody>
              <div className="service-icon-div">
                <FontAwesomeIcon className="service-icon" icon={faLayerGroup} />
              </div>
              <CardTitle className="margin-top-20">
                <h4 className="text-align-center service-div-title">Web design</h4>
              </CardTitle>
              <CardText className="service-div-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col className="margin-top-20">
          <Card className="service-card">
            <CardBody>
              <div className="service-icon-div">
                <FontAwesomeIcon className="service-icon" icon={faLayerGroup} />
              </div>
              <CardTitle className="margin-top-20">
                <h4 className="text-align-center service-div-title">Software Development</h4>
              </CardTitle>
              <CardText className="service-div-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ServiceProvided;
