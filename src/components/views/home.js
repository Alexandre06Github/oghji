import Composant from "./composant";
import "../assets/style/styleAlexandre.css"
import Menu from "../assets/menu";
import Button from "../button";
import Gauge from "../Gauge";

export default function Home() {
  return (
    <div>
      <Menu />
      <Button/>
      <Composant />
      <Gauge/>
    </div>
  );
}
