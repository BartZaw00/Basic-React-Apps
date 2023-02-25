import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
       <h1>TIRED OF BORING LOREM IPSUM?</h1>
    <div className="content">
        <form data-form>
            <label for="amount">Paragraphs:</label>
            <input type="number" name="amount" id="amount" placeholder="5" />
            <button type="submit">GENERATE</button>
        </form>
    </div>
    <article></article>
    </div>
  )
}

export default App
