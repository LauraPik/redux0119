


export const filterTodos =(todos, status) =>{
    switch(status){
        case "AKTYVIOS":
            return todos.filter( todo => todo.isComplete === false )
        case "PABAIGTOS":
            return todos.filter(todo => todo.isComplete === true)
        default: return todos;
    }
}