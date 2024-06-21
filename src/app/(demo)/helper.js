import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://irjjmagghoqlestojjpo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyamptYWdnaG9xbGVzdG9qanBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3ODE2NzcsImV4cCI6MjAzNDM1NzY3N30.xepw1_j-kFYJlacXLOO_yvIBo5a004Gcr-8hQnG6N7U'
const supabase = createClient(supabaseUrl, supabaseKey)
import emailjs from '@emailjs/browser';

let queue = Promise.resolve();

const addFromCart = async ({ mail, proid, stock, price }) => {

  const task = async () => {
    try {
      // Insert data into Orders table
      const { data, error } = await supabase.from('Orders').insert({
        email: mail,
        pro_id: proid,
        quantity: stock,
        price: price
      });

      if (error) {
        throw error;
      }

      // Retrieve the most recent order details
      const { data: recentOrder, error: orderError } = await supabase
        .from('Orders')
        .select('*, Product(name, image), Users(username)')
        .eq('email', mail)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (orderError) {
        throw orderError;
      }

      console.log(recentOrder);

      // Prepare email data
      const order = recentOrder;
      const getDateTwoDaysAhead = (timestamp) => {
        const date = new Date(timestamp);
        date.setDate(date.getDate() + 0);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
      };

      // Send email using emailjs
      const emailParams = {
        from_name: 'Hop Shop',
        to_name: order.Users.username,
        date: getDateTwoDaysAhead(order.created_at),
        url: order.Product.image,
        pro: order.Product.name,
        quantity: order.quantity,
        price: order.price,
        to_email: order.email
      };

      const emailResponse = await emailjs.send(
        'service_k6y4edr',
        'template_pw3ow35',
        emailParams,
        {
          publicKey: 'nBWxNb5IUeZA-hc3I',
        }
      );

      console.log('Email sent successfully:', emailResponse);

    } catch (error) {
      console.error('Error:', error.message);
      throw error; 
    }
  };

  
  queue = queue.then(task).catch((error) => {
    console.error('Queue error:', error.message);
  });
};

export default addFromCart;
