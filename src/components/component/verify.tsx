'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Verify() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="flex flex-col items-center gap-6 py-8">
        <div className="bg-green-500 rounded-full p-4">
          <CheckIcon className="w-6 h-6 text-white" />
        </div>
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold">Payment Successful</h2>
          <p className="text-muted-foreground">
            Your payment has been processed. Click the button below to check your orders.
          </p>
        </div>
        <Button className="w-full">Check Orders</Button>
      </CardContent>
    </Card>
  )
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
