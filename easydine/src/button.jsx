import { Link } from "react-router-dom";


function Button(){
    return(
        <Link to="/book">
                <button className="button">Book a table!</button>
        </Link>
        
    );
}
export default Button