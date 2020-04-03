import React from 'react';
import { Row, Col } from 'reactstrap';
import './styles.scss';
import StateWiseTabularData from './ChildComponent/StateWiseTabularData';
import TotalMainBlocks from './ChildComponent/TotalMainBlocks';

function Covid19({ stateWiseTabularData = {} }) {
  return (
    <div className="covid19-main-div">
      <Row>
        <Col>
          <h3 className="text-uppercase font-weight-800">India Covid-19</h3>
        </Col>
      </Row>

      <Row className="margin-top-10">
          <Col>
            <TotalMainBlocks totalData={(stateWiseTabularData.statewise||[])[0]} />
          </Col>
      </Row>

      <Row className="margin-top-40">
        <Col>
          <StateWiseTabularData stateWiseTabularData={stateWiseTabularData} />
        </Col>
      </Row>
    </div>
  );
}

export default Covid19;
