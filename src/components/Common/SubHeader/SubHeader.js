import React from 'react';
import './styles.scss';

const SubHeader = ({ title }) => {
  return (
    <div className="sub-header-bg">
      <h1 className="font-weight-800 font-white text-align-center ">{title}</h1>
    </div>
  );
};

export default SubHeader;
