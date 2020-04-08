import React from 'react';
import './styles.scss';
import SubHeader from '../Common/SubHeader/SubHeader';
import ServiceProvided from './ChildComponent/ServiceProvided';

const Services = (props) => {
    return (
        <div>
            <SubHeader title="Services"/>
            <ServiceProvided />
        </div>
    );
}

export default Services;