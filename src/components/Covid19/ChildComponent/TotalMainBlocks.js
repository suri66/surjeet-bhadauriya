import React from 'react';
import { Row, Col, Card, CardTitle, CardText } from 'reactstrap';

const TotalMainBlocks = ({ totalData = {} }) => {
  return (
    <Row>
      <Col xl="3" lg="3" md="3" sm="6" xs="6">
        <Card body inverse color="danger" className="main-div">
          <CardTitle className="font-weight-700">Confirmed</CardTitle>
          <CardText className="main-div-value font-weight-700">
            <div>
              {totalData.confirmed}
             {totalData.delta && totalData.delta.confirmed != 0 && <span className="pull-right font-size-15">
                [+{totalData.delta && totalData.delta.confirmed}]
              </span>}
            </div>
          </CardText>
        </Card>
      </Col>
      <Col xl="3" lg="3" md="3" sm="6" xs="6">
        <Card body inverse color="success" className="main-div">
          <CardTitle className="font-weight-700">Active</CardTitle>
          <CardText className="main-div-value font-weight-700">
            <div>
              {totalData.active}
              {totalData.delta && totalData.delta.active != 0 && <span className="pull-right font-size-15">
                [+{totalData.delta && totalData.delta.active}]
              </span>}
            </div>
          </CardText>
        </Card>
      </Col>
      <Col>
        <Card body inverse color="info" className="main-div">
          <CardTitle className="font-weight-700">Recovered</CardTitle>
          <CardText className="main-div-value font-weight-700">
            <div>
              {totalData.recovered}
              {totalData.delta && totalData.delta.recovered != 0 && <span className="pull-right font-size-15">
                [+{totalData.delta && totalData.delta.recovered}]
              </span>}
            </div>
          </CardText>
        </Card>
      </Col>
      <Col xl="3" lg="3" md="3" sm="6" xs="6">
        <Card body inverse color="warning" className="main-div">
          <CardTitle className="font-weight-700">Deaths</CardTitle>
          <CardText className="main-div-value font-weight-700">
            <div>
              {totalData.deaths}
              {totalData.delta && totalData.delta.deaths != 0 && <span className="pull-right font-size-15">
                [+{totalData.delta && totalData.delta.deaths}]
              </span>}
            </div>
          </CardText>
        </Card>
      </Col>
    </Row>
  );
};

export default TotalMainBlocks;
