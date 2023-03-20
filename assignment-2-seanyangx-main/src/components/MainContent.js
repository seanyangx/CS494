import React from "react";
import { Route, Routes } from "react-router-dom";
import Person from "./PersonDetails";
import Planet from "./PlanetDetails";
import Film from "./FilmDetails";

const MainContent = ({ match, dataByCategory, setSelectedCategory }) => {
    const { category, id } = match.params;
    setSelectedCategory(category);
  
    const data = dataByCategory[category] && dataByCategory[category][id];
  
    if (!data) {
      return <div>Item not found</div>;
    }
  
    let contentComponent;
    Routes (category) {
      case "people":
        contentComponent = <Person data={data} />;
        break;
      case "planets":
        contentComponent = <Planet data={data} />;
        break;
      case "films":
        contentComponent = <Film data={data} />;
        break;
      default:
        return <div>Invalid category</div>;
    }
  
    return (
      <div className="main-content">
        <h2>{data.name || data.title}</h2>
        {contentComponent}
      </div>
    );
  };
  
  export default MainContent;