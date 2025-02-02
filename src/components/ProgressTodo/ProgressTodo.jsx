import React from 'react'
import { FaAngleUp } from 'react-icons/fa'

function ProgressTodo() {
  return (
    <div>
        
        <div className="progress-todo  rounded-2xl shadow-lg m-10 bg-gray-200">
            <div className="progress-header bg-[#85D9F1] text-black py-2 rounded-t-2xl flex justify-between items-center px-4">
                <h2 className='text-xl font-bold'>In-Progress</h2>
                <FaAngleUp className="text-xl" />
            </div>
            <div className="p-4 h-100">
              {/* Placeholder for additional content */}
              <p className="text-gray-600 text-center">Add your tasks here...</p>
            </div>
        
        </div>
    </div>
  )
}

export default ProgressTodo;