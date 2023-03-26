import Composant from "./composant";
import "../assets/style/styleAlexandre.css"
import Menu from "../assets/menu";
import Button from "../button";

export default function Home() {
  return (
    <div>
      <Menu />
      <Button/>
      <Composant />
    </div>
  );
}
