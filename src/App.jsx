
import './App.css'
import Login from './Pages/Login'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from './components/Header/Header'
import Layout from './components/Layout'
import CreateTask from './components/CreateTask/CreateTask'


function App() {
  

  return (
    <>
     <Router>
      <Layout/>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path='/header' element={<Header/>}/>
        <Route path='/createTask' element={<CreateTask/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App


