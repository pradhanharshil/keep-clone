import colors from "../../constants/colors";
import ColorIcon from "./ColorIcon";
import Icon from "./Icon";
import pin from "../../assets/icons/pin.png";
import { observer } from "mobx-react-lite";

function Panel({ setColor }) {
    return (
        <div className="flex flex-row m-1">
            <Icon icon={true} src={pin} clickHandler={() => setColor()} />
            {Object.values(colors).map(key => <ColorIcon key={key} color={key} setColor={setColor} />)}
        </div>
    )
}

export default observer(Panel);