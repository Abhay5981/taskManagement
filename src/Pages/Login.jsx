import React from 'react'
import { logOut, signInWithGoogle } from '../components/firebase';
import { BiTask } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

function Login() {

const handleGoogleSignIn =async() =>{
    try {
        const user = await signInWithGoogle()
        console.log("User Info", user);
        alert(`Welcome ${user.displayName}`)
        
    } catch (error) {
        console.error('Sign-in Error', error)
    }
}

const handleLogOut = async()=>{
    await logOut()
    alert("You have logged out successfully!");
}

  return (
    
        <div className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-lg rounded-lg p-8 ">
        <h1 className="text-2xl font-bold text-center mb-6 text-[#7B1984] flex items-center justify-center">
  <span className="mr-2">
    <BiTask />
  </span>
  TaskBuddy
</h1>
<div className='text-xs mb-2 '>
<p>Streamline your workflow and track progress effortlessly </p> 
<p>with our all-in-one task management app.</p>
 </div>
        <button
          onClick={handleGoogleSignIn}
          className="bg-[#292929] text-white py-2 px-4 rounded-lg w-full mb-4 hover:bg-blue-600 flex items-center justify-center"
        >
        <span className='mr-2'><FcGoogle/></span>  Continue with Google
        </button>
        <button
          onClick={handleLogOut}
          className="bg-red-500 text-white py-2 px-4 rounded-lg w-full hover:bg-red-600"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};



export default Login