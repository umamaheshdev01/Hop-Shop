'use state'
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useCartContext } from '../../app/context/CartProvider'; // Adjust the import path as necessary

export function Showbabe({ id, image, des, short, price, name }) {
  const { add, cart } = useCartContext(); // Using the custom hook to access context state and dispatch function
  const [quantity, setQuantity] = useState(1); // Initialize quantity state

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = price * quantity;

  const addToCart = () => {
    add(id, name, price, quantity, image); // Dispatching an 'ADD' action with item details
  };

  const isInCart = cart.some(item => item.id === id); // Check if item is already in cart

  return (
    <div className="grid md:grid-cols-[1fr_400px] gap-8 lg:gap-16 items-start max-w-6xl px-4 mx-auto py-8 md:py-12">
      <div>
        <img
          src={image}
          alt="Product Image"
          width={400}
          height={400}
          className="rounded-lg object-cover w-1/2 aspect-square md:w-auto md:h-auto"
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
            <p className="text-2xl font-bold mt-4"> ₹{totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border w-8 h-8"
                onClick={decreaseQuantity}
              >
                <MinusIcon className="w-4 h-4" />
              </Button>
              <span className="text-2xl font-bold">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border w-8 h-8"
                onClick={increaseQuantity}
              >
                <PlusIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex gap-4">
              <Button size="lg" onClick={addToCart} disabled={isInCart}>
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
