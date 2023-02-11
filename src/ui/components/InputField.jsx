// Styles
import '../styles/index.css';

const InputField = ({
                        text,
                        setText,
                        addTodo
                    }) => {
    return (
        <label className={'flex flex-row'}>
            <input
                type="text"
                placeholder={'Write your task'}
                className={'lg:w-[250px]  border-[1px] border-b-gray-300 outline-none pl-3'}
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <button
                onClick={addTodo}
                disabled={`${text.length > 0 ? '' : 'disabled'}`}
                className={'w-[65px] h-[30px] rounded-[5px] text-[14px] tracking-wide text-white font-bold bg-red-500 ml-2 disabled:opacity-[0.5] transition-all'}>
                Add Task
            </button>
        </label>
    )
}

export default InputField;