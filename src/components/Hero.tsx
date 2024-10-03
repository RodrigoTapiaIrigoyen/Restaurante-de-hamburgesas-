import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Hamburguesa deliciosa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center text-white">
        <h2 className="text-5xl font-bold mb-4">Las mejores hamburguesas de la ciudad</h2>
        <p className="text-xl mb-8">Sabor inigualable, ingredientes frescos y mucho amor en cada bocado</p>
        <a href="#pedido" className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
          Pide ahora
        </a>
      </div>
    </section>
  )
}

export default Hero