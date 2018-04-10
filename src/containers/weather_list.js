import React, { Component } from 'react';
import { connect } from 'react-redux';
import LineChart from '../components/line_chart';

class WeatherList extends Component {

  renderWeather(cityData) {
    const city = cityData.city.name;
    const temperature = cityData.list.map(item => item.main.temp - 273);
    const pressure = cityData.list.map(item => item.main.pressure);
    const humidity = cityData.list.map(item => item.main.humidity);

    return (
      <tr key={ city }>
        <td>{ city }</td>
        <td><LineChart data={temperature} color="orange" unit="˚C" /></td>
        <td><LineChart data={pressure} color="green" unit="hPa" /></td>
        <td><LineChart data={humidity} color="black" unit="%" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
