import React, { useState } from 'react';
import styled from '@emotion/styled';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const StyledInput = styled.input`
  width: 60%;
  font-size: 18px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  font-size: 18px;
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #1976d2;
  color: white;
  cursor: pointer;
`;

const API_KEY = '43a2629eda6d9d3556eb0166ba0f05da';

const TextInput = ({ setForecast }) => {
    const [inputValue, setInputValue] = useState('');
  
    const getGeocodingData = async (city, state, country) => {
        try {
          const response = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=5&appid=${API_KEY}`
          );
          const data = await response.json();
      
          if (data.length > 0) {
            const matchingLocation = data.find(
              (location) =>
                location.name.toLowerCase() === city.toLowerCase() &&
                location.state.toLowerCase() === state.toLowerCase() &&
                location.country.toLowerCase() === country.toLowerCase()
            );
      
            if (matchingLocation) {
                const { lat, lon } = matchingLocation;
                const weatherData = await getWeatherData(lat, lon);
                setForecast(weatherData);
            } else {
              console.error('No matching location found');
            }
          } else {
            console.error('No data found');
          }
        } catch (error) {
          console.error('Error fetching geocoding data:', error);
        }
      };

    const getWeatherData = async (lat, lon) => {
        try {
            const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=7&units=metric&appid=${API_KEY}`
            );
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };
  
    const handleSubmit = () => {
      const [city, state, country] = inputValue.split(',');
      getGeocodingData(city, state, country);
    };

  return (
    <InputContainer>
      <StyledInput
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter location"
      />
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </InputContainer>
  );
};

export default TextInput;