import React, { Component } from 'react';
import Covid19 from '../components/Covid19/Covid19';
import { getJson } from '../services/covid19Service';

class Covid19Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateWiseTabularData: {},
      cityTabularData: {}
    };
  }

  componentDidMount() {
    this.getStateWiseData();
    this.getCityData();
  }

  async getStateWiseData() {
    let { stateWiseTabularData } = this.state;
    const data = await getJson('data.json');
    if (data) {
        stateWiseTabularData = (data || {}).data;
      this.setState({ stateWiseTabularData });
    }
  }

  async getCityData() {
    let { cityTabularData } = this.state;
    const data = await getJson('state_district_wise.json');
    if (data) {
      cityTabularData = (data || {}).data;
      this.setState({ cityTabularData });
    }
  }

  render() {
    return <Covid19 {...this.state}></Covid19>;
  }
}

export default Covid19Page;
