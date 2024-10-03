import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import UberEatsQR from './components/UberEatsQR'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-yellow-50">
      <Header />
      <Hero />
      <Menu />
      <UberEatsQR />
      <Footer />
    </div>
  )
}

export default App