import { useRef } from "react";

function Form({ onSubmit }) {
    const inputRef = useRef();
    const textRef = useRef();
    const btnRef = useRef();
    const focusHandler = () => {
        textRef.current.style.display = "block";
        btnRef.current.style.display = "block";
    }
    const blurHandler = () => {
        textRef.current.style.display = "none";
        btnRef.current.style.display = "none";
    }
    return (
        <form className="flex flex-col items-center ml-auto mr-auto mt-5 mb-5 w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12" onSubmit={onSubmit}>
            <input
                onFocus={focusHandler}
                ref={inputRef}
                className="p-2 border outline-none w-full rounded font-bold text-black focus:border-yellow-500"
                placeholder="Take a note..." />
            <textarea
                ref={textRef}
                onBlur={blurHandler}
                className="p-2 border hidden outline-none w-full focus:border-yellow-500"
                placeholder="info" />
            <button
                ref={btnRef}
                className="bg-yellow-400 hidden text-white rounded-full mt-1 mb-1 text-2xl bold h-8 w-8 text-center"
                style={{ backgroundColor: "#fbbc04" }}
                type="submit"
                children="+" />
        </form>
    )
}

export default Form;