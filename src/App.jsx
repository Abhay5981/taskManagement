
import './App.css'
import Login from './Pages/Login'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


import Layout from './components/Layout'
import CreateTask from './components/CreateTask/CreateTask'
import NoMatch from './components/NoMatch'
import AddTodo from './components/AddTodo/AddTodo'



function App() {
  

  return (
    <>
     <Router>
     
      <Routes>
        <Route path ='/' element={<Layout/>}/>
        <Route path='/createTask' element={<CreateTask/>}/>
        <Route path ="*" element={<NoMatch/>}/>
        <Route path='/addTodo' element={<AddTodo/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App


