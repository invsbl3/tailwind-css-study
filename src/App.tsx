import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DisplayFlex from './DisplayFlex/DisplayFlex'
import Main from './Main/Main'
import Lesson from './Lesson/Lesson';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <Router>
      <div>Hello Wod</div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path=':lesson/' element={<Lesson />}>
          <Route path='display-flex-grid' element={<DisplayFlex />} />

        </Route>

      </Routes>

    </Router>
  )
}

export default App
