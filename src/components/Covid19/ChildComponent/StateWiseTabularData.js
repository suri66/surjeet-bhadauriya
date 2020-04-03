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
        {((stateWiseTabularData||{}).statewise||[]).map((item, index) => (
            <>
          {index !== 0 && <tr key={item.state}>
            <th scope="row">{item.state}</th>
            <td>{item.confirmed}</td>
            <td>{item.active}</td>
            <td>{item.recovered}</td>
            <td>{item.deaths}</td>
          </tr>}
          </>
        ))}
      </tbody>
    </Table>
  );
};

export default StateWiseTabularData;
