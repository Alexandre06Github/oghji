// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import "./style/styleAlice";
import Button from "../button";
import { FaBath } from "react-icons/fa";
import IconWarning from "./icons/warning";
import IconSettings from "./icons/settings";
import IconLogOff from "./icons/stop";

function Menu() {
  //Pour redirection
  // const navigate = useNavigate();

  //Return de fin
  return (
    <nav>
      <div className="sideBar">
        <div className="logo">
          <img
            class="imageLogo"
            src="https://oghji.com/wp-content/uploads/2020/08/oghji-logo-2048x781.png"
          />
        </div>
        <div className="settings">
          <Button
            name="Régler"
            icon={<IconSettings />}
            onClick={() => console.log("Salon button clicked")}
          />
        </div>
        <div className="warnings">
          <Button
            name="Notifications"
            icon={<IconWarning />}
            onClick={() => console.log("Salon button clicked")}
          />
        </div>
        <div className="breaker">
          <Button
            name="Arrêter"
            icon={<IconLogOff />}
            onClick={() => console.log("Salon button clicked")}
          />
        </div>
      </div>
    </nav>
  );
}
export default Menu;
