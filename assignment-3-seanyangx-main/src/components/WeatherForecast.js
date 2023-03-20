import React from 'react';
import styled from '@emotion/styled';

const ForecastContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  padding: 20px;
`;

const ForecastCard = styled.div`
  background-color: #f3f3f3;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

const WeatherForecast = ({ forecast }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  return (
    <ForecastContainer>
      {forecast.map((day, index) => (
        <ForecastCard key={index}>
          <h3>{formatDate(day.dt)}</h3>
          <p>
            High: {day.temp.max}°C | Low: {day.temp.min}°C
          </p>
          <p>Probability of precipitation: {day.pop * 100}%</p>
          <p>{day.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt={day.weather[0].description}
          />
        </ForecastCard>
      ))}
    </ForecastContainer>
  );
};

export default WeatherForecast;