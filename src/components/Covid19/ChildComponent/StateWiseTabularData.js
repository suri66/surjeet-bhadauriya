import React, { useState } from 'react';
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
const StateWiseTabularData = ({ stateWiseTabularData, cityTabularData }) => {
  const [displayState, setDisplayState] = useState(false);

  return (
    <Table size="sm">
      <thead className="font-size-15">
        <tr>
          <th></th>
          <th >State</th>
          <th>Confirmed</th>
          <th>Active</th>
          <th>Recovered</th>
          <th>Death</th>
        </tr>
      </thead>
      <tbody>
        {((stateWiseTabularData || {}).statewise || []).map((item, index) => (
          <>
            {index !== 0 && (
              <>
                <tr key={item.state} className="font-size-15">
                  <td>
                    {displayState !== item.state && (
                      <FontAwesomeIcon
                        onClick={() => setDisplayState(item.state)}
                        className="slider-icon font-gray cursor-pointer"
                        icon={faPlusCircle}
                      />
                    )}
                    {displayState && displayState === item.state && (
                      <FontAwesomeIcon
                        onClick={() => setDisplayState('')}
                        className="slider-icon font-gray cursor-pointer"
                        icon={faMinusCircle}
                      />
                    )}
                  </td>
                  <td className="state-label font-weight-700">
                    {item.state}
                  </td>
                  <th style={{ color: '#dc3545' }} scope="row">
                    {item.confirmed}&nbsp;
                    {item.deltaconfirmed && (
                      <span className="font-size-10 font-gray">
                        +{item.deltaconfirmed}
                      </span>
                    )}
                  </th>
                  <th style={{ color: '#17a2b8' }} scope="row">
                    {item.active}
                  </th>
                  <th style={{ color: '#28a745' }} scope="row">
                    {item.recovered}
                  </th>
                  <th style={{ color: '#ffc107' }} scope="row">
                    {item.deaths}
                  </th>
                </tr>
                {cityTabularData[displayState] && item.state === displayState && (
                  <tr>
                    <td colspan="6">
                      {cityTabularData &&
                        cityTabularData[item.state] &&
                        cityTabularData[item.state].districtData &&
                        Object.keys(cityTabularData[item.state].districtData)
                          .length && (
                          <Table size="sm" className="font-size-15">
                            <thead>
                              <tr>
                                <th>District</th>
                                <th>Confirmed</th>
                              </tr>
                            </thead>
                            <tbody>
                              {Object.keys(
                                cityTabularData[item.state].districtData
                              ).map((district) => (
                                <tr>
                                  <td className="state-label font-weight-700">
                                    {district}
                                  </td>
                                  <th style={{ color: '#dc3545' }} scope="row">
                                    {
                                      cityTabularData[item.state].districtData[
                                        district
                                      ].confirmed
                                    }
                                  </th>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        )}
                      {/* {cityTabularData[item.state]} */}
                    </td>
                  </tr>
                )}
              </>
            )}
          </>
        ))}
      </tbody>
    </Table>
  );
};

export default StateWiseTabularData;
