import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DisplayFlex from './Lessons/DisplayFlex/DisplayFlex'
import Main from './Main/Main'
import Lesson from './Lesson/Lesson';



function App() {

  return (
    <Router basename='tailwind-css-study'>
      <div className='flex justify-center text-2xl m-2 border-b-4 border-blue-400'>Hello Wod</div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path=':lesson' element={<Lesson />}>
          <Route path='display-flex-grid' element={<DisplayFlex />} />

        </Route>

      </Routes>

    </Router>
  )
}

export default App
