// Core
import {useSelector} from 'react-redux';
// Components
import TodoItem from './TodoItem';
// Styles
import '../styles/index.css';

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos);
    return (
        <ul className={'flex flex-col gap-[20px] mt-[35px]'}>
            {todos.map(todo =>
                <TodoItem
                    key={todo.id}
                    {...todo}
                />
            )}
        </ul>)
}

export default TodoList;