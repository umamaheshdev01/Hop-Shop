
import { Button } from "@/components/ui/button"

export function Component({name,price,des,img,id}:{name : string , price: BigInteger , des:string,img:string,id:BigInteger}) {
  return (
    <div className="bg-black-800 border-[1px] border-gray-800 rounded-lg shadow-md overflow-hidden w-full max-w-sm mx-auto">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={img }
          alt="Product Image"
          width={400}
          height={300}
          className="w-full h-full object-contain  transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500 text-sm">
          {des}
        </p>
        <br></br>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">₹{price}</span>
          <Button size="sm">Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}
