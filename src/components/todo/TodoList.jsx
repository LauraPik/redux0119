import TodoItem from "./TodoItem"
import { ListGroup } from "react-bootstrap"
import { connect } from "react-redux"
import { markDone, deleteTodo } from "../../store/actions/TodoActions"
import { filterTodos } from "../../utilities/filterTodos"

const TodoList = (props)=>{
    let {todos, markDone, status, deleteTodo } = props;
    if(todos.lenght ===0) return <p>Nera ivestu</p>
    let filterTodoLis = filterTodos(todos, status)
    console.log(props)
    
    return(
        <div className="container">
            <ListGroup>
                {filterTodoLis.map(todo=>
                <TodoItem
                todo = {todo}
                key ={todo.id}
                mark = {markDone}
                remove={deleteTodo}
                />

                )}

            </ListGroup>
        </div>
    )

}

const mapDispatchToProps = state =>({
    todos: state.todos.todos,
    status: state.todos.filter
})

export default connect(mapDispatchToProps, {markDone, deleteTodo}) (TodoList)