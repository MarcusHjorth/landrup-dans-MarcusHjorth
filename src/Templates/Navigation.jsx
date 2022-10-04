import { Link } from "react-router-dom"
import { ReactComponent as HomeIcon } from "../Assets/SVG/HomeIcon.svg";
import { ReactComponent as SearchIcon } from "../Assets/SVG/SearchIcon.svg";
import { ReactComponent as CalendarIcon } from "../Assets/SVG/CalendarIcon.svg";

const Navigation = () => {
    return ( 
        <nav className="fixed bottom-0 w-full h-[66px] bg-Secondary px-[20px] flex flex-row items-center justify-between ">

            <Link to="/Activities">
                <HomeIcon />
            </Link>

            <Link to="/Search">
                <SearchIcon />
            </Link>

            <Link to="/Calender">
                <CalendarIcon />
            </Link>
        </nav>
     );
}
 
export default Navigation;