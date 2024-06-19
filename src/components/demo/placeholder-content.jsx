'use client'
import Link from "next/link";
import Image from "next/image";
import Product from '../prodcuts/Product'
import { Card, CardContent } from "@/components/ui/card";
import { Component } from "../component/component";
import { Orderlist } from "../component/orderlist";





import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from "react";
import { Description } from "@radix-ui/react-dialog";

const supabaseUrl = 'https://irjjmagghoqlestojjpo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyamptYWdnaG9xbGVzdG9qanBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3ODE2NzcsImV4cCI6MjAzNDM1NzY3N30.xepw1_j-kFYJlacXLOO_yvIBo5a004Gcr-8hQnG6N7U'
const supabase = createClient(supabaseUrl, supabaseKey)




export default function PlaceholderContent() {


      const [array,setArray] = useState(null)

   
       useEffect(()=>{

        const fetchme = async()=>{
             
           const {data,error} = await supabase.from('Product').select('*').eq('type',2)

        
            
           const list  =[]

           data?.forEach((ele)=>{
               list.push({
                  name : ele.name,
                  id : ele.id,
                  des : ele.short,
                  img : ele.image,
                  price : ele.price
               })
           })

           setArray(list)

           console.log(list)
           
        }

        fetchme()

       },[])
    











  return (
    <Card className="rounded-lg border-none mt-6">
      <CardContent className="p-6">
        <div className="flex justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
          <div className="flex flex-col w-full relative ">
           
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-4">
     
      {array && 
         array.map(ele=>{
          return <Component name={ele.name} id={ele.id} price={ele.price} des={ele.des} img={ele.img}></Component>
         })
        }

      
    </div>

    

            <div className="absolute -bottom-8 right-0">
              
              
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
