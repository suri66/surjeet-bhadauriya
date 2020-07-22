import React, { Component } from 'react';
import SubHeader from '../Common/SubHeader/SubHeader';
import ContactUsForm from './ContactUsForm/ContactUsForm';

class ContactUs extends Component {
    render() {
        return (
            <div>
                <SubHeader title="Get In Touch"/>
                <ContactUsForm />
            </div>
        );
    }
}

export default ContactUs;