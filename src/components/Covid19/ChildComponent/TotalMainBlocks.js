import React from 'react';
import { Row, Col, Card, CardTitle, CardText } from 'reactstrap';

const TotalMainBlocks = ({ totalData = {} }) => {
  return (
    <Row>
      <Col xl="3" lg="3" md="3" sm="6" xs="6">
        <Card body inverse color="danger" className="main-div">
          <CardTitle className="font-weight-700 text-uppercase">Confirmed</CardTitle>
          <CardText className="main-div-value font-weight-700">
            <div>
              {totalData.confirmed}
             {totalData.deltaconfirmed != 0 && <span className="pull-right font-size-15">
                [+{totalData.deltaconfirmed}]
              </span>}
            </div>
          </CardText>
        </Card>
      </Col>
      <Col xl="3" lg="3" md="3" sm="6" xs="6">
        <Card body inverse color="info" className="main-div">
          <CardTitle className="font-weight-700 text-uppercase">Active</CardTitle>
          <CardText className="main-div-value font-weight-700">
            <div>
              {totalData.active}              
            </div>
          </CardText>
        </Card>
      </Col>
      <Col>
        <Card body inverse color="success" className="main-div">
          <CardTitle className="font-weight-700 text-uppercase">Recovered</CardTitle>
          <CardText className="main-div-value font-weight-700">
            <div>
              {totalData.recovered}
              {totalData.deltarecovered != 0 && <span className="pull-right font-size-15">
                [+{totalData.deltarecovered}]
              </span>}
            </div>
          </CardText>
        </Card>
      </Col>
      <Col xl="3" lg="3" md="3" sm="6" xs="6">
        <Card body inverse color="warning" className="main-div">
          <CardTitle className="font-weight-700 text-uppercase">Deaths</CardTitle>
          <CardText className="main-div-value font-weight-700">
            <div>
              {totalData.deaths}
              {totalData.deltadeaths != 0 && <span className="pull-right font-size-15">
                [+{totalData.deltadeaths}]
              </span>}
            </div>
          </CardText>
        </Card>
      </Col>
    </Row>
  );
};

export default TotalMainBlocks;
