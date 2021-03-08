import keep from "../assets/icons/keep.png";
import search from "../assets/icons/search.webp";
import ColorIcon from "./Notes/ColorIcon";

function Navbar() {
    return (
        <nav className="flex flex-row h-16 w-full justify-between items-center shadow-md">
            <div className="flex flex-row items-center justify-around p-1 w-full">
                <div className="flex flex-row flex-shrink-0 items-center p-1 h-full">
                    <img className="h-12 w-12" src={keep} alt="Keep" />
                    <p className="text-2xl m-0">Keep</p>
                </div>
                <div className="flex flex-row bg-gray-100 rounded-md text-center items-center mr-96 ml-96">
                    <input
                        className="h-12 p-4 w-96 bg-gray-100 rounded focus:border-none focus:outline-none"
                        type="text"
                        placeholder="Search" />
                    <img
                        className="cursor-pointer h-6 w-6 m-1 mr-2"
                        src={search}
                        alt="Search" />
                </div>
                <div className="nav-user">
                    <ColorIcon
                        color="darkred"
                        height="9"
                        width="9"
                        handler={() => {}}
                        children="H" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;