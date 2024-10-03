import React from 'react';

const UberEatsQR = () => {
  // Enlaces para Uber Eats y DiDi Food
  const uberEatsLink = 'https://www.ubereats.com/store/burger-delicia/ESdzu9iJU9u8yW8RkSyeVQ';
  const didiLink = 'https://bit.ly/3Y7OKWF'; // Enlace acortado de DiDi Food

  return (
    <section id="pedido" className="py-16 bg-red-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Pide ahora en Uber Eats o DiDi Food</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* Contenedor de Uber Eats */}
          <div className="flex flex-col items-center">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                uberEatsLink
              )}`}
              alt="Código QR de Uber Eats"
              className="w-48 h-48 mb-4"
            />
            <p className="text-xl mb-2">Uber Eats</p>
            <p className="text-sm">Escanea el código QR para hacer tu pedido</p>
          </div>

          {/* Contenedor de DiDi Food */}
          <div className="flex flex-col items-center">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                didiLink
              )}`}
              alt="Código QR de DiDi Food"
              className="w-48 h-48 mb-4 "
            />
            <p className="text-xl mb-2">DiDi Food</p>
            <p className="text-sm">Escanea el código QR para hacer tu pedido</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UberEatsQR;
