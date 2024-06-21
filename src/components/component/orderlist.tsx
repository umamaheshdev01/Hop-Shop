
export function Orderlist({orders}) {
 
  return (
    <div className=" px-4 md:px-6 py-8">
      
      <div className="grid gap-4 md:gap-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white dark:bg-black border-1 border-gray-900 rounded-lg shadow-sm hover:shadow-md  transition-shadow"
          >
            <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{order.orderNumber}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{order.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 dark:text-gray-400">
                    {order.items} item{order.items > 1 ? "s" : ""}
                  </span>
                  <span className="font-medium">₹{order.total.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                        : "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                    }`}
                  >
                    {order.status}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Delivery: {order.deliveryDate}</span>
                </div>
              </div>
              <div className="flex justify-end">
                <img
                  src={order.img}
                  width={80}
                  height={32}
                  alt={`Order ${order.orderNumber}`}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
