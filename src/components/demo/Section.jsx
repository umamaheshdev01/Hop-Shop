import Link from "next/link";
import Image from "next/image";
import Product from '../prodcuts/Product'

import { Card, CardContent } from "@/components/ui/card";
import { Component } from "../component/component";
import { Orderlist } from "../component/orderlist";
import { Pokemon } from "../component/pokemon";
import { Showbabe } from "../component/showbabe";



export default function Chrome({ id, image, des, short, price, name }) {
  return (
    <Card className="rounded-lg border-none mt-6">
      <CardContent className="p-6">
        <div className="flex justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
          <div className="flex flex-col w-full relative items-center">
            {/* <Image
              src="/placeholder.png"
              alt="Placeholder Image"
              width={500}
              height={500}
              priority
            />
            <Image
              src="/placeholder.png"
              alt="Placeholder Image"
              width={500}
              height={500}
              priority
            /> */}
            
            {/* <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-4">
     
      <Component></Component>
      <Component></Component>
      <Component></Component>
      <Component></Component>
      <Component></Component>

      
    </div> */}

    {/* <Orderlist></Orderlist> */}

    <Showbabe id={id} name={name} image={image} des={des} short={short} price={price}></Showbabe>

            <div className="absolute -bottom-8 right-0">
              
              
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
