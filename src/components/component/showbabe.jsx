'use state'
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useCartContext } from '../../app/context/CartProvider'; // Adjust the import path as necessary
import Link from 'next/link';

export function Showbabe({ id, image, des, short, price, name }) {
  const { add, setSpecial, cart } = useCartContext()
  const [quantity, setQuantity] = useState(1)
  const isInCart = cart.some(item => item.id === id)
  const totalPrice = price * quantity

  const handleBuyNow = () => {
    setSpecial(id, name, price, quantity, image)
  }

  const handleAddToCart = () => {
    add(id, name, price, quantity, image)
  }

  return (
    <div className="grid md:grid-cols-[1fr_400px] gap-8 lg:gap-16 items-start max-w-6xl px-4 mx-auto py-8 md:py-12">
      <div>
        <img
          src={image}
          alt="Product Image"
          width={600}
          height={600}
          className="rounded-lg object-cover w-full aspect-square"
        />
      </div>
      <div className="grid gap-8">
        <div>
          <h1 className="font-bold text-3xl lg:text-4xl">{name}</h1>
          <p className="text-muted-foreground">{short}</p>
        </div>
        <div className="grid gap-6">
          <p>{des}</p>
          <div>
            <p className="text-2xl font-bold mt-4">₹{totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border w-8 h-8"
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                <MinusIcon className="w-4 h-4" />
              </Button>
              <span className="text-2xl font-bold">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border w-8 h-8"
                onClick={() => setQuantity(quantity + 1)}
              >
                <PlusIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex gap-4">
              <Link href={`payment/pay/${totalPrice}`}>
                <Button size="lg" variant="outline" onClick={handleBuyNow}>Buy Now</Button>
              </Link>
              <Button size="lg" onClick={handleAddToCart} disabled={isInCart}>
                {isInCart ? (
                  <>
                    <ShoppingCartIcon className="w-4 h-4 mr-2 text-green-500" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCartIcon className="w-4 h-4 mr-2" />
                    Add to Cart
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default Showbabe;

// Your icon components (MinusIcon, PlusIcon, ShoppingCartIcon) remain unchanged

// Your icon components (MinusIcon, PlusIcon, ShoppingCartIcon) remain unchanged


function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}
