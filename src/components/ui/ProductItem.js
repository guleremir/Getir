
import { BsPlus } from 'react-icons/bs'
export default function ProductItem({ product }) {
  return (
    <div className="bg-white flex flex-col gap-y-1 relative items-center text-center p-1">
        <button className='absolute top-3 right-3 bg-white w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg text-brand-color shadow-md '>
            <BsPlus size={20}/>
        </button>
        <img src={product.image} alt={product.title}/>
        <div className="text-sm font-semibold text-brand-color">{product.price} ₺</div>
        <div className="text-sm font-semibold text-gray-900">{product.title}</div>
        <div className="text-sm font text-gray-500">{product.alt}</div>
    </div>
  )
}
