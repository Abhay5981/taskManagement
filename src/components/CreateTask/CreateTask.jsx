import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { LuListTodo } from "react-icons/lu";

function CreateTask() {
    const navigate = useNavigate()
    const handleClose =() =>{
        navigate("/")
    }
  return (
    <div className="create-task-container p-6 rounded-lg shadow-md w-[60%]  z-2  h-[100vh]  m-auto bg-gray-100">
      {/* Header Section */}
      <div className="create-task-heading flex justify-between items-center mb-4  p-2 ">
        <h2 className="text-xl font-bold text-black">Create Task</h2>
        <button
          className="text-gray-600 hover:text-red-600 text-2xl"
          onClick={handleClose} // Close functionality
        >
          <RxCross2 />
        </button>
      </div>
      
      <hr className="border-gray-300 mb-4" />
      <div className="task-form space-y-6">
  {/* Task Title Input */}
  <div className="task-title">
    {/* <label htmlFor="task-title" className="block text-sm font-medium text-gray-700 mb-1">
      Task Title
    </label> */}
    <input
      type="text"
      id="task-title"
      placeholder="Enter Task Title"
      className="border border-gray-300 w-full p-3 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:ring-gray-600 focus:border-gray-600"
    />
  </div>

  {/* Description Input */}
  <div className="description relative">
  <span className="absolute top-3 left-3 text-gray-500">
    <LuListTodo  size={18}  className='text-gray-500'/>
  </span>
    <textarea
      id="task-description"
      placeholder="Enter Task Description"
      className="w-full h-40 border border-gray-300 rounded-lg p-2 pl-10  focus:outline-none focus:ring-0 focus:ring-gray-500 focus:border-gray-500 resize-none "
    >

    </textarea>
  </div>
</div>

<div className="task-add-section grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-100 p-6 rounded-lg ">
  {/* Task Category */}
  <div className="task-category">
    <h5 className="text-lg font-semibold mb-2">Task Category*</h5>
    <div className="flex space-x-4">
      <button className="px-4 py-2  text-black rounded-lg shadow hover:bg-blue-600 hover:text-white">Work</button>
      <button className="px-4 py-2  text-black rounded-lg shadow hover:bg-blue-600 hover:text-white">Personal</button>
    </div>
  </div>

  {/* Due Date */}
  <div className="due-date">
    <h5 className="text-lg font-semibold mb-2">Due On*</h5>
    <input
      type="date"
      className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="DD/MM/YYYY"
    />
  </div>

  {/* Task Status */}
  <div className="task-status">
    <h5 className="text-lg font-semibold mb-2">Task Status*</h5>
    <select
      className="w-full p-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="" disabled selected>
        Select Status
      </option>
      <option value="in-progress">In Progress</option>
      <option value="completed">Completed</option>
      <option value="pending">Pending</option>
    </select>
  </div>
</div>

{/* attachment */}
<div className="attachment bg-gray-100 p-6 rounded-lg  mt-6">
  <h5 className="text-lg font-semibold mb-3">Attachment</h5>
  <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
    {/* File Upload Button */}
    <label
      htmlFor="file-upload"
      className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow cursor-pointer hover:bg-blue-600"
    >
      Upload File
      <input
        type="file"
        id="file-upload"
        className="hidden"
      />
    </label>

    {/* Drag and Drop Section */}
    <div className="w-full md:w-2/3 border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-500 text-center hover:border-blue-500">
      Drag and drop files here or click to upload
    </div>
  </div>
</div>
<hr  className='mt-28'/>
     <div className="relative mt-16">
  <div className="absolute bottom-4 right-4 space-x-4">
    <button className="btn-cancel border-1 p-1 rounded-full  w-20">CANCEL</button>
    <button className="btn-create border-1 p-1 bg-[#7B1984] rounded-full w-20 text-white">CREATE</button>
  </div>
</div>

    </div>
  );
}

export default CreateTask;
