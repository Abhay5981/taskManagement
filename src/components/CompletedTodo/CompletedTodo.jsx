import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

function CompletedTodo() {
  return (
    <div>
        
<div className="completed-todo rounded-2xl shadow-lg m-10 bg-gray-200 w-50 h-100 justify-center">
<div className="progress-header bg-[#CEFFCC] text-black py-2 rounded-t-2xl flex justify-between items-center px-4">
        <h2 className='text-xl font-bold'>Completed</h2>
        <FaAngleDown className="text-xl" />
    </div>
    <div className="p-4 h-100">
      {/* Placeholder for additional content */}
      <p className="text-gray-600 text-center">Add your tasks here...</p>
    </div>

</div>
    </div>
  )
}

export default CompletedTodo