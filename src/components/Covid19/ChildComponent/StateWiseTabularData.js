import React from 'react';
import { Table } from 'reactstrap';

const StateWiseTabularData = ({ stateWiseTabularData }) => {
  return (
    <Table size="sm">
      <thead>
        <tr>
          <th>State</th>
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
              <tr key={item.state} className="font-size-15">
                <td className="state-label-color font-weight-700">{item.state}</td>
                <th style={{color: '#dc3545'}} scope="row">{item.confirmed}</th>
                <th style={{color: '#17a2b8'}} scope="row">{item.active}</th>
                <th style={{color: '#28a745'}} scope="row">{item.recovered}</th>
                <th style={{color: '#ffc107'}} scope="row">{item.deaths}</th>
              </tr>
            )}
          </>
        ))}
      </tbody>
    </Table>
  );
};

export default StateWiseTabularData;
