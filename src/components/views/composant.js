import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureFull } from "@fortawesome/free-solid-svg-icons";
import "../assets/style/styleAlexandre.css";

function Composant() {
  return (
    <div className="allBlock">

      <div className="blocCalendDomo">

        <Link to="/calendrier" className="linkStyle">
          <button className="boutonCalendrier">
            <FontAwesomeIcon icon={faCalendar} />
            <br></br>
            Calendrier
          </button>
        </Link>

        <Link to="/domotique" className="linkStyle">
          <button className="boutonDomotique">
            <FontAwesomeIcon icon={faHouseChimney} />
            <br></br>
            Domotique
          </button>
        </Link>
      </div>

      <div className="blocTarifConso">
        
        <Link to="/tarifHeure" className="linkStyle">
          <button className="boutonTarifHeure">
            <FontAwesomeIcon icon={faClock} />
            <br></br>
            Heure HP
          </button>
        </Link>
        <Link to="/conso" className="linkStyle">
          <button className="boutonConso">
            <FontAwesomeIcon icon={faChartColumn} />
            <br></br>
            Conso
          </button>
        </Link>
      </div>
      <div className="containerTemperature">
        <div id="iconeTemperature1">
          <h2 id="titleTemperature">Température</h2>
          <FontAwesomeIcon icon={faTemperatureFull} style fontSize={"4em"} />
          <span style={{ fontSize: "35px" }}>
            <span> 21°C Salon </span>
          </span>
        </div>

        <div id="iconeTemperature2">
          <FontAwesomeIcon icon={faTemperatureFull} style fontSize={"4em"} />
          <span style={{ fontSize: "35px" }}>
            <span> 19°C Cuisine</span>
          </span>
        </div>

        <div id="iconeTemperature3">
          <FontAwesomeIcon icon={faTemperatureFull} style fontSize={"4em"} />
          <span style={{ fontSize: "35px" }}>
            <span> 18°C Chambre 1</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Composant;
