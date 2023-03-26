import Composant from "./composant";
import "../assets/style/styleAlexandre.css"
import Menu from "../assets/menu";
import Button from "../button";
import Gauge from "../Gauge";


import IconTelevision from "../assets/icons/tv";
import IconBxFridge from "../assets/icons/kitchen";
import IconBath from "../assets/icons/bath";
import IconBedOutline from "../assets/icons/room";
import IconAddFill from "../assets/icons/add";

export default function Home() {

  return (
  
    <div>
      
      <Menu />
      <Button/>

      <div className="room">
      <Button
            name="Salon"
            icon={<IconTelevision />}
            onClick={() => console.log("Salon button clicked")}
          />
      <Button
            name="Cuisine"
            icon={<IconBxFridge />}
            onClick={() => console.log("Salon button clicked")}
          />
      
      <Button
            name="Bathroom"
            icon={<IconBath />}
            onClick={() => console.log("Salon button clicked")}
          />
    
      <Button
            name="Chambre"
            icon={<IconBedOutline />}
            onClick={() => console.log("Salon button clicked")}
          />
      
      </div>
      <div className="add"><Button
            name="Ajouter"
            icon={<IconAddFill />}
            onClick={() => console.log("Salon button clicked")}
          /></div>
      <Composant />
      <Gauge/>
    </div>
  );
}
