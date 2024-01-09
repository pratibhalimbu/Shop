import React from 'react'
import Header from './Components.jsx/Header'
import Navbar from './Components.jsx/Navbar'
import Footer from './Components.jsx/Footer'
import "./styles.scss"
import Brands from './Components.jsx/Brands'
import Sale from './Components.jsx/Sale'
import Newsletter from './Components.jsx/Newsletter'


function App() {
  return (
    <>
    <Header/>
    <Navbar/>
    <Brands/>
    <Sale/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default App