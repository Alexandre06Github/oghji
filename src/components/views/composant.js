import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";

function Composant() {
  return (
    <div>
      <div className="blocCalendDomo">
        <Link to="/calendrier" className="linkStyle">
          <button className="boutonCalendrier">
            <FontAwesomeIcon icon={faCalendar} />
            Calendrier
          </button>
        </Link>
        <Link to="/domotique" className="linkStyle">
          <button className="boutonDomotique">
            <FontAwesomeIcon icon={faHouseChimney} />
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
    </div>
  );
}

export default Composant;
