import keep from "../assets/icons/keep.png";
import ColorIcon from "./Notes/ColorIcon";

function Navbar({ onChange }) {
    return (
        <nav className="flex flex-row h-16 w-full items-center shadow-md">
            <div className="flex flex-row items-center justify-between h-4/5 w-full mr-2 ml-2 md:mr-4 md:ml-4">
                <div className="flex flex-row justify-center items-center">
                    <img className="h-10 w-10 md:h-12 md:w-12" src={keep} alt="Keep" />
                    <p className="text-xl md:text-2xl">Keep</p>
                </div>
                <div>
                    <input
                        className="h-11 p-2 w-48 bg-gray-100 rounded focus:border-none focus:outline-none md:w-80 lg:w-88"
                        type="text"
                        placeholder="Search"
                        onChange={onChange} />
                </div>
                <div className="flex flex-row items-center">
                    <ColorIcon
                        color="darkred"
                        height="8"
                        width="8"
                        children="H" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;