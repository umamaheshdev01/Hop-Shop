'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useCartContext } from '../../app/context/CartProvider'

export function Component({ name, price, des, img, id }) {
  const { cart, add, remove } = useCartContext()
  const [isInCart, setIsInCart] = useState(false)

  useEffect(() => {
    const itemInCart = cart.some(item => item.id === id)
    setIsInCart(itemInCart)
  }, [cart, id])

  const handleButtonClick = () => {
    if (isInCart) {
      remove(id) // Remove item from cart
    } else {
      add(id, name, price, 1, img) // Add item to cart
    }
    setIsInCart(!isInCart)
  }

  return (
    <div className="bg-black-800 border-[1px] border-gray-800 rounded-lg shadow-md overflow-hidden w-full max-w-sm mx-auto">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt="Product Image"
          width={400}
          height={300}
          className="w-full h-full object-contain transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500 text-sm">
          {des}
        </p>
        <br />
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">₹{price}</span>
          <Button
            size="sm"
            onClick={handleButtonClick}
            style={{ backgroundColor: isInCart ? 'red' : '', color: isInCart ? 'white' : '' }}
          >
            {isInCart ? 'Remove from Cart' : 'Add to Cart'}
          </Button>
        </div>
      </div>
    </div>
  )
}
