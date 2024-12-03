import {Routes,Route} from 'react-router-dom'
import Encapsulate from './components/Encapsulate'


//pages
import Index from './pages/Index'
import About from './pages/About'
import Fraudwg from './pages/info/Fraudwg'

function App() {
  
  return (
     <Routes>
       <Route path='/' element={<Encapsulate><Index/></Encapsulate>}/>
       <Route path='/about-us' element={<Encapsulate><About/></Encapsulate>}/>
       <Route path='/fraud-warning' element={<Encapsulate><Fraudwg/></Encapsulate>}/>
     </Routes>
  )
}

export default App
