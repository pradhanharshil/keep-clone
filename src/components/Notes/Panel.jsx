import colors from "../../constants/colors";
import ColorIcon from "./ColorIcon";
import Icon from "./Icon";
import pin from "../../assets/icons/pin.png";
import unpin from "../../assets/icons/unpin.png";
import trash from "../../assets/icons/trash.png";
import edit from "../../assets/icons/edit.png";
import { observer } from "mobx-react-lite";

function Panel({ setColor, pinNote, deleteNote, isPinned, editNote }) {
    return (
        <div className="flex flex-row m-1">
            <Icon src={isPinned ? unpin : pin} clickHandler={pinNote} height="5" width="5" />
            <Icon src={edit} clickHandler={editNote} height="5" width="5" />
            <Icon src={trash} clickHandler={deleteNote} height="5" width="5" />
            {Object.values(colors).map(key => <ColorIcon key={key} height="5" width="5" color={key} handler={setColor} />)}
        </div>
    );
}

export default observer(Panel);