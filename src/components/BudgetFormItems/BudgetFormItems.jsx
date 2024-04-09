import{useState, useContext} from 'react';
import { MyContext } from '../../context/MyContext';
import React from 'react';

function BudgetFormItems({product, price, description}) {   
  
const [isCheck, setIsCheck] = useState(false);  
const { addPrice, removePrice } = useContext(MyContext);

const handleCheckboxChange = (e) => {
  setIsCheck(e.target.checked); // Actualiza el estado basado en si el checkbox está marcado o no
  if (e.target.checked) {
    addPrice(Number(price));
  } else {
    removePrice(Number(price));
  }
}

    return (
<div className='container mx-auto justify-center max-w-6xl'>
  <div className='grid grid-cols-1 gap-4 mt-5 mx-20 justify-center'>
    <div className='grid grid-cols-3 bg-white p-4 rounded-3xl shadow-custom h-48 flex items-center'>
      <div>
      <h2 className='text-3xl font-semibold mx-5'>{product}</h2>
      <p className='mx-5'>{description} </p>
      </div>
      
      <p className='font-bold text-3xl text-center'>{price}<span className='text-xl'> €</span></p>
      <label className="cursor-pointer flex justify-center items-center">
        <input
          type="checkbox"
          checked={isCheck}
          onChange={handleCheckboxChange}
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

export default BudgetFormItems;