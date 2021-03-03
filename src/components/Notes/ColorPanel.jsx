import colors from "../../constants/colors";
import ColorIcon from "./ColorIcon";

function ColorPanel({setColor}) {
    return (
        <div className="flex flex-row m-1">
            {Object.values(colors).map(key => <ColorIcon key={key} color={key} setColor={(c) => setColor(c)}/>)}
        </div>
    )
}

export default ColorPanel;