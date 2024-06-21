

import { Button } from "@/components/ui/button"

export function Confusion() {
  return (
    <div className="grid md:grid-cols-[1fr_400px] gap-8 lg:gap-16 items-start max-w-6xl px-4 mx-auto py-8 md:py-12">
      <div>
        <img
          src="/placeholder.svg"
          alt="Product Image"
          width={600}
          height={600}
          className="rounded-lg object-cover w-full aspect-square"
        />
      </div>
      <div className="grid gap-8">
        <div>
          <h1 className="font-bold text-3xl lg:text-4xl">Acme Prism T-Shirt</h1>
          <p className="text-muted-foreground">60% combed ringspun cotton/40% polyester jersey tee.</p>
        </div>
        <div className="grid gap-6">
          <p>
            Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern individual. This tee
            is crafted with a meticulous composition of 60% combed ringspun cotton and 40% polyester jersey, ensuring a
            soft and breathable fabric that feels gentle against the skin.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full border w-8 h-8">
                <MinusIcon className="w-4 h-4" />
              </Button>
              <span className="text-2xl font-bold">1</span>
              <Button variant="outline" size="icon" className="rounded-full border w-8 h-8">
                <PlusIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex gap-4">
              <Button size="lg">Buy Now</Button>
              <Button size="lg" variant="outline">
                <ShoppingCartIcon className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

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
