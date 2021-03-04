import colors from "../../constants/colors";
import ColorIcon from "./ColorIcon";
import Icon from "./Icon";
import pin from "../../assets/icons/pin.png";
import trash from "../../assets/icons/trash.webp";
import { observer } from "mobx-react-lite";

function Panel({ setColor, pinNote, deleteNote }) {
    return (
        <div className="flex flex-row m-1">
            <Icon src={pin} clickHandler={pinNote} />
            <Icon src={trash} clickHandler={deleteNote} />
            {Object.values(colors).map(key => <ColorIcon key={key} color={key} setColor={setColor} />)}
        </div>
    );
}

export default observer(Panel);