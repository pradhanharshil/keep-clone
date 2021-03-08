import { observer } from "mobx-react-lite";

function ColorIcon({ color, handler, height, width, children }) {
    return (
        <div
            className={`rounded-full border h-${height} w-${width} cursor-pointer m-1`}
            style={{ 
                backgroundColor: color,
                color: "white",
                textAlign: "center",
                paddingTop: "0.3rem"
            }}
            onClick={() => handler(color)}
            children={children} />
    )
}

export default observer(ColorIcon);
