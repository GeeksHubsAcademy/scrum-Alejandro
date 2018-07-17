import React from 'react';
import './Lista.css';
import Task from './Task';

class Lista extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            addTaskName: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({addTaskName: e.target.value});
    }

    handleRemoveList = () => {
        this.props.onHandleRemoveList(this.props.data.listId);
    }

    handleAddNewTask=(e)=>{
        if (e.keyCode===13||e.type==='click') {
            this.props.onHandleNewTask(this.state.addTaskName, this.props.data.listID);
            this.setState({addTaskName:''});
        }
    }

    render() {
        let listadoTareas;
        if (this.props.data.tareas === 0) {
            listadoTareas = <h6>No hay tareas preparadas</h6>;
        } else {
            listadoTareas = this.props.data.tareas.map(tarea =>
                <Task data={tarea} 
                onHandleMarkAsCompleted={this.props.onHandleMarkAsCompleted} 
                key={tarea.taskId} />
            )
        }

        return (
            <div className='lista' id={this.props.key}>

                <div className="listHeader">
                    <h4>{this.props.data.name}
                        <button onClick={this.handleRemoveList}>X</button>
                    </h4>
                </div>
                <div className="agregarTarea">
                    <input type="text" value={this.state.addTaskName} onChange={this.handleInputChange} onKeyUp={this.handleAddNewTask} />
                    <button onClick={this.handleAddNewTask}>Agregar Tarea</button>
                    <p>Tareas:</p>
                </div>
                {listadoTareas}
            </div>

        )
    }
}


export default Lista;
