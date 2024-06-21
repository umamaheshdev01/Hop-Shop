'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { useCartContext } from "@/app/context/CartProvider"
import addFromCart from '../../app/(demo)/helper'
import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export function Pay({price}) {

  const data2 = useUser()
  const { special } = useCartContext()
  const [mail,setMail] = useState('')
  const router = useRouter()

  useEffect(()=>{
     setMail(data2.user?.emailAddresses[0].emailAddress)
  })

  const handleOrder =()=>{
       
    addFromCart({
        mail :mail,
        proid : special.id,
        stock : special.quantity,
        price : special.price

    })
        router.push('/success')
        


  }

  return (
    <div className="flex flex-col items-center justify-center  min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Complete your purchase</CardTitle>
          <CardDescription>Review the price and please select a payment method</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="total">Total to pay</Label>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold">₹{price}</span>
              <span className="text-muted-foreground">INR</span>
            </div>
          </div>
          <Separator />
          <RadioGroup defaultValue="card" className="grid gap-4">
            <div>
              <RadioGroupItem value="card" id="card" className="peer sr-only" />
              <Label
                htmlFor="card"
                className="flex items-center gap-4 rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <CreditCardIcon className="h-6 w-6" />
                <span>Credit/Debit Card</span>
              </Label>
            </div>
            
            <div>
              <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
              <Label
                htmlFor="apple"
                className="flex items-center gap-4 rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <AppleIcon className="h-6 w-6" />
                <span>Apple Pay</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="google" id="google" className="peer sr-only" />
              <Label
                htmlFor="google"
                className="flex items-center gap-4 rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <ChromeIcon className="h-6 w-6" />
                <span>Google Pay</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="bank-transfer" id="bank-transfer" className="peer sr-only" />
              <Label
                htmlFor="bank-transfer"
                className="flex items-center gap-4 rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <BanknoteIcon className="h-6 w-6" />
                <span>Bank Transfer</span>
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
        <CardFooter>
          <Button onClick={()=>handleOrder()} className="w-full">Complete Payment</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function AppleIcon(props) {
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
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  )
}


function BanknoteIcon(props) {
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
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  )
}


function ChromeIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function CreditCardIcon(props) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function WalletCardsIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
      <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
    </svg>
  )
}
