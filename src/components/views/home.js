import Composant from "./composant";
import "../assets/style/styleAlexandre.css"
import Menu from "../assets/menu";
import Gauge from "../Gauge";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Menu />
      <Composant />
      <Gauge/>
    </div>
  );
}
