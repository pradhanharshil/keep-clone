import { observer } from "mobx-react-lite";

function Icon({ src, clickHandler }) {
    return (
        <div
            className="rounded-full h-5 w-5 cursor-pointer m-1"
            style={{
                background: src,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat"
            }}
            onClick={() => clickHandler(src)} />
    )
}

export default observer(Icon);