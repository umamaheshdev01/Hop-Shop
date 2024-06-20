'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"
import { createClient } from '@supabase/supabase-js'
import { CircleCheckBig, TicketIcon } from "lucide-react"
import { SignedIn, SignedOut } from "@clerk/clerk-react"
const supabaseUrl = 'https://irjjmagghoqlestojjpo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyamptYWdnaG9xbGVzdG9qanBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3ODE2NzcsImV4cCI6MjAzNDM1NzY3N30.xepw1_j-kFYJlacXLOO_yvIBo5a004Gcr-8hQnG6N7U'
const supabase = createClient(supabaseUrl, supabaseKey)

export function Pokemon() {

  const [userame,setUsername] = useState('Username')
  const [emails,setEmail] = useState('Email')
  const [phone,setPhone] = useState('+12345678')
  const [address,setAddress] = useState('-')
  const [states,setState]=useState(true)

  const data = useUser()
  const emaildata = data.user?.emailAddresses[0].emailAddress

  const setData=async()=>{
     
    await supabase.from('Users').update({username:userame,email:emails,phone:phone,address:address}).eq('email',emails).then(()=>{
      setState(false)
    })
  }
   
  useEffect(()=>{



    const fechme= async ()=>{

      const {data,error} = await supabase.from('Users').select('*').eq('email',emaildata)

      

      const dum = data[0]

      if(dum.address){
        setUsername(dum.username)
        setAddress(dum.address)
        setPhone(dum.phone)

      }
    
    }

    if(data.isLoaded){

      if(userame === 'Username') {
      setUsername(data.user?.username)
      setEmail(data.user?.emailAddresses[0].emailAddress)
      setPhone(data.user?.phoneNumbers[0].phoneNumber)
      fechme();}
    }

    
  })

  

  return (
    <>
    <SignedOut>
      <p className="text-2xl text-bold">Please sign in :)</p>
    </SignedOut>
    <SignedIn>
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>User Settings</CardTitle>
        <CardDescription>Update your personal information here.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" value={userame} onChange={e=>setUsername(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={emails} onChange={e=>setEmail(e.target.value)}   />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" value={phone} onChange={e=>setPhone(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Textarea id="address" rows={3} value={address} onChange={e=>setAddress(e.target.value)} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
       {states && <Button onClick={()=>setData()}>Save Changes</Button>}
       {states || <Button> <span className="mr-2">Done    </span><CircleCheckBig></CircleCheckBig></Button>}

      </CardFooter>
    </Card>
    </SignedIn>
    </>
  )
}
