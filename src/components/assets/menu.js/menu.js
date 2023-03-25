import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Menu() {
    //Pour redirection
    const navigate = useNavigate();

 //Return de fin
 return (
    <div className="sideBar">
      <nav>
        <div className="navBar">
        <div className="logo">
           <img class ="imageLogo" src="https://oghji.com/wp-content/uploads/2020/08/oghji-logo-2048x781.png"/>
          </div>
          <div className="">
            <Link to="/" className="links"> 
            </Link>
          </div>
          </div>
      </nav>
    </div>
  );
}
export default Menu;