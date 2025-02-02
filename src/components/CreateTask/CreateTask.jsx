import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../../redux/slices/taskSlice'; // Import action
import JoditEditor from 'jodit-react';
import { RxCross2 } from "react-icons/rx";

function CreateTask() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [taskCategory, setTaskCategory] = useState("Work");
  const [dueDate, setDueDate] = useState("");
  const [taskStatus, setTaskStatus] = useState("pending");
  const [file, setFile] = useState(null);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(), // Unique ID
      taskTitle,
      description: content,
      taskCategory,
      dueDate,
      taskStatus,
      attachment: file ? URL.createObjectURL(file) : null,
    };

    // Dispatch the task to Redux
    dispatch(addTask(newTask));

    // Navigate to the Add Todo page after creation
    navigate("/");
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";  // Prevent scrolling
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleEditorChange = useCallback((newContent) => {
    setContent(newContent);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="create-task-container p-6 bg-gray-100 rounded-lg shadow-lg w-[80%] max-w-2xl relative max-h-[90vh] h-full overflow-y-auto gap-2">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-black">Create Task</h2>
          <button className="text-gray-600 hover:text-red-600 text-2xl" onClick={handleClose}>
            <RxCross2 />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Task Title Input */}
          <input
            type="text"
            value={taskTitle}
            placeholder="Enter Task Title"
            onChange={(e) => setTaskTitle(e.target.value)}
            className="border border-gray-300 w-full p-3 rounded-lg shadow-sm"
          />

          {/* Description Input */}
          <JoditEditor
            ref={editor}
            value={content}
            config={{ placeholder: "Description" }}
            onChange={handleEditorChange} 
            className='mt-8'
          />

          {/* Task Category */}
          <div className="flex space-x-4 mt-4 justify-between">
            {["Work", "Personal"].map((category) => (
              <button
                key={category}
                type="button"
                className={`p-2 rounded-full w-24 h-12 mt-4 ${taskCategory === category ? "bg-blue-600 text-white" : "text-black border"}`}
                onClick={() => setTaskCategory(category)}
              >
                {category}
              </button>
            ))}
          

          {/* Due Date */}
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-50 p-2 border mt-4 rounded-lg"
            required
          />

          {/* Task Status */}
          <select
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
            className="w-50 p-2 border mt-4 rounded-lg"
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
</div>
          <input type="file" className="w-full mt-8 bg-gray-200  p-4 rounded-full underline" onChange={(e) => setFile(e.target.files[0])} />
        
          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 mt-16">
            <button className="border px-4 py-2 rounded-lg" type="button" onClick={handleClose}>
              CANCEL
            </button>
            <button className="px-4 py-2 bg-[#7B1984] text-white rounded-lg" type="submit">
              CREATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTask;
