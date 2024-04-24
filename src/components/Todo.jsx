import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/todo.css'; 


function Todo(){
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    function handleInputChange(event){
        setTask(event.target.value);
    }

    //adding item

    function clickHandler(){
        if(task.trim() !== '') {
            setTasks([...tasks, { text: task, isChecked: false }]);
            setTask('');
        }
    }

    //Checking item

    function toggleCheck(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index].isChecked = !updatedTasks[index].isChecked;
        setTasks(updatedTasks);
    }

    //deleting item

    function deleteItem(index) {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }

    //Detecting keypress

    let input = document.querySelector('.textBox');
    
    if(input){
        input.addEventListener("keyup", (event) =>{
            if (event.key === "Enter") { clickHandler(); }
        })
    }


    return(
        <>
            <div>
                <h1 className='appName'>Todo App</h1>
            </div>
            <Link to="/"><button type="button" className='homebttn'>Home</button></Link>
            <div className='main'>
                <div className='addingCol'>
                    <input type="text" placeholder='Enter a task' value={task} onChange={handleInputChange} className='textBox'></input>
                    <button type="button" className='addBtn' onClick={clickHandler}>
                        <img src='/images/addIcon.png' alt="add Icon" className='searchIcon'/>
                    </button>
                </div>
                {tasks.map((task, index) => (
                        <div key={index} className='todoList'>
                            <input type='checkbox' checked={task.isChecked} onChange={() => toggleCheck(index)} className='check'/>
                            <p style={{ textDecoration : task.isChecked? "line-through" : null }}>{task.text}</p>
                            <button type='button' onClick={() => deleteItem(index)}>
                                <img src='/images/deleteIcon.png' alt="add Icon" className='searchIcon'/>
                            </button>
                        </div>
                ))}
            </div>
            
            <footer><p className="footer">made with ❤️ by <a href="https://github.com/Abayvm">abay</a></p></footer>
        </>
    )
}

export default Todo;