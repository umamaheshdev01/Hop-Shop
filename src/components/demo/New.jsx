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
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";

const supabaseUrl = 'https://irjjmagghoqlestojjpo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyamptYWdnaG9xbGVzdG9qanBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3ODE2NzcsImV4cCI6MjAzNDM1NzY3N30.xepw1_j-kFYJlacXLOO_yvIBo5a004Gcr-8hQnG6N7U'
const supabase = createClient(supabaseUrl, supabaseKey)




export default function New() {

    const { user, isLoaded } = useUser();
  const [mail, setMail] = useState('');
  const [array, setArray] = useState([]);

  useEffect(() => {
    if (isLoaded && mail === '') {
      setMail(user.emailAddresses[0].emailAddress);
    }
  }, [isLoaded, mail, user]);

  useEffect(() => {
    const fetchme = async () => {
      const { data, error } = await supabase
        .from('Orders')
        .select('*, Product(*)')
        .eq('email', mail);

      if (error) {
        console.error('Error fetching data:', error);
        return;
      }

      const convertTimestampToDate = (timestamp) => {
        const date = new Date(timestamp);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
      };

      const getDateTwoDaysAhead = (timestamp) => {
        const date = new Date(timestamp);
        date.setDate(date.getDate() + 2);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
      };

      const list = data.map((ele) => ({
        id: ele.id,
        orderNumber: `#${ele.id}`,
        date: convertTimestampToDate(ele.created_at),
        items: ele.quantity,
        total: ele.price,
        status: ele.status,
        deliveryDate: getDateTwoDaysAhead(ele.created_at),
        img: ele.Product.image,
      }));

      setArray(list.reverse());
      console.log(list);
    };

    if (mail) {
      fetchme();
    }
  }, [mail]);









  return (
    <Card className="rounded-lg border-none mt-6">
      <CardContent className="p-6">
        <div className="flex justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
          <div className="flex flex-col w-full relative ">
           
            <SignedIn>
       {array && <Orderlist orders={array}></Orderlist>}
       </SignedIn>

       <SignedOut><p className="text-2xl">Please Sign In :)</p></SignedOut>
            <div className="absolute -bottom-8 right-0">
              
              
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
