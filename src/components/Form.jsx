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
                className="p-2 bg-yellow-400"
                type="submit"
                children="submit" />
        </form>
    )
}

export default Form;