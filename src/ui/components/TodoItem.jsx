// Engine
import {removeTodo, toggleIsCompleted} from '../../engine/store/slice';
// Core
import {useDispatch, useSelector} from 'react-redux';
// Styles
import '../styles/index.css';
// Components
import {Checkbox} from '@material-tailwind/react';

const TodoItem = ({
                      id,
                      text,
                      isCompleted,
                  }) => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);
    return (
        <li className={`min-w-[300px] flex justify-between items-center gap-[15px] px-[5px] pb-3 ${todos.length > 1 ? 'border-grey-300 border-b-[1px]' : ''} `}>
            <Checkbox
                className={'w-[18px] h-[18px]'}
                defaultChecked={isCompleted}
                onChange={() => dispatch(toggleIsCompleted({id}))}
            />
            <span className={`${isCompleted ? 'line-through' : ''}`}>{text}</span>
            <span className={'w-[18px] cursor-pointer'} onClick={() => dispatch(removeTodo({id}))}>❌</span>
        </li>
    )
}

export default TodoItem;