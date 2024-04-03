import React from 'react';

function Services(prop) {
  return (
<div className='container mx-auto justify-center max-w-6xl'>
  <div className='grid grid-cols-1 gap-4 mt-5 mx-20 justify-center'>
    <div className='grid grid-cols-3 bg-white p-4 rounded-3xl shadow-custom h-48 flex items-center'>
      <div>
      <h2 className='text-2xl mx-5'>Service {1}</h2>
      <p className='mx-5'>esto es una prueba </p>
      </div>
      
      <p className='font-bold text-3xl text-center'>300€</p>
      <label className="cursor-pointer flex justify-center items-center">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          name='Añadir'
        />
        <span className='mx-5'>Añadir</span>
      </label>
    </div>
  </div>
</div>

  );
}
export default Services;