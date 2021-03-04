function Form({ onSubmit }) {
    return (
        <form className="flex flex-col items-center ml-auto mr-auto mt-5 mb-5 w-96" onSubmit={onSubmit}>
            <input
                className="p-2 border w-full rounded font-bold text-black"
                placeholder="Take a note..." />
            <textarea 
                className="p-2 border w-full"
                placeholder="info"/>
            <button 
                className="bg-yellow-400 text-white rounded-full mt-1 mb-1 text-2xl bold h-8 w-8 text-center"
                style={{backgroundColor: "#fbbc04"}}
                type="submit"
                children="+" />
        </form>
    )
}

export default Form;