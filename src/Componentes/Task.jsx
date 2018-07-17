import React from 'react';

class Task extends React.Component {
    render() {
        return (
            <div className={`taskItem ${this.props.data.completed ? 'completed' : ''}`} id={this.props.data.taskId}>
                <div className="Tarea">
                    <div>
                        <button>X</button>
                    
                        <input
                            type="checkbox"
                            onChange={(e) => this.props.onHandleMarkAsCompleted(this.props.data.taskId, this.props.data.listID, e.target.checked)}
                            checked={this.props.data.completed} />
                    
                        {this.props.data.task}
                    </div>
                </div>
            </div>
        );
    }
}


export default Task;