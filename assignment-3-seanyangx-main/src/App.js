import React, { useState } from 'react';
import TextInput from './components/TextInput';
import WeatherForecast from './components/WeatherForecast';

function App() {
    const [forecast, setForecast] = useState(null);
  
    const renderForecast = () => {
      if (!forecast) {
        return null;
      }
  
      return <WeatherForecast forecast={forecast.list} />;
    };
  
    return (
      <div className="App">
        <main>
          <TextInput setForecast={setForecast} />
          {renderForecast()}
        </main>
      </div>
    );
  }

export default App;
