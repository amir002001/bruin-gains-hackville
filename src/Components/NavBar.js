import "../styles/navbar.css"
import { FaHome } from "react-icons/fa"
import { IoChatbubbles, IoCreate } from "react-icons/io5"
import { Link } from "react-router-dom"
import {GiMagnifyingGlass, GiThreeFriends} from "react-icons/gi"

const NavBar = () => {
    return (
        <div className="nav">
            <Link to={"/"}>
                <FaHome size={30} />
            </Link>
            <Link to={"/FindFriendsView"}>
                <GiMagnifyingGlass size={30} />
            </Link>
            <Link to={"/FriendsView"}>
                <GiThreeFriends size={30} />
            </Link>
            {/* <Link to={"/ChatView"}>
                <IoChatbubbles size={30} />
            </Link> */}
        </div>
    )
}

export default NavBar