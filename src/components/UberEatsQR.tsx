import React from 'react';
import { QrCode } from 'lucide-react';

const UberEatsQR = () => {
  const uberEatsLink =
    'https://www.ubereats.com/store/burger-delicia/ESdzu9iJU9u8yW8RkSyeVQ';

  return (
    <section id="pedido" className="py-16 bg-red-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Pide ahora en Uber Eats</h2>
        <div className="flex justify-center items-center">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
              uberEatsLink
            )}`}
            alt="Código QR de Uber Eats"
            className="w-48 h-48 mr-8"
          />
          <div>
            <p className="text-xl mb-4">
              Escanea el código QR para hacer tu pedido directamente en Uber
              Eats
            </p>
            <p className="text-sm">
              O visita nuestro perfil en la app de Uber Eats buscando "Pop Up Burgers"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UberEatsQR;
