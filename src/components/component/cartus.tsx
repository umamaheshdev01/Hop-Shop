'use client'
import { useCartContext } from '../../app/context/CartProvider'
import { Button } from '@/components/ui/button'
import { SignInButton, SignedOut } from '@clerk/clerk-react'
import { SignedIn } from '@clerk/nextjs'
import { MinusIcon, PlusIcon, Trash2Icon } from 'lucide-react'

export function Cartus() {
  const { cart, total_price, add, remove } = useCartContext()

  const removeOne = (id) => {
    const item = cart.find(item => item.id === id)
    if (item) {
      const newQuantity = item.quantity - 1
      if (newQuantity < 1) {
        remove(id)
      } else {
        add(id, item.name, item.price, -1, item.image)
      }
    }
  }

  const increaseOne = (id) => {
    const item = cart.find(item => item.id === id)
    if (item) {
      add(id, item.name, item.price, 1, item.image)
    }
  }

  const handleRemoveItem = (id) => {
    remove(id)
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6 md:p-8">
      {cart.length === 0 ? (
        <Datagram />
      ) : (
        <div className="grid gap-6">
          <div className="grid gap-4">
            <h1 className="text-2xl font-bold">Shopping Cart</h1>
            <p className="text-sm text-muted-foreground">Review your items and proceed to checkout.</p>
          </div>
          <div className="grid gap-6">
            {cart.map((item) => (
              <div key={item.id} className="grid grid-cols-[auto,1fr,auto,auto] items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md object-cover" />
                <div className="grid gap-1 flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-xs text-muted-foreground">₹{item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => removeOne(item.id)}
                    disabled={item.quantity === 1}
                  >
                    <MinusIcon className="h-4 w-4" />
                  </Button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <Button variant="outline" size="icon" onClick={() => increaseOne(item.id)}>
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => handleRemoveItem(item.id)}>
                    <Trash2Icon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-4 border-t pt-4">
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">Total:</p>
              <p className="text-lg font-medium">₹{total_price.toFixed(2)}</p>
            </div>
            <Button size="lg" className="w-full">
              Pay
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

const Datagram = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 md:p-8">
      <div className="grid gap-6">
        <div className="grid gap-4">
          <SignedIn>
            <h1 className="text-2xl font-bold">Your cart is empty :(</h1>
          </SignedIn>
          <SignedOut>
            <h1 className="text-2xl font-bold">Please <SignInButton></SignInButton> :)</h1>
          </SignedOut>
        </div>
      </div>
    </div>
  )
}
