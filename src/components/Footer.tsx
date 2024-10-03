import React from 'react'
import { MapPin, Phone, Clock } from 'lucide-react'

const Footer = () => {
  return (
    <footer id="ubicacion" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Pop Up Burgers</h3>
            <p>Las mejores hamburguesas de la ciudad, hechas con amor y los mejores ingredientes.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="mr-2" size={18} />
                Calle Enrique Rébsamen 4, C14, Benito Juárez,
              </li>
              
              <li className="flex items-center">
                <Clock className="mr-2" size={18} />
                Mar-Dom: 5:00 - 10:00 pm 
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-600 transition duration-300">Facebook</a>
              <a href="#" className="hover:text-red-600 transition duration-300">Instagram</a>
              <a href="#" className="hover:text-red-600 transition duration-300">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 Pop Up Burgers. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer