// Engine
import {addTodo} from '../../engine/store/slice';
// Core
import {useDispatch} from 'react-redux';
import {useState} from 'react';
// Styles
import '../styles/index.css';
// Components
import Header from '../components/Header';
import InputField from '../components/InputField';
import TodoList from '../components/TodoList';

const App = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(addTodo({text}))
        setText('');
    };

    return (
        <>
            <Header/>
            <div className={'flex items-center flex-col mt-[40px]'}>
                <InputField
                    text={text}
                    setText={setText}
                    addTodo={addTask}
                />
                <TodoList/>
            </div>
        </>
    )
}

export default App;