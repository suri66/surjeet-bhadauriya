import React from 'react';
import { Row, Col } from 'reactstrap';
import FadeIn from 'react-fade-in';
import StateWiseTabularData from './ChildComponent/StateWiseTabularData';
import TotalMainBlocks from './ChildComponent/TotalMainBlocks';
import './styles.scss';
import DailyConfirmedChartData from './ChildComponent/DailyConfirmedChartData';
import ConfirmedRecovered from './ChildComponent/ConfirmedRecovered';
import ConfirmedDeath from './ChildComponent/ConfirmedDeath';

function Covid19({ stateWiseTabularData = {} }) {
  return (
    <div className="covid19-main-div">
      <FadeIn>
        <Row>
          <Col>
            <h3 className="text-uppercase font-weight-800">
              India Covid-19              
            </h3>
          </Col>
        </Row>

        <Row className="margin-top-10">
          <Col>
            <TotalMainBlocks
              totalData={(stateWiseTabularData.statewise || [])[0]}
            />
          </Col>
        </Row>

        <Row className="margin-top-40">
          <Col xl="6" lg="6" md="6" sm="12" xs="12">
            <StateWiseTabularData stateWiseTabularData={stateWiseTabularData} />
          </Col>
          <Col xl="6" lg="6" md="6" sm="12" xs="12">
            <DailyConfirmedChartData
              dailyConfirmedCases={stateWiseTabularData.cases_time_series || []}
            />

            <br />
            <br />

            <ConfirmedRecovered
              mixedData={stateWiseTabularData.cases_time_series || []}
            />

            <br />
            <br />

            <ConfirmedDeath
              mixedData={stateWiseTabularData.cases_time_series || []}
            />
          </Col>
        </Row>
      </FadeIn>
    </div>
  );
}

export default Covid19;
