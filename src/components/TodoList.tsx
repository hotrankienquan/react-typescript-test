import { Draggable, Droppable } from "react-beautiful-dnd"
import { ITodo } from "../App"
import SingleTodo from "./SingleTodo"


export interface ITodosList {
    todos: ITodo[],
    handleUpdateTodosAfterEdit:(todo:ITodo,idChange:number)=>void,
    handleToggleTick: (id:number) => void,
    handleDeleteTodo:(id:number) => void,
}
const TodosList = ({todos,handleToggleTick, handleDeleteTodo, handleUpdateTodosAfterEdit}:ITodosList) => {
    return (
        <div className="container">
            <Droppable droppableId="TodosList">
            {(provided,snapshot)=>(
                <div
                className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
                >
                {todos?.map((item,index) => {
                    return (
                        <Draggable draggableId={item.id.toString()} key={item.id} index={index}>
                                {(provided)=>(
                                    <div 
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                    >
                                            <SingleTodo 
                                                index={item?.id}
                                                todo={item} 
                                                handleToggleTick={handleToggleTick}
                                                handleDeleteTodo={handleDeleteTodo}
                                                handleUpdateTodosAfterEdit={handleUpdateTodosAfterEdit}
                                            />
                                        </div>
                                )}
                    
                    </Draggable>

                    )
                })}
                </div>
            )}
            </Droppable>
            {/* drop two */}

        </div>
    )
}

export default TodosList