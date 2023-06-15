import Home from './components/home'
import Card from './components/Card'
import  FrameContext  from './FrameContext'
import {Routes, Route} from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<FrameContext/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/card" element={<Card/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
