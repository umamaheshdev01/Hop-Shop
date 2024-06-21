import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://irjjmagghoqlestojjpo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyamptYWdnaG9xbGVzdG9qanBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3ODE2NzcsImV4cCI6MjAzNDM1NzY3N30.xepw1_j-kFYJlacXLOO_yvIBo5a004Gcr-8hQnG6N7U'
const supabase = createClient(supabaseUrl, supabaseKey)


const addFromCart = async({mail,proid,stock,price})=>{

      const {data,error} = await supabase.from('Orders').insert({
        email : mail,
        pro_id : proid,
        quantity : stock,
        price : price
      })

}


export default addFromCart