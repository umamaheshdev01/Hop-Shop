import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://irjjmagghoqlestojjpo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyamptYWdnaG9xbGVzdG9qanBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3ODE2NzcsImV4cCI6MjAzNDM1NzY3N30.xepw1_j-kFYJlacXLOO_yvIBo5a004Gcr-8hQnG6N7U'
const supabase = createClient(supabaseUrl, supabaseKey)
import { NextResponse } from "next/server"



export const POST = async(req,res)=>{

    function extractUsername(email) {

        let parts = email.split('@');
        let username = parts[0];

        let capitalizedUsername = username.charAt(0).toUpperCase() + username.slice(1);
    
        return capitalizedUsername;
    }
    
    
    const data1 = await req.json()


    const myemail = data1.data.email_addresses[0].email_address
    const namam = extractUsername(myemail)

    const {data,error} = await supabase.from('Users').insert({email : myemail,username : namam})

    if(error)
    {
        return NextResponse.json({error},{status:500})
    }
    else
    {
        return NextResponse.json({msg:myemail},{status:200})
    }

}