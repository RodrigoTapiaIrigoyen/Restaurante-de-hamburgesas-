import React from 'react';

const menuItems = [
  {
    name: 'PopUp Doble Bacon!',
    description:
      'Hamburgesa 2 carnes 100% de ternera de res 150gr con queso americano , tocino crujiente , jitomate, cebollas caramelizadas y aderezo de la casa incluye papas a la francesa',
    price: '$230.00',
  },
  {
    name: 'Pop Up Rings',
    description:
      'Hamburgesa 150gr de carne 100% de ternera de res,queso americano,aros de cebolla,jitomate y aderezo de la casa, incluye papas a la francesa',
    price: '$220.00',
  },
  {
    name: 'Clasica PopUp',
    description:
      'Hamburgesa, 150gr de carne 100% de ternera de res , queso americano,jitomate,cebolla asada,aderezo de la casa incluye papas a la francesa',
    price: '$205.00',
  },
  {
    name: 'Big Up',
    description:
      'Hamburgesa 200gr de carne 100% ternera de res rellena de queso monterrey, jitomate,cebollas cocidas y aderezo de la casa incluye papas a la francesa ',
    price: '$230.00',
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestro Menú</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-yellow-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <p className="text-red-600 font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
