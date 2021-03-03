import keep from "../assets/icons/keep.png";
import search from "../assets/icons/search.jpg";

function Navbar() {
    return (
        <nav className="flex flex-row h-18 justify-between items-center shadow-md">
            <div className="flex flex-rowh-10 items-center">
                <div className="nav-drawer w-2 border-black"></div>
                <div className="flex flex-row items-center m-2">
                    <img className="h-12 w-12" src={keep} alt="Keep" />
                    <p className="text-2xl">Keep</p>
                </div>
                <div className="flex flex-row items-center mr-10 ml-10">
                    <input 
                        className="h-12 p-4 w-96 bg-gray-100 rounded"
                        type="text"
                        placeholder="Search" />
                    <img 
                        className="h-10 w-10 m-1"
                        src={search}
                        alt="Search"/>
                </div>
                <div className="nav-options"></div>
                <div className="nav-user"></div>
            </div>
        </nav>
    );
}

export default Navbar;