function ColorIcon({color, setColor}) {
    return (
        <div 
            className="rounded-full border h-5 w-5 cursor-pointer m-1" 
            style={{backgroundColor: color}} 
            onClick={() => setColor(color)}/>
    )
}

export default ColorIcon
