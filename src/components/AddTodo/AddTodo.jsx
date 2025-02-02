import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
// import { IoIosArrowDown } from 'react-icons/io';
import { IoAdd } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TbArrowBack } from "react-icons/tb";
import { useSelector } from 'react-redux';
import { RiExpandUpDownFill } from 'react-icons/ri';

function AddTodo() {
const [showTaskHeader, setShowTaskHeader] = useState(false)
const [showTaskStatus, setShowTaskStatus] = useState(false)
const [showWorkStatus , setShowWorkStatus] = useState(false)
    const handleAddTask = () =>{
        // console.log("Task Added");
        setShowTaskHeader(true);

    }

    const handleTaskStatus = ()=>{
        setShowTaskStatus(true)
    }
    const handleWorkStatus = ()=>{
        setShowWorkStatus(true)
    }


    const tasks = useSelector((state)=>state.tasks.tasks);
    const pendingTasks = tasks.filter(task=>task.taskStatus === "pending")
  return (
  <>
    <div className="add-todo-container  rounded-2xl shadow-lg m-10 bg-gray-100">
    {/* Header Section */}

    <div className="task-header flex justify-between items-center  p-4 ">
  {[
    { label: "Task Name" },
    { 
      label: "Due On", 
      icon: <RiExpandUpDownFill className="text-xl text-gray-500" /> 
    },
    { label: "Task Status" },
    { label: "Task Category" },
  ].map((item, index) => (
    <h2 key={index} className="text-lg font-semibold flex items-center space-x-2">
      <span>{item.label}</span>
      {item.icon && <span>{item.icon}</span>}
    </h2>
  ))}
</div>

    <div className="todo-header bg-[#FAC3FF] text-black py-2 rounded-t-2xl flex justify-between items-center px-4">
  {/* Heading */}
  <h2 className="text-xl font-bold">Todo</h2>
  
  {/* Icon */}
  <FaAngleUp className="text-xl" />
</div>

<div className="add-task flex items-center m-4" onClick={handleAddTask}>
  {/* Icon */}
  <IoAdd className="text-[#7B1984] text-2xl font-bold" />
  {/* Text */}
  <h2 className="text-lg font-semibold text-black"
  
  >ADD TASK</h2>
</div>
<hr />

{/* task header */}

{showTaskHeader && (

<div className="task-header flex  p-4   justify-between ">
          {/* Task Title */}
 <div className="task-title  p-4 rounded-lg ">
  {/* Task Title */}
 <h2 className="text-xl text-black mb-2">Task Title</h2>

  {/* Buttons */}
  <div className="flex space-x-4">
    <button className="px-4 py-2 bg-[#7B1984] text-white font-semibold rounded-full shadow-md w-28 h-10 justify-center flex items-center gap-2">
      ADD<span><TbArrowBack  className='w-6 h-8'/></span>
    </button>
    <button className="px-4 py-2  text-black font-semibold rounded-full  w-28 h-10 shadow-md ">
      CANCEL
    </button>
  </div>


</div>
  {/* Add Date Button */}
          <button className=" flex items-center  justify-center px-1 py-2 text-black rounded-lg border-1 w-28 h-10 mr-28 gap-1 mt-4">
           <span><FaRegCalendarAlt />
           </span>  Add Date
          </button>

          {/* Dropdown Buttons */}
         
            {/* Dropdown 1 */}
            <div className="staus">
            <button className="flex items-center px-4 py-2  text-black hover:text-gray-300"
            onClick={handleTaskStatus}>
            <IoIosAddCircleOutline  className='mr-24 w-8 h-8'/>

            </button>
            {showTaskStatus && (
                <div className="task-status bg-white rounded-md text-black shadow-sm p-2 cursor-pointer ml-4">
                    <ul>TO-DO</ul>
                    <ul>IN-PROGRESS</ul>
                    <ul>COMPLETED</ul>
                </div>
            )}
            </div>
            {/* Dropdown 2 */}
              <div className="work">
            <button className="flex items-center px-4 py-2   text-black hover:text-gray-300" 
            onClick={handleWorkStatus}>
            <IoIosAddCircleOutline className='mr-12 w-8 h-8'/>
            </button>
            {showWorkStatus && (
                <div className="task-status bg-white rounded-md text-black shadow-sm p-2 ml-4">
                    <ul>WORK</ul>
                    <ul>PERSONAL</ul>
                    
                </div>
            )}
          </div>
        </div>
      )}
      <hr />
    {/* Content Area   todo ll list this area */}   
    <div className="p-4 h-100">
    {pendingTasks.map(task => (
        <div key={task.id}>
          <h3>{task.taskTitle}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>

    
  </div>




 </>
  )
}

export default AddTodo