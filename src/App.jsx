import React from 'react'
import { Link, Route, Routes} from "react-router-dom";
import Form from './components/Form';
import Card from './components/Card';
import Cards from './components/Cards';
const App = () => {
  return (
    <>
    <nav>
      <Link to="/form">Form</Link>
      <Link to="/card">Card</Link>
      <Link to="/cards">go to Cards</Link>
    </nav>
      <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/card" element={<Card />} />
          <Route path="/cards" element={<Cards />} />

      </Routes>
    </>
  )
}

export default App