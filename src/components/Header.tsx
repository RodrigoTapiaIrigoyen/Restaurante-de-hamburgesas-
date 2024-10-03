import React from 'react'
import { Utensils } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-red-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Utensils className="mr-2" />
          <h1 className="text-2xl font-bold">Pop UP Burgers </h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#menu" className="hover:underline">Menú</a></li>
            <li><a href="#ubicacion" className="hover:underline">Ubicación</a></li>
            <li><a href="#pedido" className="hover:underline">Pedir ahora</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header