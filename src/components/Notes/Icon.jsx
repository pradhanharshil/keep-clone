import { observer } from "mobx-react-lite";

function Icon({ src, clickHandler, height, width }) {
    return (
        <div
            className={`rounded-full h-${height} w-${width} cursor-pointer m-1`}
            style={{
                background: `url(${src})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat"
            }}
            onClick={() => clickHandler()} />
    )
}

export default observer(Icon);