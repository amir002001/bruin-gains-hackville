import "../styles/navbar.css"
import { FaHome } from "react-icons/fa"
import { IoChatbubbles, IoCreate } from "react-icons/io5"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="nav">
            <Link to={"/Login"}>
                <FaHome size={30} />
            </Link>
            <Link to={"/ChatView"}>
                <IoChatbubbles size={30}/>
            </Link>
            <Link to={"/ChatView"}>
                <IoCreate size={30}/>
            </Link>
        </div>
    )
}

export default NavBar