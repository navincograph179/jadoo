import React from 'react'
import Navigation from './components/Navigation'
import './App.css'
import Home from './components/Home'
import Category from './components/Category'

const App = () => {
  return (
    <div className="App">
        <Navigation />
        <Home />
        <Category />
    </div>
  )
}

export default App