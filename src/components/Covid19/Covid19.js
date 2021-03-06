import React from 'react';
import { Row, Col } from 'reactstrap';
import FadeIn from 'react-fade-in';
import StateWiseTabularData from './ChildComponent/StateWiseTabularData';
import TotalMainBlocks from './ChildComponent/TotalMainBlocks';
import './styles.scss';
import DailyConfirmedChartData from './ChildComponent/DailyConfirmedChartData';
import ConfirmedRecovered from './ChildComponent/ConfirmedRecovered';
import ConfirmedDeath from './ChildComponent/ConfirmedDeath';

function Covid19({ stateWiseTabularData = {}, cityTabularData = {} }) {
  return (
    <div className="covid19-main-div">
      <FadeIn delay="80">
        <Row>
          <Col>
            <h3 className="text-uppercase font-weight-800">
              <img
                src="/img/India-Flag-icon.png"
                alt="India Covid 19"
                className="img-india-icon"
              />
              &nbsp;India Covid-19
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
          <Col xl="6" lg="6" md="6" sm="12" xs="12" className="state-table">
            <StateWiseTabularData
              stateWiseTabularData={stateWiseTabularData}
              cityTabularData={cityTabularData}
            />
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
        <div style={{ marginTop: '20px', fontSize: '15px' }}>
          Source:&nbsp;
          <a
            href="https://www.covid19india.org/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline' }}
          >
            covid19india
          </a>
        </div>
      </FadeIn>
    </div>
  );
}

export default Covid19;
