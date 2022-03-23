/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react"
import cardsData from 'api/cards'
export default function Cards() {

  const [ cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData)
  }, [])

  return (
    <div className="grid grid-cols-3 pt-16 pb-16 gap-x-4">
      {cards.length && cards.map(card => (
        <div className="bg-white p-14 rounded-lg shadow-sm flex flex-col items-center text-center">
          <img className="w-[150px] h-[150px] mb-6" src={card.image} />
          <h6 className="font-semibold whitespace-nowrap text-lg text-primary-brand-color">{card.title}</h6>
          <p className="mt-2 text-base text-gray-500">{card.description}</p>
        </div>
      ))}
    </div>
  )
}
