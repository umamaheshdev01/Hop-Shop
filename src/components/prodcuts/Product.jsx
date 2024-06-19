import React from 'react'

function Product() {
  return (
    
    <div className="rounded-lg bg-card  text-card-foreground shadow-sm w-full max-w-sm h-50vh" >
      <img
        src="https://th.bing.com/th/id/OIP.0uPZdPviG64nP4dFK0I5WwHaE8?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt="Product Image"
        width="500"
        height="500"
        className="rounded-t-lg object-cover w-full h-1/2"
      />
      <div className="p-6 space-y-4 h-1/2 bg-gray-900 overflow-auto">
        <div className="flex items-center justify-between">
          <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Acme Wireless Headphones</h3>
          <div className="text-2xl font-bold">$99</div>
        </div>
        <p className="text-sm text-muted-foreground">
          Experience immersive sound with our Acme Wireless Headphones. Featuring high-quality drivers and long-lasting
          battery life, these headphones are perfect for music, movies, and more.
        </p>
        <div className="flex justify-end">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
   
  )
}

export default Product
